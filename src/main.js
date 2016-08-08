var glslify = require('glslify');
var when = require( 'when' );

var GLArrayBuffer = require('nanogl/arraybuffer'),
    Program       = require('nanogl/program'),
    Texture       = require('nanogl/texture');

var State = require('nanogl-state')

var PadProcess = require( './pad-process' )
var Composer   = require( './composer' )


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
    alpha: true
  });

  gl.clearColor(0, 0, 0, 0)


  inputTex = new Texture( gl, gl.RGBA );
  inputTex.bind();
  inputTex.setFilter( false, false, false );
  inputTex.clamp();
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);


  glState = new State(gl);
  gl.state = glState;


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


function render( images ){

  var composer = new Composer( gl );
  composer.compose( images );

  cvs.width  = composer.size[0];
  cvs.height = composer.size[1];

  var process = new PadProcess( gl );
  process.process( composer.fbo.color );

}



/*


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
  var passes = 0;
  
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
*/

// -------------------------------------
// GL SETUP END
// -------------------------------------





function main(){
  initGL()
  elFileInput.addEventListener('change', openFile, false);
}


function openFile( e ){
  var files = e.target.files;
  if (files.length === 0 ) {
    return;
  }
  var pa = []
  for (var i = 0; i < files.length; i++) {
    pa.push( loadFile(files[i]) );
  }

  when.all( pa ).then( inputsLoaded );
 
}


function inputsLoaded( images ){
  render( images );
}



function loadFile( file ){
  var def = when.defer();
  var reader = new FileReader();

  reader.onload = function( e ){
    var img = new Image();
    var contents = e.target.result;
    img.onload = function(){
      def.resolve( img )
    };
    img.src = e.target.result;
  }

  reader.readAsDataURL(file);
  return def.promise;
}




main();
