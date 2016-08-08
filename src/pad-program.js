var glslify = require('glslify');


var Program       = require('nanogl/program');

function PadProgram(gl){
  this.prg = new Program( gl );
  this.kernelSize = -1;

  this.cfg = gl.state.config();
  this.cfg
      .enableStencil( true )
      .stencilFunc( gl.NOTEQUAL, 0, 0xFF )
      .stencilOp( gl.REPLACE, gl.REPLACE, gl.REPLACE )
      .stencilMask( 0xFF );


}


PadProgram.prototype = {

  setKernel : function( kernel ){

    if( kernel.length/2 !== this.kernelSize ){

      this.prg.compile( 
        glslify( './pad.vert' ),
        glslify( './pad.frag' ),
        '#define N_POINT '+(kernel.length/2)+'\n'
      )

      this.kernelSize = kernel.length/2;
    }


    this.prg.use();
    this.prg.uKernel( kernel );
  },


  render : function( ){

  }
  

}


module.exports = PadProgram;