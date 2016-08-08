var glslify    = require('glslify');

var FillScreen = require( './fillscreen' );
var PadProgram = require( './pad-program' );
var Program    = require( 'nanogl/program' );
var Fbo        = require( 'nanogl/fbo' );


// samples per passes
var P_PER_PASS = 32; 


function PadProcess( gl ){

  this.nextPass = this._nextPass.bind( this );
  this.gl = gl;
  
  this.padPrg =new PadProgram( gl );

  this.stencilPrg = new Program( gl );
  this.stencilPrg.compile( 
    glslify( './stencil_pass.vert' ),
    glslify( './stencil_pass.frag' )
  );


  this.stencilPassCfg = gl.state.config()
  this.stencilPassCfg
      .enableStencil( true )
      .stencilFunc( gl.ALWAYS, 1, 0xFF )
      .stencilOp( gl.KEEP, gl.KEEP, gl.REPLACE )
      .stencilMask( 0xFF )
      .colorMask( false, false, false, false )
      .depthMask( false );

  this.fillPrg = new Program( gl );
  this.fillPrg.compile( 
    glslify( './base.vert' ),
    glslify( './base.frag' )
  )
  
  this.fill = new FillScreen( gl );
  this.radius = 16;

  this.fbo = new Fbo( gl, {
    depth:false,
    stencil : true,
    format : gl.RGBA
  } );

}


PadProcess.prototype = {


  process : function( input ){
    this.input = input;

    this.fbo.resize( input.width, input.height );

    this.fbo.bind();
    this.fbo.clear()

    this.stencilPrePass();
    this.drawBase();


    this.kernel = this.createKernelForRadius( this.radius  );
    this.remain = this.kernel.length/2;
    this.ptr    = 0;

    this.nextPass();

  },


  _nextPass : function(){
    

    if( this.remain <= 0 ){
      this.drawToScreen()
      return;
    }

    // this.fbo.bind();

    var nPoints = Math.min( this.remain, P_PER_PASS );
    this.remain -= nPoints;

    var cKernel = new Float32Array( this.kernel.buffer,  this.ptr*2*4, nPoints*2 );
    this.padPrg.setKernel( cKernel );

    this.padPrg.prg.uTex( this.input );
    this.padPrg.prg.uTexelRatio( 
      1.0/this.input.width,
      1.0/this.input.height
    );


    this.padPrg.cfg.apply()
    this.fill.render( this.padPrg.prg );

    this.ptr += nPoints;
    this.gl.flush();


    setTimeout( this.nextPass, 10 );

  },


  drawToScreen : function(){
    var gl = this.gl;

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport( 0, 0, this.fbo.width, this.fbo.height );
    gl.clear( gl.COLOR_BUFFER_BIT );

    this.fillPrg.use();
    this.fillPrg.uTex( this.fbo.color );
    this.gl.state.apply()
    this.fill.render( this.fillPrg );
  },


  stencilPrePass : function(){
    this.stencilPrg.use();
    this.stencilPrg.uTex( this.input );
    this.stencilPassCfg.apply()
    this.fill.render( this.stencilPrg );
  },


  drawBase : function(){
    this.fillPrg.use();
    this.fillPrg.uTex( this.input );
    this.gl.state.apply()
    this.fill.render( this.fillPrg );
  },


  createKernelForRadius : function( r ){

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

}


module.exports = PadProcess;