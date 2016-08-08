
var GLArrayBuffer = require('nanogl/arraybuffer');


function FillScreen( gl ){

  var vertices = new Float32Array( [
    -1, -1,
    1,  -1,
    -1,  1,
    1,   1
  ] );


  this.geom = new GLArrayBuffer( gl, vertices );
  this.geom.attrib( 'aPosition', 2, gl.FLOAT );

}


FillScreen.prototype = {

  
  render : function( prg ){
    this.geom.attribPointer( prg );
    this.geom.drawTriangleStrip();
  }


}


module.exports = FillScreen;