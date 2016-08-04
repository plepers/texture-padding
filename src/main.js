var glslify = require('glslify');

var GLArrayBuffer = require('nanogl/arraybuffer'),
    Program       = require('nanogl/program'),
    Texture       = require('nanogl/texture');

var State = require('nanogl-state')


var elFileInput  = document.getElementById('file-input'),
    elImg        = document.getElementById('preview'),
    elCvsWrapper = document.getElementById('cvs-wrapper');



var outputSize = 2048;



// -------------------------
// GL setup
// -------------------------

var cvs, gl,
    basePrg, 
    padPrg, 
    stencilPrg, 
    inputTex,
    fsGeom;

var stencilCfg, 
    padCfg,
    glState;




function initGL(){

  cvs = document.createElement( 'canvas' );
  cvs.width  = outputSize
  cvs.height = outputSize

  elCvsWrapper.appendChild( cvs )

  gl = cvs.getContext( 'webgl',{
    stencil:true
  });

  setupProgram()
  setupGeom()

  inputTex = new Texture( gl, gl.RGBA );
  inputTex.bind();
  inputTex.setFilter( false, false, false );
  inputTex.clamp();
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);


  glState = new State(gl);


  stencilPassCfg = glState.config()
  stencilPassCfg
      .enableStencil( true )
      .stencilFunc( gl.ALWAYS, 1, 0xFF )
      .stencilOp( gl.KEEP, gl.KEEP, gl.REPLACE )
      .stencilMask( 0xFF )
      .colorMask( false, false, false, false )
      .depthMask( false );


  padCfg = glState.config()
  padCfg
      .enableStencil( true )
      .stencilFunc( gl.NOTEQUAL, 0, 0xFF )
      .stencilOp( gl.REPLACE, gl.REPLACE, gl.REPLACE )
      .stencilMask( 0xFF );

}



function createInputTexture( img ){
  var tex = gl.createTexture( gl.TEXTURE_2D );
  gl.bindTexture( gl.TEXTURE_2D, tex );

  gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img );

  gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
  gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );

  gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
  gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );

  gl.bindTexture( gl.TEXTURE_2D, null );

  return tex;
}


function setupProgram( ){
  padPrg = new Program( gl );



  basePrg = new Program( gl );
  basePrg.compile( 
    glslify( './base.vert' ),
    glslify( './base.frag' )
  )

  stencilPrg = new Program( gl );
  stencilPrg.compile( 
    glslify( './stencil_pass.vert' ),
    glslify( './stencil_pass.frag' )
  )
}



function setupGeom() {
  var vertices = new Float32Array( [
    -1, -1,
    1,  -1,
    -1,  1,
    1,   1
  ] );


  fsGeom = new GLArrayBuffer( gl, vertices );
  fsGeom.attrib( 'aPosition', 2, gl.FLOAT );

}


function render() {

  // STENCIL CLIP
  stencilClip();

  // DRAW BASE
  basePrg.use();
  basePrg.uTex( inputTex );
  fsGeom.attribPointer( basePrg );
  glState.apply()
  fsGeom.drawTriangleStrip();




  // DRAW PADDING

  var kernel = createKernelForRadius( 64 );
  var P_PER_PASS = 32; 
  var lastNP = -1

  var remain = kernel.length / 2;
  var ptr = 0;
  var passes = 0
  while( remain > 0 ){
    passes++;
    var nPoints = Math.min( remain, P_PER_PASS );
    remain -= nPoints;

    if( nPoints !== lastNP ){

      padPrg.compile( 
        glslify( './pad.vert' ),
        glslify( './pad.frag' ),
        '#define N_POINT '+(nPoints)+'\n'
      )
    }
    lastNP = nPoints;

    padPrg.use();
    padPrg.uTex( inputTex );
    padPrg.uKernel( new Float32Array( kernel.buffer,  ptr*2*4, nPoints*2 ) );
    padPrg.uTexelRatio( 1.0/cvs.width, 1.0/cvs.height );

    fsGeom.attribPointer( padPrg );

    padCfg.apply()
    fsGeom.drawTriangleStrip();

    ptr += nPoints
  }
  console.log( passes )

}

function stencilClip() {



  stencilPrg.use();
  stencilPrg.uTex( inputTex );
  fsGeom.attribPointer( stencilPrg );

  stencilPassCfg.apply()
  fsGeom.drawTriangleStrip();


}


function createKernelForRadius( r ){

  var texels = []
  
  for (var x = -r; x <= r; x++) {
    for (var y = -r; y <= r; y++) {

      var dist = Math.sqrt( x*x +y*y );
      if( dist < r+.5 ){

        texels.push({
          x:x,
          y:y,
          dist:dist
        });

      }

    } 

  }

  texels = texels.sort( function(a, b){
    return a.dist - b.dist;
  })

  var res = new Float32Array( texels.length*2 )
  for (var i = 0; i < texels.length; i++) {
    res[i*2+0] = texels[i].x;
    res[i*2+1] = texels[i].y;
  }

  return res;

}


createKernelForRadius( 3 );

// -------------------------------------
// GL SETUP END
// -------------------------------------





function main(){
  initGL()
  elFileInput.addEventListener('change', openFile, false);
}


function openFile( e ){
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = onFileOpened;
  reader.readAsDataURL(file);
}

function onFileOpened( e ){
  var contents = e.target.result;
  elImg.onload = inputLoaded;
  elImg.src = e.target.result;
}


function inputLoaded( ){
  inputTex.fromImage( elImg );
  
  console.log(elImg.naturalWidth );
  console.log(elImg.naturalHeight );

  cvs.width  = elImg.naturalWidth  ;
  cvs.height = elImg.naturalHeight ;
  gl.viewport( 0, 0, cvs.width, cvs.height )

  render()
}

main();
