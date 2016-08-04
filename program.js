


function Program( gl, params ){
  this.gl = gl;
  this.program = null;
  this.params = params;
  this.deleteOlds = true;
}

Program.prototype = {

  compile : function( vert, frag, defs ) {

    if( defs === undefined )
      defs = '';

    defs += '\n'


    var gl = this.gl;

    if( this.program && this.deleteOlds ){
      gl.deleteProgram( this.program );
    }

    var fShader,
        vShader,
        program;

    fShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fShader, defs + frag);
    gl.compileShader(fShader);

    if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(fShader));
      console.log( defs + frag );
    }

    vShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vShader, defs + vert);
    gl.compileShader(vShader);

    if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(vShader));
      console.log( defs + vert );
    }

    program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log(gl.getProgramInfoLog(program));
    }

    this.program = program;
    this.setup();

  },

  setup : function() {
    var params = this.params,
        gl     = this.gl;

    for (var i = 0; i < params.length; i++) {
      var p = params[i];
      if( p[0] === 'a' ){
        this[p] = gl.getAttribLocation( this.program, p );
      } else {
        this[p] = gl.getUniformLocation( this.program, p );
      }
    }

  },

  bind : function() {
    this.gl.useProgram( this.program );
  }
}
