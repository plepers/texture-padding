var glslify    = require('glslify');

var Program    = require( 'nanogl/program' );
var Fbo        = require( 'nanogl/fbo' );
var Texture    = require( 'nanogl/texture' );
var FillScreen = require( './fillscreen' );


function Composer( gl ){
  this.gl = gl;

  this.fillPrg = new Program( gl );
  this.fillPrg.compile( 
    glslify( './base.vert' ),
    glslify( './base.frag' )
  )
  
  this.fill = new FillScreen( gl );

  this.fbo = new Fbo( gl, {
    format: gl.RGBA
  })

  this.fbo.color.clamp()
  this.fbo.color.setFilter( false,false,false );

  this.size = [0, 0]

  this.cfg = gl.state.config()
    .enableBlend()
    .blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
}


Composer.prototype = {

  compose : function( images ){

    var mW = 0
    var mH = 0

    var tex = new Texture( this.gl, this.gl.RGBA );

    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      mW = Math.max( mW, img.naturalWidth );
      mH = Math.max( mH, img.naturalHeight );
    }
    this.size = [ mW, mH ];
    this.fbo.resize( mW, mH );

    this.fbo.bind();

    this.fillPrg.use();

    for (var i = 0; i < images.length; i++) {
      var img = images[i];
      tex.fromImage( img );
      this.fillPrg.uTex( tex );
      this.cfg.apply()
      this.fill.render( this.fillPrg );
    }




  }



}



module.exports = Composer;