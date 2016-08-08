(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function() {
    function t(t) {
        return t | (4096 & t) >>> 2 | (2048 & t) >>> 2 | (524288 & t) >>> 3 | (1048576 & t) >>> 3 | (2097152 & t) >>> 3;
    }
    function e(t) {
        return 0 | Math.round(65535 * t);
    }
    function s(t) {
        return t / 65535;
    }
    function i(t) {
        var e = (31744 & t) >> 10, s = 1023 & t;
        return (t >> 15 ? -1 : 1) * (e ? 31 === e ? s ? NaN : 1 / 0 : Math.pow(2, e - 15) * (1 + s / 1024) : 6103515625e-14 * (s / 1024));
    }
    function n(t) {
        h[0] = t;
        var e = r[0], s = e >> 31 << 5, i = e >> 23 & 255;
        return i = i - 112 & 112 - i >> 4 >> 27, s = (s | i) << 10, s |= e >> 13 & 1023;
    }
    function a() {
        this._dat = new Uint16Array(51), this._set = 0;
    }
    var h = new Float32Array(1), r = new Uint32Array(h.buffer), u = [ 1, 512, 1024, 1024, 2048, 4096, 4096, 4, 8192, 2, 16384, 32768, 256, 65536, 65536, 65536, 262144, 131072, 131072, 131072, 524288, 524288, 524288, 2097152, 1048576, 1048576, 1048576, 128, 4194304, 4194304, 4194304, 4194304, 8, 16, 8388608, 8388608, 32, 64, 16777216, 33554432, 67108864, 67108864, 67108864, 67108864, 134217728, 134217728, 134217728, 134217728, 268435456, 268435456, 536870912 ], c = 935847839, d = new Uint16Array([ 0, 32774, 0, 1, 0, 0, 0, 0, 513, 0, 1029, 2305, 0, 519, 0, 65535, 65535, 7680, 7680, 7680, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 0, 0, 0, 0, e(0), e(1), n(1) ]), o = function(t, e) {
        return t.getParameter(e);
    };
    a.DAT_MASKS = u, a.encodeHalf = function(t) {
        return n(t);
    }, a.decodeHalf = function(t) {
        return i(t);
    }, a.prototype = {
        toDefault: function() {
            this._dat.set(d), this._set = 0 | c;
        },
        clone: function() {
            var t = new a();
            return t._dat.set(this._dat), t._set = this._set, t;
        },
        patch: function(e, s) {
            for (var i, n = this._dat, a = this._set, h = e._dat, r = e._set, c = s._dat, d = 0, o = 0; 51 > o; o++) i = u[o], 
            0 !== (a & i) && ((0 === (r & i) || n[o] !== h[o]) && (d |= i), h[o] = n[o]);
            c.set(h), e._set |= a, s._set = t(d);
        },
        setupGL: function(t) {
            var e, n = this._set, a = this._dat;
            if (0 !== (1 & n) && (a[0] ? t.enable(3042) : t.disable(3042)), e = 2560 & n, 0 !== e && (2560 === e ? t.blendEquationSeparate(a[1], a[4]) : t.blendEquation(a[1])), 
            e = 5120 & n, 0 !== e && (5120 === e ? t.blendFuncSeparate(a[3], a[2], a[6], a[5]) : t.blendFunc(a[3], a[2])), 
            0 !== (4 & n) && (a[7] ? t.enable(2929) : t.disable(2929)), 0 !== (8192 & n) && t.depthFunc(a[8]), 
            0 !== (2 & n) && (a[9] ? t.enable(2884) : t.disable(2884)), 0 !== (16384 & n) && t.cullFace(a[10]), 
            0 !== (32768 & n) && t.frontFace(a[11]), 0 !== (536870912 & n) && t.lineWidth(i(a[50])), 
            0 !== (256 & n) && (a[12] ? t.enable(2960) : t.disable(2960)), e = 589824 & n, 0 !== e && (589824 === e ? (t.stencilFuncSeparate(1028, a[13], a[14], a[15]), 
            t.stencilFuncSeparate(1029, a[20], a[21], a[22])) : t.stencilFunc(a[13], a[14], a[15])), 
            e = 1179648 & n, 0 !== e && (1179648 === e ? (t.stencilOpSeparate(1028, a[17], a[18], a[19]), 
            t.stencilOpSeparate(1029, a[24], a[25], a[26])) : t.stencilOp(a[17], a[18], a[19])), 
            e = 2359296 & n, 0 !== e && (2359296 === e ? (t.stencilMaskSeparate(1028, a[16]), 
            t.stencilMaskSeparate(1029, a[23])) : t.stencilMask(a[16])), 0 !== (16777216 & n)) {
                var h = a[38];
                t.colorMask(1 === (1 & h), 2 === (2 & h), 4 === (4 & h), 8 === (8 & h));
            }
            0 !== (33554432 & n) && t.depthMask(1 === a[39]), 0 !== (67108864 & n) && t.blendColor(i(a[40]), i(a[41]), i(a[42]), i(a[43])), 
            0 !== (128 & n) && (a[27] ? t.enable(3089) : t.disable(3089)), 0 !== (4194304 & n) && t.scissor(a[28], a[29], a[30], a[31]), 
            0 !== (134217728 & n) && t.viewport(a[44], a[45], a[46], a[47]), 0 !== (16 & n) && (a[33] ? t.enable(32823) : t.disable(32823)), 
            0 !== (8388608 & n) && t.polygonOffset(i(a[34]), i(a[35])), 0 !== (268435456 & n) && t.depthRange(s(a[48]), s(a[49]));
        },
        fromGL: function(t) {
            this._set = 0;
            var e = o(t, 3042), s = o(t, 2884), i = o(t, 2929), n = o(t, 3024), a = o(t, 32823), h = o(t, 3089), r = o(t, 2960), u = o(t, 32969), c = o(t, 32968), d = o(t, 32971), _ = o(t, 32970), l = o(t, 32777), f = o(t, 34877), p = o(t, 2962), b = o(t, 2967), S = o(t, 2963), F = o(t, 2968), v = o(t, 2964), M = o(t, 2965), k = o(t, 2966), g = o(t, 34816), O = o(t, 36003), y = o(t, 36004), w = o(t, 36005), m = o(t, 34817), q = o(t, 34818), A = o(t, 34819), D = o(t, 32824), E = o(t, 10752), P = o(t, 3088), C = o(t, 3107), R = o(t, 2930), T = o(t, 32773), U = o(t, 2978), W = o(t, 2928), B = o(t, 2849);
            this.enableBlend(e), u !== d || c !== _ ? this.blendFuncSeparate(u, c, d, _) : this.blendFunc(u, c), 
            l !== f ? this.blendEquationSeparate(l, f) : this.blendEquation(l), this.enableStencil(r), 
            p !== g || b !== O || S !== y ? this.stencilFuncSeparate(p, b, S, g, O, y) : this.stencilFunc(p, b, S), 
            v !== m || M !== q || k !== A ? this.stencilOpSeparate(v, M, k, m, q, A) : this.stencilOp(v, M, k), 
            F !== w ? this.stencilMaskSeparate(F, w) : this.stencilMask(F), this.depthFunc(t.getParameter(2932)), 
            this.enableDepthTest(i), this.cullFace(t.getParameter(2885)), this.enableCullface(s), 
            this.frontFace(t.getParameter(2886)), this.enablePolygonOffset(a), this.polygonOffset(D, E), 
            this.enableScissor(h), this.scissor(P[0], P[1], P[2], P[3]), this.enableDither(n), 
            this.colorMask(C[0], C[1], C[2], C[3]), this.depthMask(R), this.blendColor(T[0], T[1], T[2], T[3]), 
            this.viewport(U[0], U[1], U[2], U[3]), this.depthRange(W[0], W[1]), this.lineWidth(B);
        },
        enableBlend: function(t) {
            return void 0 === t && (t = !0), this._dat[0] = 0 | t, this._set |= 1, this;
        },
        blendFunc: function(t, e) {
            return this._dat[3] = t, this._dat[2] = e, this._set = -4097 & this._set | 1024, 
            this;
        },
        blendFuncSeparate: function(t, e, s, i) {
            return this._dat[3] = t, this._dat[2] = e, this._dat[6] = s, this._dat[5] = i, this._set |= 5120, 
            this;
        },
        blendEquation: function(t) {
            return this._dat[1] = t, this._set = -2049 & this._set | 512, this;
        },
        blendEquationSeparate: function(t, e) {
            return this._dat[1] = t, this._dat[4] = e, this._set |= 2560, this;
        },
        blendColor: function(t, e, s, i) {
            return this._dat[40] = n(t), this._dat[41] = n(e), this._dat[42] = n(s), this._dat[43] = n(i), 
            this._set |= 67108864, this;
        },
        depthFunc: function(t) {
            return this._dat[8] = t, this._set |= 8192, this;
        },
        enableDepthTest: function(t) {
            return void 0 === t && (t = !0), this._dat[7] = 0 | t, this._set |= 4, this;
        },
        depthRange: function(t, s) {
            return this._dat[48] = e(t), this._dat[49] = e(s), this._set |= 268435456, this;
        },
        lineWidth: function(t) {
            return this._dat[50] = n(t), this._set |= 536870912, this;
        },
        cullFace: function(t) {
            return this._dat[10] = t, this._set |= 16384, this;
        },
        enableCullface: function(t) {
            return void 0 === t && (t = !0), this._dat[9] = 0 | t, this._set |= 2, this;
        },
        polygonOffset: function(t, e) {
            return this._dat[34] = n(t), this._dat[35] = n(e), this._set |= 8388608, this;
        },
        enablePolygonOffset: function(t) {
            return void 0 === t && (t = !0), this._dat[33] = 0 | t, this._set |= 16, this;
        },
        enableScissor: function(t) {
            return void 0 === t && (t = !0), this._dat[27] = 0 | t, this._set |= 128, this;
        },
        scissor: function(t, e, s, i) {
            return this._dat[28] = t, this._dat[29] = e, this._dat[30] = s, this._dat[31] = i, 
            this._set |= 4194304, this;
        },
        viewport: function(t, e, s, i) {
            return this._dat[44] = t, this._dat[45] = e, this._dat[46] = s, this._dat[47] = i, 
            this._set |= 134217728, this;
        },
        enableDither: function(t) {
            return void 0 === t && (t = !0), this._dat[32] = 0 | t, this._set |= 8, this;
        },
        depthMask: function(t) {
            return this._dat[39] = 0 | t, this._set |= 33554432, this;
        },
        colorMask: function(t, e, s, i) {
            var n = 0 | t | (0 | e) << 1 | (0 | s) << 2 | (0 | i) << 3;
            return this._dat[38] = n, this._set |= 16777216, this;
        },
        frontFace: function(t) {
            return this._dat[11] = t, this._set |= 32768, this;
        },
        enableStencil: function(t) {
            return void 0 === t && (t = !0), this._dat[12] = 0 | t, this._set |= 256, this;
        },
        stencilFunc: function(t, e, s) {
            return this._dat[13] = t, this._dat[14] = e, this._dat[15] = s, this._set = -524289 & this._set | 65536, 
            this;
        },
        stencilOp: function(t, e, s) {
            return this._dat[17] = t, this._dat[18] = e, this._dat[19] = s, this._set = -1048577 & this._set | 131072, 
            this;
        },
        stencilMask: function(t) {
            return this._dat[16] = t, this._set = -2097153 & this._set | 262144, this;
        },
        stencilFuncSeparate: function(t, e, s, i, n, a) {
            var h = this._dat;
            return h[13] = t, h[14] = e, h[15] = s, h[20] = i, h[21] = n, h[22] = a, this._set |= 589824, 
            this;
        },
        stencilOpSeparate: function(t, e, s, i, n, a) {
            var h = this._dat;
            return h[17] = t, h[18] = e, h[19] = s, h[24] = i, h[25] = n, h[26] = a, this._set |= 1179648, 
            this;
        },
        stencilMaskSeparate: function(t, e) {
            return this._dat[16] = t, this._dat[23] = e, this._set |= 2359296, this;
        }
    }, module.exports = a;
}();
},{}],2:[function(require,module,exports){
!function() {
    function t() {
        this._stack = new Uint32Array(816), this._sets = new Uint32Array(16), this._tmpDat = new Uint32Array(51), 
        this._size = 16, this._ptr = 0, this._headPos = 0, this._wcfg = new s();
    }
    var s = require("./config"), i = s.DAT_MASKS;
    t.prototype = {
        initFromGL: function(t) {
            this._ptr = 0, this._wcfg.fromGL(t), this._sets[0] = 0, this._stack.set(this._wcfg._dat);
        },
        push: function(t) {
            var s, h, _, e, n, r, o, a = this._ptr, c = this._sets[a++], f = t._set;
            for (a == this._size && this._grow(), c |= f, this._sets[a] = c, this._ptr = a, 
            s = 51 * a, h = this._stack, _ = t._dat, e = this._tmpDat, n = 0; 51 > n; n++) r = i[n], 
            o = 0 !== (f & r) ? _[n] : h[s + n - 51], e[n] = o;
            h.set(e, s);
        },
        pop: function() {
            var t = --this._ptr;
            this._headPos > t && (this._sets[t] |= this._sets[t + 1], this._headPos = t);
        },
        flush: function() {
            for (;this._ptr > 0; ) this.pop();
        },
        commit: function(t) {
            var s = this._ptr;
            this.copyConfig(s, t), this._headPos = s, this._sets[s - 1] |= this._sets[s], this._sets[s] = 0;
        },
        patch: function(t, s) {
            this.copyConfig(this._ptr, this._wcfg), this._wcfg.patch(t, s);
        },
        copyConfig: function(t, s) {
            var i = new Uint32Array(this._stack.buffer, 204 * t, 51);
            s._dat.set(i), s._set = this._sets[t];
        },
        _grow: function() {
            var t = this._size << 1, s = new Uint32Array(51 * t), i = new Uint32Array(t);
            s.set(this._stack, 0), i.set(this._sets, 0), this._stack = s, this._sets = i, this._size = t;
        }
    }, module.exports = t;
}();
},{"./config":1}],3:[function(require,module,exports){
var GLConfig = require( './config' ),
    GLStack = require( './stack' );


var _patch = new GLConfig();

function GLState( gl ){
  this.gl = gl;

  this.cfgStack = new GLStack();
  this.cfgStack.initFromGL( gl );

  this._validCfg = false;
}


GLState.prototype = {


  push : function( cfg ){
    this.cfgStack.push( cfg );
    this._validCfg = false;
  },


  pop : function() {
    this.cfgStack.pop();
    this._validCfg = false;
  },


  apply : function(){
    if( !this._validCfg ) {
      this.cfgStack.commit( _patch );
      _patch.setupGL( this.gl );
      this._validCfg = true;
    }
  },


  now : function( cfg ){
    this.push( cfg );
    this.apply();
    this.pop();
  },


  config : function() {
    return new LocalConfig( this );
  }


}

/**
 * LocalConfig
 *
 */

function LocalConfig( state ){
  GLConfig.call( this );
  this.state = state;
}

LocalConfig.prototype = Object.create( GLConfig.prototype );
LocalConfig.prototype.constructor = LocalConfig;

LocalConfig.prototype.apply = function(){
  this.state.now( this );
};


GLState.config = function(){
  return new GLConfig();
};


module.exports = GLState;

},{"./config":1,"./stack":2}],4:[function(require,module,exports){
var BufferUtils = require( './bufferutils' );

/*
 * GL_ARRAY_BUFFER */
var TGT = 0x8892;



/**
 * @class
 * @implements {Drawable}
 * @param {WebGLRenderingContext} gl      then webgl context this ArrayBuffer belongs to
 * @param {TypedArray|uint} [data]   optional data to copy to buffer, or the size (in bytes)
 * @param {GLenum} [usage=GL_STATIC_DRAW] the usage hint for this buffer.
 *
 */
function ArrayBuffer( gl, data, usage ){
  this.gl         = gl;
  this.usage      = usage || gl.STATIC_DRAW;
  this.buffer     = gl.createBuffer();
  this.attribs    = [];
  this.stride     = 0;
  this.byteLength = 0;
  this.length     = 0;

  if( data ){
    this.data( data );
  }
}


ArrayBuffer.prototype = {

  /**
   * Bind the underlying webgl buffer.
   */
  bind: function(){
    this.gl.bindBuffer( TGT, this.buffer );
  },

  /**
   * Add attribute declaration for this buffer. Once attributes declared, the buffer can be linked to
   * programs attributes using {@link ArrayBuffer#attribPointer}
   *  @param {string} name the name of the program's attribute
   *  @param {uint} size the size of the attribute (3 for a vec3)
   *  @param {GLenum} type the type of data (GL_FLOAT, GL_SHORT etc)
   *  @param {boolean} [normalize=false] indicate if the data must be normalized
   */
  attrib: function( name, size, type, normalize ){
    this.attribs.push({
      name      : name       ,
      type      : 0|type     ,
      size      : 0|size     ,
      normalize : !!normalize,
      offset    : this.stride
    });
    this.stride += BufferUtils.getComponentSize( type ) * size;
    this._computeLength();
    return this;
  },

  /**
   * Fill webgl buffer with the given data. You can also pass a uint  to allocate the buffer to the given size.
   *   @param {TypedArray|uint} array the data to send to the buffer, or a size.
   */
  data: function( array ){
    var gl = this.gl;
    gl.bindBuffer( TGT, this.buffer );
    gl.bufferData( TGT, array, this.usage );
    gl.bindBuffer( TGT, null );

    this.byteLength = ( array.byteLength === undefined ) ? array : array.byteLength;
    this._computeLength();
  },

  /**
   * Set a part of the buffer with the given data, starting a offset (in bytes)
   *  @param {typedArray} array the data to send to buffer
   *  @param {uint} offset the offset in byte where the data will be written
   */
  subData: function( array, offset ){
    var gl = this.gl;
    gl.bindBuffer(    TGT, this.buffer );
    gl.bufferSubData( TGT, offset, array );
    gl.bindBuffer(    TGT, null );
  },

  /**
   * Link given program attributes to this buffer. You should first declare attributes using {@link ArrayBuffer#attrib}
   * before calling this method.
   *   @param {Program} program the nanogl Program
   */
  attribPointer: function( program ){
    var gl = this.gl;
    gl.bindBuffer( TGT, this.buffer );

    for (var i = 0; i < this.attribs.length; i++) {
      var attrib = this.attribs[i];

      if( program[attrib.name] !== undefined ){
        var aLocation = program[attrib.name]();
        gl.enableVertexAttribArray( aLocation );
        gl.vertexAttribPointer( aLocation,
                                attrib.size,
                                attrib.type,
                                attrib.normalize,
                                this.stride,
                                attrib.offset
                              );
      }

    }
  },

  /**
   * Shortcut to gl.drawArrays
   *   @param {GLenum} mode the type of primitive to draw (GL_TRIANGLE, GL_POINTS etc)
   *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
   *   @param {uint} [offset=0] the position of the first vertex to draw
   */
  draw: function( mode, count, offset ){
    count  = ( count === undefined  ) ? this.length : count;
    this.gl.drawArrays( mode, offset, 0|count );
  },

  /**
   * Delete underlying webgl objects
   */
  dispose: function(){
    this.gl.deleteBuffer( this.buffer );
    this.buffer = null;
    this.gl = null;
  },


  _computeLength: function(){
    if( this.stride > 0 ) {
      this.length = this.byteLength / this.stride;
    }
  }

};

/*
 * Implement Drawable
 */
BufferUtils.Drawable( ArrayBuffer.prototype );


module.exports = ArrayBuffer;

},{"./bufferutils":5}],5:[function(require,module,exports){
module.exports = {

  getComponentSize : function( type ){
    switch( type ){
      case 0x1400 : //gl.BYTE:
      case 0x1401 : //gl.UNSIGNED_BYTE:
        return 1;
      case 0x1402 : //gl.SHORT:
      case 0x1403 : //gl.UNSIGNED_SHORT:
        return 2;
      case 0x1404 : //gl.INT:
      case 0x1405 : //gl.UNSIGNED_INT:
      case 0x1406 : //gl.FLOAT:
        return 4;
      default :
        return 0;
    }
  },

  Drawable: function( proto ){
    proto.drawPoints         = function(count, offset){ this.draw( 0 /* POINTS         */ , count, offset ); };
    proto.drawLines          = function(count, offset){ this.draw( 1 /* LINES          */ , count, offset ); };
    proto.drawLineLoop       = function(count, offset){ this.draw( 2 /* LINE_LOOP      */ , count, offset ); };
    proto.drawLineStrip      = function(count, offset){ this.draw( 3 /* LINE_STRIP     */ , count, offset ); };
    proto.drawTriangles      = function(count, offset){ this.draw( 4 /* TRIANGLES      */ , count, offset ); };
    proto.drawTriangleStrip  = function(count, offset){ this.draw( 5 /* TRIANGLE_STRIP */ , count, offset ); };
    proto.drawTriangleFan    = function(count, offset){ this.draw( 6 /* TRIANGLE_FAN   */ , count, offset ); };
  }

};


/**
 * Interface for buffer that can be drawn.
 *
 * @interface Drawable
 */

/**
 * Shortcut to gl.drawArrays( gl.POINTS, offset, count )
 * @function
 * @name Drawable#drawPoints
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.LINE_STRIP, offset, count )
 * @function
 * @name Drawable#drawLineStrip
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.LINE_LOOP, offset, count )
 * @function
 * @name Drawable#drawLineLoop
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.LINES, offset, count )
 * @function
 * @name Drawable#drawLines
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.TRIANGLE_STRIP, offset, count )
 * @function
 * @name Drawable#drawTriangleStrip
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.TRIANGLE_FAN, offset, count )
 * @function
 * @name Drawable#drawTriangleFan
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

/**
 * Shortcut to gl.drawArrays( gl.TRIANGLES, offset, count )
 * @function
 * @name Drawable#drawTriangles
 *   @param {uint} [count] the number of vertices to draw (full buffer is used if omited)
 *   @param {uint} [offset=0] the position in buffer to start from.
 */

},{}],6:[function(require,module,exports){
var Texture = require( './texture' );


/**
 * @class
 * @param {WebGLRenderingContext} gl      the webgl context this Fbo belongs to
 * @param {Object} [opts]
 * @param {boolean} [opts.depth=false] if true, a depth renderbuffer is attached
 * @param {boolean} [opts.stencil=false] if true, a stencil renderbuffer is attached
 * @param {GLenum|GLenum[]} [opts.type=GL_UNSIGNED_BYTE] the pixel type of the Fbo, can be gl.UNSIGNED_BYTE, gl.FLOAT, half.HALF_FLOAT_OES etc. you can also provide an array of types used as cascaded fallbacks
 * @param {GLenum} [opts.format=GL_RGB] the internal pixel format.
 *
 */
function Fbo( gl, opts )
{
  this.gl = gl;
  this.width = 0;
  this.height = 0;
  this.fbo = null;

  opts = opts || DEFAULT_OPTS;

  var flags =  ( opts.depth ) |
               ( opts.stencil <<1);

  var types = opts.type || gl.UNSIGNED_BYTE;
  this.types = Array.isArray( types ) ? types : [types];

  this.color      = new Texture( gl, opts.format );
  this.attachment = new DepthStencilAttachment( this, flags );
}


Fbo.prototype = {

  /**
   * Resize FBO attachments
   *  @param {uint} w new width
   *  @param {uint} h new height
   */
  resize : function( w, h ){
    if( this.width !== w || this.height !== h ) {
      this.width  = w|0;
      this.height = h|0;
      if( this.fbo === null ){
        this._init();
      }
      this._allocate();
    }
  },

  /**
   * Bind the color texture of this Fbo to a sampler2D location and a unit
   * The related program must be in use.
   * @param {WebGLUniformLocation} location the program's sampler to bind the textue to
   * @param {} unit the texture unit to use
   */
  bindColor : function( location, unit ){
    var gl = this.gl;
    gl.activeTexture( gl.TEXTURE0 + unit );
    gl.bindTexture( gl.TEXTURE_2D, this.color.id );
    gl.uniform1i( location, unit );
  },

  /**
   * Bind the Fbo and set gl viewport to it's size
   */
  bind : function() {
    var gl = this.gl;
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.fbo);
    gl.viewport( 0, 0, this.width, this.height );
  },

  /**
   * Clear all buffer of the Fbo.
   * The Fbo must be explicitly bound before calling this method
   */
  clear : function() {
    var gl = this.gl;
    var bits = gl.COLOR_BUFFER_BIT | this.attachment.clearBits();
    gl.clear( bits );
  },

  /**
   * Check if the Fbo is valid,
   * The Fbo must be explicitely bound before calling this method
   */
  isValid : function(){
    var gl = this.gl;
    return ( gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE );
  },

  /**
   * return the actual pixel type of the underlying color texture (UNSIGNED_BYTE, FLOAT, HALF_FLOAT_EOS etc)
   * after possibles types has been tested
   */
  getActualType : function(){
    return this.color.type;
  },

  /**
   * Delete all webgl objects related to this Fbo (fbo, color attachment and depth/stencil renderbuffer )
   */
  dispose : function(){
    var gl = this.gl;
    gl.deleteFramebuffer( this.fbo );
    this.color.dispose();
    this.attachment.dispose();
    this.valid = false;
    this.fbo   = null;
    this.gl    = null;
  },


  // create render buffers and set attchment points
  _init : function() {
    var gl = this.gl;

    this.fbo = gl.createFramebuffer();
    gl.bindFramebuffer( gl.FRAMEBUFFER, this.fbo );
    gl.framebufferTexture2D( gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.color.id, 0 );

    this.attachment._init();
  },

  // (re)allocate render buffers to size
  _allocate : function(){
    var gl = this.gl;

    this.attachment._allocate();

    gl.bindFramebuffer( gl.FRAMEBUFFER, this.fbo );

    var tIndex = 0;
    var nextFmt = this.types[tIndex];
    do {
      this.color.fromData( this.width, this.height, null, nextFmt );
      gl.getError(); // clear possible texture error
    } while( !(this.valid = this.isValid() ) && ( nextFmt = this.types[++tIndex] ) );

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  }


};



//---------------------------------
//         Depth/Stencil Attachment
//---------------------------------

function DepthStencilAttachment( fbo, flags ){
  this.fbo   = fbo;
  this.flags = flags;
  this.buffer = null;
}


DepthStencilAttachment.prototype = {

  _init : function(){
    var gl = this.fbo.gl;
    var attType = this.flags & 3;
    var depth = null;

    if( attType !== 0 ){
      depth = gl.createRenderbuffer();
      gl.bindRenderbuffer(    gl.RENDERBUFFER,  depth );
      gl.framebufferRenderbuffer( gl.FRAMEBUFFER, getAttachmentType( gl, attType ), gl.RENDERBUFFER, depth );
    }

    this.buffer = depth;
  },


  _allocate : function(){
    var gl = this.fbo.gl;
    var attType = this.flags & 3;

    if( attType !== 0 ){
      gl.bindRenderbuffer(    gl.RENDERBUFFER,  this.buffer );
      gl.renderbufferStorage( gl.RENDERBUFFER,  getAttachmentFormat( gl, attType ) , this.fbo.width, this.fbo.height );
      gl.bindRenderbuffer(    gl.RENDERBUFFER,  null );
    }
  },


  dispose : function(){
    if( this.buffer ){
      this.fbo.gl.deleteRenderbuffer( this.buffer );
    }
    this.buffer = null;
  },


  clearBits : function(){
    return ( ( this.flags & 1 ) ? 0x0100 : 0 ) |
           ( ( this.flags & 2 ) ? 0x0400 : 0 );
  }


};

//---------------------------------
//                        Utilities
//---------------------------------

// renderbuffer format
function getAttachmentFormat( gl, type ){
  switch( type ){
    case 1: return 0x81A5;  // DEPTH_COMPONENT16;
    case 2: return 0x8D48;  // STENCIL_INDEX8;
    case 3: return 0x84F9;  // DEPTH_STENCIL;
    default: throw new Error( 'unknown attachment type '+type );
  }
}


function getAttachmentType( gl, type ){
  switch( type ){
    case 1: return 0x8D00;  // DEPTH_ATTACHMENT
    case 2: return 0x8D20;  // STENCIL_ATTACHMENT;
    case 3: return 0x821A;  // DEPTH_STENCIL_ATTACHMENT;
    default: throw new Error( 'unknown attachment type '+type );
  }
}



var DEFAULT_OPTS = {};

module.exports = Fbo;

},{"./texture":8}],7:[function(require,module,exports){

/**
 * Program constructor. Create gl program and shaders. You can pass optional shader code to immediatly compile shaders
 *   @param {WebGLRenderingContext} gl webgl context this program belongs to
 *   @param {String} [vert=undefined] an optional vertex shader code. See {@link Program#compile}
 *   @param {String} [frag=undefined] an optional fragment shader code See {@link Program#compile}
 *   @param {String} [defs=undefined] an optional string prepend to both fragment and vertex shader code. See {@link Program#compile}.
 *   @see {@link Program#compile}
 *
 * @example <caption>For the given vertex shader</caption>
 * attribute vec3 aPosition;
 * uniform mat4 uMVP;
 * uniform vec3 uCameraPosition;
 *
 * @class
 * @classdesc Program class provide shader compilation and linking functionality.
 *              It also give you convenient access to active uniforms and attributes.
 *              Once compiled, the Program object list all used uniforms/attributes and provide getter/setter function for each one. See {@link Program} constructor.
 *
 */
function Program( gl, vert, frag, defs  ){
  this.gl = gl;
  this.program = gl.createProgram();
  this.vShader = gl.createShader( gl.VERTEX_SHADER );
  this.fShader = gl.createShader( gl.FRAGMENT_SHADER );
  this.dyns    = [];
  this.ready   = false;
  gl.attachShader(this.program, this.vShader);
  gl.attachShader(this.program, this.fShader);

  if( vert !== undefined && frag !== undefined ){
    this.compile( vert, frag, defs );
  }
}

/**
 * Program.debug
 *   can be set to true to check and log compilation and linking errors (default to false)
 */
Program.debug = true;



Program.prototype = {

  /**
   * Shortcut for gl.useProgram()
   * alias program.bind()
   */
  use : function(){
    if( !this.ready ){
      this._grabParameters();
    }
    this.gl.useProgram( this.program );
  },

  /**
   * Compile vertex and fragment shader then link gl program
   * This method can be safely called several times.
   *  @param {String} vert vertex shader code
   *  @param {String} frag fragment shader code
   *  @param {String} [prefix=''] an optional string append to both fragment and vertex code
   */
  compile : function( vert, frag, prefix ){
    this.ready   = false;

    prefix = ( prefix || '' ) + '\n';

    var gl = this.gl;

    if( !( compileShader( gl, this.fShader, prefix + frag ) &&
           compileShader( gl, this.vShader, prefix + vert ) ) ) {
      return false;
    }

    gl.linkProgram(this.program);

    if ( Program.debug && !gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      warn(gl.getProgramInfoLog(this.program));
      return false;
    }

    // delete old accessors
    while (this.dyns.length>0) {
      delete this[this.dyns.pop()];
    }

    return true;
  },

  /**
    * Delete program and shaders
    */
  dispose : function() {
    if( this.gl !== null ){
      this.gl.deleteProgram( this.program );
      this.gl.deleteShader(  this.fShader  );
      this.gl.deleteShader(  this.vShader  );
      this.gl = null;
    }
  },

  /*
   *  List all uniforms and attributes and create helper function on Program instance
   *  eg :
   *     for a uniform vec3 uDirection;
   *     create a method
   *        program.uDirection( 1, 0, 0 );
   */
  _grabParameters : function(){
    var gl = this.gl,
        prg = this.program;

    // Uniforms
    // ========

    var numUniforms = gl.getProgramParameter( prg, gl.ACTIVE_UNIFORMS );
    var context = {
      texIndex : 0
    };

    for ( var uniformIndex = 0; uniformIndex < numUniforms; ++uniformIndex )
    {
      var uniform = gl.getActiveUniform( prg, uniformIndex );

      // safari 8.0 issue,
      // when recompiling shader and link the progam again, old uniforms are kept in ACTIVE_UNIFORMS count but return null here
      if( uniform === null ){
        gl.getError(); // also flush error
        continue;
      }

      var uName   = uniform.name,
          n       = uName.indexOf('[');

      if( n >= 0 ){
        uName = uName.substring(0, n);
      }

      var uLocation = gl.getUniformLocation( prg, uniform.name );
      this[uName] = getUniformSetter( uniform.type, uLocation, gl, context );
      this.dyns.push( uName );
    }

    // Attributes
    // ==========

    var numAttribs = gl.getProgramParameter( prg, gl.ACTIVE_ATTRIBUTES );

    for (var aIndex = 0; aIndex < numAttribs; ++aIndex )
    {
      var attribName = gl.getActiveAttrib( prg, aIndex ).name;
      var aLocation  = gl.getAttribLocation( prg, attribName );
      this[attribName] = getAttribAccess( aLocation );
      this.dyns.push( attribName );
    }

    this.ready   = true;
  }


};

/**
 * alias to Program.use()
 */
Program.prototype.bind = Program.prototype.use;



/*
 * internal logs
 */
function warn(str){
  console.warn(str);
}



// -------------------------------------------------
//                    UTILITIES
// -------------------------------------------------

/*
 * Shader logging utilities
 */

var __pads = ['','   ','  ',' ',''];

function appendLine( l, i ){
  return __pads[String(i+1).length] + ( i+1 ) + ': ' + l;
}

/*
 * Format shader code
 * add padded lines number
 */
function formatCode( shader ) {
  return shader.split( '\n' ).map( appendLine ).join( '\n' );
}

/*
 * Shader compilation utility
 */
function compileShader( gl, shader, code ){
  gl.shaderSource( shader, code );
  gl.compileShader( shader );

  if (Program.debug && !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    warn( gl.getShaderInfoLog(shader) );
    warn( formatCode( code ) );
    return false;
  }

  return true;
}



var USetFMap = {};
USetFMap[ 5126  /*FLOAT       */ ] = '1f';
USetFMap[ 35664 /*FLOAT_VEC2  */ ] = '2f';
USetFMap[ 35665 /*FLOAT_VEC3  */ ] = '3f';
USetFMap[ 35666 /*FLOAT_VEC4  */ ] = '4f';
USetFMap[ 35670 /*BOOL        */ ] =
USetFMap[ 5124  /*INT         */ ] =
USetFMap[ 35678 /*SAMPLER_2D  */ ] =
USetFMap[ 35680 /*SAMPLER_CUBE*/ ] = '1i';
USetFMap[ 35671 /*BOOL_VEC2   */ ] =
USetFMap[ 35667 /*INT_VEC2    */ ] = '2i';
USetFMap[ 35672 /*BOOL_VEC3   */ ] =
USetFMap[ 35668 /*INT_VEC3    */ ] = '3i';
USetFMap[ 35673 /*BOOL_VEC4   */ ] =
USetFMap[ 35669 /*INT_VEC4    */ ] = '4i';
USetFMap[ 35674 /*FLOAT_MAT2  */ ] = 'Matrix2f';
USetFMap[ 35675 /*FLOAT_MAT3  */ ] = 'Matrix3f';
USetFMap[ 35676 /*FLOAT_MAT4  */ ] = 'Matrix4f';

/*
 * Uniform upload utilities
 */

function getUniformSetFunctionName( type ){
  type = String(type);
  return 'uniform' + USetFMap[type];
}

/*
 * For a given uniform's type, return the proper setter function
 */
function getUniformSetter( type, location, gl, context ){
  switch( type ){
    case gl.FLOAT_MAT2  :
    case gl.FLOAT_MAT3  :
    case gl.FLOAT_MAT4  :
      return getMatrixSetFunction( type, location, gl, context );

    case gl.SAMPLER_2D  :
    case gl.SAMPLER_CUBE:
      return getSamplerSetFunction( type, location, gl, context );

    default  :
      return getUniformSetFunction( type, location, gl, context );
  }
}


/*
 * setter factory for vector uniforms
 * return a function wich take both array or arguments
 */
function getUniformSetFunction( type, location, gl, context ){
  context;
  var fname = getUniformSetFunctionName( type );
  return function(){
    if( arguments.length === 1 && arguments[0].length !== undefined ){
      gl[fname+'v']( location, arguments[0] );
    } else if( arguments.length > 0) {
      gl[fname].apply( gl, Array.prototype.concat.apply( location, arguments) );
    }
    return location;
  };
}

/*
 * setter factory for matrix uniforms
 */
function getMatrixSetFunction( type, location, gl, context ){
  context;
  var fname = getUniformSetFunctionName( type );
  return function(){
    if( arguments.length > 0 && arguments[0].length !== undefined ){
      var transpose = (arguments.length > 1) ? !!arguments[1] : false;
      gl[fname+'v']( location, transpose, arguments[0] );
    }
    return location;
  };
}

/*
 * setter factory for sampler uniforms
 */
function getSamplerSetFunction( type, location, gl, context ){
  var unit = context.texIndex++;
  return function(){
    if( arguments.length === 1 ) {
      if( arguments[0].bind !== undefined ){ // is texture
        arguments[0].bind( unit );
        gl.uniform1i( location, unit );
      } else {
        gl.uniform1i( location, arguments[0] );
      }
    }
    return location;
  };
}

/*
 * getter factory for attributes
 */
function getAttribAccess( attrib ){
  return function(){
    return attrib;
  };
}



module.exports = Program;
},{}],8:[function(require,module,exports){
var _UID = 0;
var T2D = 0x0DE1;

/*
 * compute filtering enum, return one of the following :
 *  NEAREST
 *  LINEAR
 *  NEAREST_MIPMAP_NEAREST
 *  LINEAR_MIPMAP_NEAREST
 *  NEAREST_MIPMAP_LINEAR
 *  LINEAR_MIPMAP_LINEAR
 */
function getFilter( smooth, mipmap, miplinear ){
  return 0x2600 | (+smooth) | (+mipmap<<8) | ( +( mipmap && miplinear )<<1 );
}


/**
 * @class
 * @classdesc Texture class manage TEXTURE_2D types textures
 *
 *  @param {WebGLRenderingContext} gl webgl context the texture belongs to
 *  @param {GLenum} [format=GL_RGB] the pixel format, default to gl.RGB (can be gl.RGB, gl.RGBA, gl.LUMINANCE...)
 */
function Texture( gl, format ){
  this._uid = _UID++;
  this.gl = gl;
  this.id = this.gl.createTexture();
  this.width  = 0;
  this.height = 0;
  this.format = format || gl.RGB;
  this.type   = gl.UNSIGNED_BYTE;

  gl.bindTexture( T2D, this.id );
  this.setFilter( true );

}


Texture.prototype = {

  /**
   * set texture data from html source
   *   @param {TexImageSource} img the source. Can be ImageBitmap, ImageData, HTMLImageElement, HTMLCanvasElement, HTMLVideoElement
   */
  fromImage : function( img ){
    var gl = this.gl;

    this.width  = img.width;
    this.height = img.height;

    gl.bindTexture( T2D, this.id );
    gl.texImage2D(  T2D, 0, this.format, this.format, this.type, img );
  },

  /**
   * Allocate texture to the given size, with optional data (TypedArray) and data type
   *  @param {number} width     the new texture's width
   *  @param {number} height    the new texture's height
   *  @param {TypedArray} [data=null]  TypedArray of texture data, can be null
   *  @param {GLenum} [dataType=GL_UNSIGNED_BYTE] can be gl.UNSIGNED_BYTE, gl.FLOAT, half.HALF_FLOAT_OES etc depending on available extensions
   */
  fromData : function( width, height, data, dataType ){
    var gl = this.gl;

    this.width  = width;
    this.height = height;

    data = data || null;
    this.type = dataType || gl.UNSIGNED_BYTE;

    gl.bindTexture( T2D, this.id );
    gl.texImage2D( T2D, 0, this.format, width, height, 0, this.format, this.type, data );
  },

  /**
   * Bind the texture
   *   @param {uint} [unit=undefined] optional texture unit to make active before binding
   */
  bind : function( unit ){
    var gl = this.gl;
    if( unit !== undefined ){
      gl.activeTexture( gl.TEXTURE0 + (0|unit) );
    }
    gl.bindTexture( T2D, this.id );
  },

  /**
   * delete the webgl texture
   *
   */
  dispose : function( ){
    this.gl.deleteTexture( this.id );
    this.id = null;
    this.gl = null;
  },

  /**
   * Change the filtering parameters
   *   @param {boolean} [smooth=false]    if true, use LINEAR filtering
   *   @param {boolean} [mipmap=false]    if true, enable mipmaping
   *   @param {boolean} [miplinear=false] if true, use linear Mipmapping
   */
  setFilter : function( smooth, mipmap, miplinear ){
    var gl = this.gl;
    var filter = getFilter( !!smooth, !!mipmap, !!miplinear);
    gl.texParameteri( T2D, gl.TEXTURE_MAG_FILTER, getFilter( !!smooth, false, false ) );
    gl.texParameteri( T2D, gl.TEXTURE_MIN_FILTER, filter );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.REPEAT
   */
  repeat : function( ){
    this.wrap( this.gl.REPEAT );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.CLAMP_TO_EDGE
   */
  clamp : function( ){
    this.wrap( this.gl.CLAMP_TO_EDGE );
  },

  /**
   * Set both WRAP_S and WRAP_T property to gl.MIRRORED_REPEAT
   */
  mirror : function( ){
    this.wrap( this.gl.MIRRORED_REPEAT );
  },

  /**
   * Set both WRAP_S and WRAP_T property to the given value
   *  @param {GLenum} wrap the wrap enum
   */
  wrap : function( wrap ) {
    var gl = this.gl;
    gl.texParameteri( T2D, gl.TEXTURE_WRAP_S, wrap );
    gl.texParameteri( T2D, gl.TEXTURE_WRAP_T, wrap );
  }

};

module.exports = Texture;
},{}],9:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
    try {
        cachedSetTimeout = setTimeout;
    } catch (e) {
        cachedSetTimeout = function () {
            throw new Error('setTimeout is not defined');
        }
    }
    try {
        cachedClearTimeout = clearTimeout;
    } catch (e) {
        cachedClearTimeout = function () {
            throw new Error('clearTimeout is not defined');
        }
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        return setTimeout(fun, 0);
    } else {
        return cachedSetTimeout.call(null, fun, 0);
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        clearTimeout(marker);
    } else {
        cachedClearTimeout.call(null, marker);
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],10:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function (require) {

	var makePromise = require('./makePromise');
	var Scheduler = require('./Scheduler');
	var async = require('./env').asap;

	return makePromise({
		scheduler: new Scheduler(async)
	});

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./Scheduler":11,"./env":23,"./makePromise":25}],11:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	// Credit to Twisol (https://github.com/Twisol) for suggesting
	// this type of extensible queue + trampoline approach for next-tick conflation.

	/**
	 * Async task scheduler
	 * @param {function} async function to schedule a single async function
	 * @constructor
	 */
	function Scheduler(async) {
		this._async = async;
		this._running = false;

		this._queue = this;
		this._queueLen = 0;
		this._afterQueue = {};
		this._afterQueueLen = 0;

		var self = this;
		this.drain = function() {
			self._drain();
		};
	}

	/**
	 * Enqueue a task
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.enqueue = function(task) {
		this._queue[this._queueLen++] = task;
		this.run();
	};

	/**
	 * Enqueue a task to run after the main task queue
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.afterQueue = function(task) {
		this._afterQueue[this._afterQueueLen++] = task;
		this.run();
	};

	Scheduler.prototype.run = function() {
		if (!this._running) {
			this._running = true;
			this._async(this.drain);
		}
	};

	/**
	 * Drain the handler queue entirely, and then the after queue
	 */
	Scheduler.prototype._drain = function() {
		var i = 0;
		for (; i < this._queueLen; ++i) {
			this._queue[i].run();
			this._queue[i] = void 0;
		}

		this._queueLen = 0;
		this._running = false;

		for (i = 0; i < this._afterQueueLen; ++i) {
			this._afterQueue[i].run();
			this._afterQueue[i] = void 0;
		}

		this._afterQueueLen = 0;
	};

	return Scheduler;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],12:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	/**
	 * Custom error type for promises rejected by promise.timeout
	 * @param {string} message
	 * @constructor
	 */
	function TimeoutError (message) {
		Error.call(this);
		this.message = message;
		this.name = TimeoutError.name;
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, TimeoutError);
		}
	}

	TimeoutError.prototype = Object.create(Error.prototype);
	TimeoutError.prototype.constructor = TimeoutError;

	return TimeoutError;
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));
},{}],13:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	makeApply.tryCatchResolve = tryCatchResolve;

	return makeApply;

	function makeApply(Promise, call) {
		if(arguments.length < 2) {
			call = tryCatchResolve;
		}

		return apply;

		function apply(f, thisArg, args) {
			var p = Promise._defer();
			var l = args.length;
			var params = new Array(l);
			callAndResolve({ f:f, thisArg:thisArg, args:args, params:params, i:l-1, call:call }, p._handler);

			return p;
		}

		function callAndResolve(c, h) {
			if(c.i < 0) {
				return call(c.f, c.thisArg, c.params, h);
			}

			var handler = Promise._handler(c.args[c.i]);
			handler.fold(callAndResolveNext, c, void 0, h);
		}

		function callAndResolveNext(c, x, h) {
			c.params[c.i] = x;
			c.i -= 1;
			callAndResolve(c, h);
		}
	}

	function tryCatchResolve(f, thisArg, args, resolver) {
		try {
			resolver.resolve(f.apply(thisArg, args));
		} catch(e) {
			resolver.reject(e);
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));



},{}],14:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var state = require('../state');
	var applier = require('../apply');

	return function array(Promise) {

		var applyFold = applier(Promise);
		var toPromise = Promise.resolve;
		var all = Promise.all;

		var ar = Array.prototype.reduce;
		var arr = Array.prototype.reduceRight;
		var slice = Array.prototype.slice;

		// Additional array combinators

		Promise.any = any;
		Promise.some = some;
		Promise.settle = settle;

		Promise.map = map;
		Promise.filter = filter;
		Promise.reduce = reduce;
		Promise.reduceRight = reduceRight;

		/**
		 * When this promise fulfills with an array, do
		 * onFulfilled.apply(void 0, array)
		 * @param {function} onFulfilled function to apply
		 * @returns {Promise} promise for the result of applying onFulfilled
		 */
		Promise.prototype.spread = function(onFulfilled) {
			return this.then(all).then(function(array) {
				return onFulfilled.apply(this, array);
			});
		};

		return Promise;

		/**
		 * One-winner competitive race.
		 * Return a promise that will fulfill when one of the promises
		 * in the input array fulfills, or will reject when all promises
		 * have rejected.
		 * @param {array} promises
		 * @returns {Promise} promise for the first fulfilled value
		 */
		function any(promises) {
			var p = Promise._defer();
			var resolver = p._handler;
			var l = promises.length>>>0;

			var pending = l;
			var errors = [];

			for (var h, x, i = 0; i < l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				h = Promise._handler(x);
				if(h.state() > 0) {
					resolver.become(h);
					Promise._visitRemaining(promises, i, h);
					break;
				} else {
					h.visit(resolver, handleFulfill, handleReject);
				}
			}

			if(pending === 0) {
				resolver.reject(new RangeError('any(): array must not be empty'));
			}

			return p;

			function handleFulfill(x) {
				/*jshint validthis:true*/
				errors = null;
				this.resolve(x); // this === resolver
			}

			function handleReject(e) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				errors.push(e);
				if(--pending === 0) {
					this.reject(errors);
				}
			}
		}

		/**
		 * N-winner competitive race
		 * Return a promise that will fulfill when n input promises have
		 * fulfilled, or will reject when it becomes impossible for n
		 * input promises to fulfill (ie when promises.length - n + 1
		 * have rejected)
		 * @param {array} promises
		 * @param {number} n
		 * @returns {Promise} promise for the earliest n fulfillment values
		 *
		 * @deprecated
		 */
		function some(promises, n) {
			/*jshint maxcomplexity:7*/
			var p = Promise._defer();
			var resolver = p._handler;

			var results = [];
			var errors = [];

			var l = promises.length>>>0;
			var nFulfill = 0;
			var nReject;
			var x, i; // reused in both for() loops

			// First pass: count actual array items
			for(i=0; i<l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					continue;
				}
				++nFulfill;
			}

			// Compute actual goals
			n = Math.max(n, 0);
			nReject = (nFulfill - n + 1);
			nFulfill = Math.min(n, nFulfill);

			if(n > nFulfill) {
				resolver.reject(new RangeError('some(): array must contain at least '
				+ n + ' item(s), but had ' + nFulfill));
			} else if(nFulfill === 0) {
				resolver.resolve(results);
			}

			// Second pass: observe each array item, make progress toward goals
			for(i=0; i<l; ++i) {
				x = promises[i];
				if(x === void 0 && !(i in promises)) {
					continue;
				}

				Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
			}

			return p;

			function fulfill(x) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				results.push(x);
				if(--nFulfill === 0) {
					errors = null;
					this.resolve(results);
				}
			}

			function reject(e) {
				/*jshint validthis:true*/
				if(this.resolved) { // this === resolver
					return;
				}

				errors.push(e);
				if(--nReject === 0) {
					results = null;
					this.reject(errors);
				}
			}
		}

		/**
		 * Apply f to the value of each promise in a list of promises
		 * and return a new list containing the results.
		 * @param {array} promises
		 * @param {function(x:*, index:Number):*} f mapping function
		 * @returns {Promise}
		 */
		function map(promises, f) {
			return Promise._traverse(f, promises);
		}

		/**
		 * Filter the provided array of promises using the provided predicate.  Input may
		 * contain promises and values
		 * @param {Array} promises array of promises and values
		 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
		 *  Must return truthy (or promise for truthy) for items to retain.
		 * @returns {Promise} promise that will fulfill with an array containing all items
		 *  for which predicate returned truthy.
		 */
		function filter(promises, predicate) {
			var a = slice.call(promises);
			return Promise._traverse(predicate, a).then(function(keep) {
				return filterSync(a, keep);
			});
		}

		function filterSync(promises, keep) {
			// Safe because we know all promises have fulfilled if we've made it this far
			var l = keep.length;
			var filtered = new Array(l);
			for(var i=0, j=0; i<l; ++i) {
				if(keep[i]) {
					filtered[j++] = Promise._handler(promises[i]).value;
				}
			}
			filtered.length = j;
			return filtered;

		}

		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will never reject.
		 * @param {Array} promises
		 * @returns {Promise} promise for array of settled state descriptors
		 */
		function settle(promises) {
			return all(promises.map(settleOne));
		}

		function settleOne(p) {
			var h = Promise._handler(p);
			if(h.state() === 0) {
				return toPromise(p).then(state.fulfilled, state.rejected);
			}

			h._unreport();
			return state.inspect(h);
		}

		/**
		 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
		 * input may contain promises and/or values, and reduceFunc
		 * may return either a value or a promise, *and* initialValue may
		 * be a promise for the starting value.
		 * @param {Array|Promise} promises array or promise for an array of anything,
		 *      may contain a mix of promises and values.
		 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
		 * @returns {Promise} that will resolve to the final reduced value
		 */
		function reduce(promises, f /*, initialValue */) {
			return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2])
					: ar.call(promises, liftCombine(f));
		}

		/**
		 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
		 * input may contain promises and/or values, and reduceFunc
		 * may return either a value or a promise, *and* initialValue may
		 * be a promise for the starting value.
		 * @param {Array|Promise} promises array or promise for an array of anything,
		 *      may contain a mix of promises and values.
		 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
		 * @returns {Promise} that will resolve to the final reduced value
		 */
		function reduceRight(promises, f /*, initialValue */) {
			return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2])
					: arr.call(promises, liftCombine(f));
		}

		function liftCombine(f) {
			return function(z, x, i) {
				return applyFold(f, void 0, [z,x,i]);
			};
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../apply":13,"../state":26}],15:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function flow(Promise) {

		var resolve = Promise.resolve;
		var reject = Promise.reject;
		var origCatch = Promise.prototype['catch'];

		/**
		 * Handle the ultimate fulfillment value or rejection reason, and assume
		 * responsibility for all errors.  If an error propagates out of result
		 * or handleFatalError, it will be rethrown to the host, resulting in a
		 * loud stack track on most platforms and a crash on some.
		 * @param {function?} onResult
		 * @param {function?} onError
		 * @returns {undefined}
		 */
		Promise.prototype.done = function(onResult, onError) {
			this._handler.visit(this._handler.receiver, onResult, onError);
		};

		/**
		 * Add Error-type and predicate matching to catch.  Examples:
		 * promise.catch(TypeError, handleTypeError)
		 *   .catch(predicate, handleMatchedErrors)
		 *   .catch(handleRemainingErrors)
		 * @param onRejected
		 * @returns {*}
		 */
		Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
			if (arguments.length < 2) {
				return origCatch.call(this, onRejected);
			}

			if(typeof onRejected !== 'function') {
				return this.ensure(rejectInvalidPredicate);
			}

			return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
		};

		/**
		 * Wraps the provided catch handler, so that it will only be called
		 * if the predicate evaluates truthy
		 * @param {?function} handler
		 * @param {function} predicate
		 * @returns {function} conditional catch handler
		 */
		function createCatchFilter(handler, predicate) {
			return function(e) {
				return evaluatePredicate(e, predicate)
					? handler.call(this, e)
					: reject(e);
			};
		}

		/**
		 * Ensures that onFulfilledOrRejected will be called regardless of whether
		 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
		 * receive the promises' value or reason.  Any returned value will be disregarded.
		 * onFulfilledOrRejected may throw or return a rejected promise to signal
		 * an additional error.
		 * @param {function} handler handler to be called regardless of
		 *  fulfillment or rejection
		 * @returns {Promise}
		 */
		Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
			if(typeof handler !== 'function') {
				return this;
			}

			return this.then(function(x) {
				return runSideEffect(handler, this, identity, x);
			}, function(e) {
				return runSideEffect(handler, this, reject, e);
			});
		};

		function runSideEffect (handler, thisArg, propagate, value) {
			var result = handler.call(thisArg);
			return maybeThenable(result)
				? propagateValue(result, propagate, value)
				: propagate(value);
		}

		function propagateValue (result, propagate, x) {
			return resolve(result).then(function () {
				return propagate(x);
			});
		}

		/**
		 * Recover from a failure by returning a defaultValue.  If defaultValue
		 * is a promise, it's fulfillment value will be used.  If defaultValue is
		 * a promise that rejects, the returned promise will reject with the
		 * same reason.
		 * @param {*} defaultValue
		 * @returns {Promise} new promise
		 */
		Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
			return this.then(void 0, function() {
				return defaultValue;
			});
		};

		/**
		 * Shortcut for .then(function() { return value; })
		 * @param  {*} value
		 * @return {Promise} a promise that:
		 *  - is fulfilled if value is not a promise, or
		 *  - if value is a promise, will fulfill with its value, or reject
		 *    with its reason.
		 */
		Promise.prototype['yield'] = function(value) {
			return this.then(function() {
				return value;
			});
		};

		/**
		 * Runs a side effect when this promise fulfills, without changing the
		 * fulfillment value.
		 * @param {function} onFulfilledSideEffect
		 * @returns {Promise}
		 */
		Promise.prototype.tap = function(onFulfilledSideEffect) {
			return this.then(onFulfilledSideEffect)['yield'](this);
		};

		return Promise;
	};

	function rejectInvalidPredicate() {
		throw new TypeError('catch predicate must be a function');
	}

	function evaluatePredicate(e, predicate) {
		return isError(predicate) ? e instanceof predicate : predicate(e);
	}

	function isError(predicate) {
		return predicate === Error
			|| (predicate != null && predicate.prototype instanceof Error);
	}

	function maybeThenable(x) {
		return (typeof x === 'object' || typeof x === 'function') && x !== null;
	}

	function identity(x) {
		return x;
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],16:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */
/** @author Jeff Escalante */

(function(define) { 'use strict';
define(function() {

	return function fold(Promise) {

		Promise.prototype.fold = function(f, z) {
			var promise = this._beget();

			this._handler.fold(function(z, x, to) {
				Promise._handler(z).fold(function(x, z, to) {
					to.resolve(f.call(this, z, x));
				}, x, this, to);
			}, z, promise._handler.receiver, promise._handler);

			return promise;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],17:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var inspect = require('../state').inspect;

	return function inspection(Promise) {

		Promise.prototype.inspect = function() {
			return inspect(Promise._handler(this));
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../state":26}],18:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function generate(Promise) {

		var resolve = Promise.resolve;

		Promise.iterate = iterate;
		Promise.unfold = unfold;

		return Promise;

		/**
		 * @deprecated Use github.com/cujojs/most streams and most.iterate
		 * Generate a (potentially infinite) stream of promised values:
		 * x, f(x), f(f(x)), etc. until condition(x) returns true
		 * @param {function} f function to generate a new x from the previous x
		 * @param {function} condition function that, given the current x, returns
		 *  truthy when the iterate should stop
		 * @param {function} handler function to handle the value produced by f
		 * @param {*|Promise} x starting value, may be a promise
		 * @return {Promise} the result of the last call to f before
		 *  condition returns true
		 */
		function iterate(f, condition, handler, x) {
			return unfold(function(x) {
				return [x, f(x)];
			}, condition, handler, x);
		}

		/**
		 * @deprecated Use github.com/cujojs/most streams and most.unfold
		 * Generate a (potentially infinite) stream of promised values
		 * by applying handler(generator(seed)) iteratively until
		 * condition(seed) returns true.
		 * @param {function} unspool function that generates a [value, newSeed]
		 *  given a seed.
		 * @param {function} condition function that, given the current seed, returns
		 *  truthy when the unfold should stop
		 * @param {function} handler function to handle the value produced by unspool
		 * @param x {*|Promise} starting value, may be a promise
		 * @return {Promise} the result of the last value produced by unspool before
		 *  condition returns true
		 */
		function unfold(unspool, condition, handler, x) {
			return resolve(x).then(function(seed) {
				return resolve(condition(seed)).then(function(done) {
					return done ? seed : resolve(unspool(seed)).spread(next);
				});
			});

			function next(item, newSeed) {
				return resolve(handler(item)).then(function() {
					return unfold(unspool, condition, handler, newSeed);
				});
			}
		}
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],19:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function progress(Promise) {

		/**
		 * @deprecated
		 * Register a progress handler for this promise
		 * @param {function} onProgress
		 * @returns {Promise}
		 */
		Promise.prototype.progress = function(onProgress) {
			return this.then(void 0, void 0, onProgress);
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],20:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var env = require('../env');
	var TimeoutError = require('../TimeoutError');

	function setTimeout(f, ms, x, y) {
		return env.setTimer(function() {
			f(x, y, ms);
		}, ms);
	}

	return function timed(Promise) {
		/**
		 * Return a new promise whose fulfillment value is revealed only
		 * after ms milliseconds
		 * @param {number} ms milliseconds
		 * @returns {Promise}
		 */
		Promise.prototype.delay = function(ms) {
			var p = this._beget();
			this._handler.fold(handleDelay, ms, void 0, p._handler);
			return p;
		};

		function handleDelay(ms, x, h) {
			setTimeout(resolveDelay, ms, x, h);
		}

		function resolveDelay(x, h) {
			h.resolve(x);
		}

		/**
		 * Return a new promise that rejects after ms milliseconds unless
		 * this promise fulfills earlier, in which case the returned promise
		 * fulfills with the same value.
		 * @param {number} ms milliseconds
		 * @param {Error|*=} reason optional rejection reason to use, defaults
		 *   to a TimeoutError if not provided
		 * @returns {Promise}
		 */
		Promise.prototype.timeout = function(ms, reason) {
			var p = this._beget();
			var h = p._handler;

			var t = setTimeout(onTimeout, ms, reason, p._handler);

			this._handler.visit(h,
				function onFulfill(x) {
					env.clearTimer(t);
					this.resolve(x); // this = h
				},
				function onReject(x) {
					env.clearTimer(t);
					this.reject(x); // this = h
				},
				h.notify);

			return p;
		};

		function onTimeout(reason, h, ms) {
			var e = typeof reason === 'undefined'
				? new TimeoutError('timed out after ' + ms + 'ms')
				: reason;
			h.reject(e);
		}

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../TimeoutError":12,"../env":23}],21:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var setTimer = require('../env').setTimer;
	var format = require('../format');

	return function unhandledRejection(Promise) {

		var logError = noop;
		var logInfo = noop;
		var localConsole;

		if(typeof console !== 'undefined') {
			// Alias console to prevent things like uglify's drop_console option from
			// removing console.log/error. Unhandled rejections fall into the same
			// category as uncaught exceptions, and build tools shouldn't silence them.
			localConsole = console;
			logError = typeof localConsole.error !== 'undefined'
				? function (e) { localConsole.error(e); }
				: function (e) { localConsole.log(e); };

			logInfo = typeof localConsole.info !== 'undefined'
				? function (e) { localConsole.info(e); }
				: function (e) { localConsole.log(e); };
		}

		Promise.onPotentiallyUnhandledRejection = function(rejection) {
			enqueue(report, rejection);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			enqueue(unreport, rejection);
		};

		Promise.onFatalRejection = function(rejection) {
			enqueue(throwit, rejection.value);
		};

		var tasks = [];
		var reported = [];
		var running = null;

		function report(r) {
			if(!r.handled) {
				reported.push(r);
				logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
			}
		}

		function unreport(r) {
			var i = reported.indexOf(r);
			if(i >= 0) {
				reported.splice(i, 1);
				logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
			}
		}

		function enqueue(f, x) {
			tasks.push(f, x);
			if(running === null) {
				running = setTimer(flush, 0);
			}
		}

		function flush() {
			running = null;
			while(tasks.length > 0) {
				tasks.shift()(tasks.shift());
			}
		}

		return Promise;
	};

	function throwit(e) {
		throw e;
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../env":23,"../format":24}],22:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function addWith(Promise) {
		/**
		 * Returns a promise whose handlers will be called with `this` set to
		 * the supplied receiver.  Subsequent promises derived from the
		 * returned promise will also have their handlers called with receiver
		 * as `this`. Calling `with` with undefined or no arguments will return
		 * a promise whose handlers will again be called in the usual Promises/A+
		 * way (no `this`) thus safely undoing any previous `with` in the
		 * promise chain.
		 *
		 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
		 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
		 *
		 * @param {object} receiver `this` value for all handlers attached to
		 *  the returned promise.
		 * @returns {Promise}
		 */
		Promise.prototype['with'] = Promise.prototype.withThis = function(receiver) {
			var p = this._beget();
			var child = p._handler;
			child.receiver = receiver;
			this._handler.chain(child, receiver);
			return p;
		};

		return Promise;
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));


},{}],23:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
(function(define) { 'use strict';
define(function(require) {
	/*jshint maxcomplexity:6*/

	// Sniff "best" async scheduling option
	// Prefer process.nextTick or MutationObserver, then check for
	// setTimeout, and finally vertx, since its the only env that doesn't
	// have setTimeout

	var MutationObs;
	var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

	// Default env
	var setTimer = function(f, ms) { return setTimeout(f, ms); };
	var clearTimer = function(t) { return clearTimeout(t); };
	var asap = function (f) { return capturedSetTimeout(f, 0); };

	// Detect specific env
	if (isNode()) { // Node
		asap = function (f) { return process.nextTick(f); };

	} else if (MutationObs = hasMutationObserver()) { // Modern browser
		asap = initMutationObserver(MutationObs);

	} else if (!capturedSetTimeout) { // vert.x
		var vertxRequire = require;
		var vertx = vertxRequire('vertx');
		setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
		clearTimer = vertx.cancelTimer;
		asap = vertx.runOnLoop || vertx.runOnContext;
	}

	return {
		setTimer: setTimer,
		clearTimer: clearTimer,
		asap: asap
	};

	function isNode () {
		return typeof process !== 'undefined' &&
			Object.prototype.toString.call(process) === '[object process]';
	}

	function hasMutationObserver () {
		return (typeof MutationObserver === 'function' && MutationObserver) ||
			(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
	}

	function initMutationObserver(MutationObserver) {
		var scheduled;
		var node = document.createTextNode('');
		var o = new MutationObserver(run);
		o.observe(node, { characterData: true });

		function run() {
			var f = scheduled;
			scheduled = void 0;
			f();
		}

		var i = 0;
		return function (f) {
			scheduled = f;
			node.data = (i ^= 1);
		};
	}
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

}).call(this,require('_process'))
},{"_process":9}],24:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		formatError: formatError,
		formatObject: formatObject,
		tryStringify: tryStringify
	};

	/**
	 * Format an error into a string.  If e is an Error and has a stack property,
	 * it's returned.  Otherwise, e is formatted using formatObject, with a
	 * warning added about e not being a proper Error.
	 * @param {*} e
	 * @returns {String} formatted string, suitable for output to developers
	 */
	function formatError(e) {
		var s = typeof e === 'object' && e !== null && (e.stack || e.message) ? e.stack || e.message : formatObject(e);
		return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
	}

	/**
	 * Format an object, detecting "plain" objects and running them through
	 * JSON.stringify if possible.
	 * @param {Object} o
	 * @returns {string}
	 */
	function formatObject(o) {
		var s = String(o);
		if(s === '[object Object]' && typeof JSON !== 'undefined') {
			s = tryStringify(o, s);
		}
		return s;
	}

	/**
	 * Try to return the result of JSON.stringify(x).  If that fails, return
	 * defaultValue
	 * @param {*} x
	 * @param {*} defaultValue
	 * @returns {String|*} JSON.stringify(x) or defaultValue
	 */
	function tryStringify(x, defaultValue) {
		try {
			return JSON.stringify(x);
		} catch(e) {
			return defaultValue;
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],25:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function makePromise(environment) {

		var tasks = environment.scheduler;
		var emitRejection = initEmitRejection();

		var objectCreate = Object.create ||
			function(proto) {
				function Child() {}
				Child.prototype = proto;
				return new Child();
			};

		/**
		 * Create a promise whose fate is determined by resolver
		 * @constructor
		 * @returns {Promise} promise
		 * @name Promise
		 */
		function Promise(resolver, handler) {
			this._handler = resolver === Handler ? handler : init(resolver);
		}

		/**
		 * Run the supplied resolver
		 * @param resolver
		 * @returns {Pending}
		 */
		function init(resolver) {
			var handler = new Pending();

			try {
				resolver(promiseResolve, promiseReject, promiseNotify);
			} catch (e) {
				promiseReject(e);
			}

			return handler;

			/**
			 * Transition from pre-resolution state to post-resolution state, notifying
			 * all listeners of the ultimate fulfillment or rejection
			 * @param {*} x resolution value
			 */
			function promiseResolve (x) {
				handler.resolve(x);
			}
			/**
			 * Reject this promise with reason, which will be used verbatim
			 * @param {Error|*} reason rejection reason, strongly suggested
			 *   to be an Error type
			 */
			function promiseReject (reason) {
				handler.reject(reason);
			}

			/**
			 * @deprecated
			 * Issue a progress event, notifying all progress listeners
			 * @param {*} x progress event payload to pass to all listeners
			 */
			function promiseNotify (x) {
				handler.notify(x);
			}
		}

		// Creation

		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise.never = never;

		Promise._defer = defer;
		Promise._handler = getHandler;

		/**
		 * Returns a trusted promise. If x is already a trusted promise, it is
		 * returned, otherwise returns a new trusted Promise which follows x.
		 * @param  {*} x
		 * @return {Promise} promise
		 */
		function resolve(x) {
			return isPromise(x) ? x
				: new Promise(Handler, new Async(getHandler(x)));
		}

		/**
		 * Return a reject promise with x as its reason (x is used verbatim)
		 * @param {*} x
		 * @returns {Promise} rejected promise
		 */
		function reject(x) {
			return new Promise(Handler, new Async(new Rejected(x)));
		}

		/**
		 * Return a promise that remains pending forever
		 * @returns {Promise} forever-pending promise.
		 */
		function never() {
			return foreverPendingPromise; // Should be frozen
		}

		/**
		 * Creates an internal {promise, resolver} pair
		 * @private
		 * @returns {Promise}
		 */
		function defer() {
			return new Promise(Handler, new Pending());
		}

		// Transformation and flow control

		/**
		 * Transform this promise's fulfillment value, returning a new Promise
		 * for the transformed result.  If the promise cannot be fulfilled, onRejected
		 * is called with the reason.  onProgress *may* be called with updates toward
		 * this promise's fulfillment.
		 * @param {function=} onFulfilled fulfillment handler
		 * @param {function=} onRejected rejection handler
		 * @param {function=} onProgress @deprecated progress handler
		 * @return {Promise} new promise
		 */
		Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
			var parent = this._handler;
			var state = parent.join().state();

			if ((typeof onFulfilled !== 'function' && state > 0) ||
				(typeof onRejected !== 'function' && state < 0)) {
				// Short circuit: value will not change, simply share handler
				return new this.constructor(Handler, parent);
			}

			var p = this._beget();
			var child = p._handler;

			parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

			return p;
		};

		/**
		 * If this promise cannot be fulfilled due to an error, call onRejected to
		 * handle the error. Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		Promise.prototype['catch'] = function(onRejected) {
			return this.then(void 0, onRejected);
		};

		/**
		 * Creates a new, pending promise of the same type as this promise
		 * @private
		 * @returns {Promise}
		 */
		Promise.prototype._beget = function() {
			return begetFrom(this._handler, this.constructor);
		};

		function begetFrom(parent, Promise) {
			var child = new Pending(parent.receiver, parent.join().context);
			return new Promise(Handler, child);
		}

		// Array combinators

		Promise.all = all;
		Promise.race = race;
		Promise._traverse = traverse;

		/**
		 * Return a promise that will fulfill when all promises in the
		 * input array have fulfilled, or will reject when one of the
		 * promises rejects.
		 * @param {array} promises array of promises
		 * @returns {Promise} promise for array of fulfillment values
		 */
		function all(promises) {
			return traverseWith(snd, null, promises);
		}

		/**
		 * Array<Promise<X>> -> Promise<Array<f(X)>>
		 * @private
		 * @param {function} f function to apply to each promise's value
		 * @param {Array} promises array of promises
		 * @returns {Promise} promise for transformed values
		 */
		function traverse(f, promises) {
			return traverseWith(tryCatch2, f, promises);
		}

		function traverseWith(tryMap, f, promises) {
			var handler = typeof f === 'function' ? mapAt : settleAt;

			var resolver = new Pending();
			var pending = promises.length >>> 0;
			var results = new Array(pending);

			for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
				x = promises[i];

				if (x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				traverseAt(promises, handler, i, x, resolver);
			}

			if(pending === 0) {
				resolver.become(new Fulfilled(results));
			}

			return new Promise(Handler, resolver);

			function mapAt(i, x, resolver) {
				if(!resolver.resolved) {
					traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
				}
			}

			function settleAt(i, x, resolver) {
				results[i] = x;
				if(--pending === 0) {
					resolver.become(new Fulfilled(results));
				}
			}
		}

		function traverseAt(promises, handler, i, x, resolver) {
			if (maybeThenable(x)) {
				var h = getHandlerMaybeThenable(x);
				var s = h.state();

				if (s === 0) {
					h.fold(handler, i, void 0, resolver);
				} else if (s > 0) {
					handler(i, h.value, resolver);
				} else {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
				}
			} else {
				handler(i, x, resolver);
			}
		}

		Promise._visitRemaining = visitRemaining;
		function visitRemaining(promises, start, handler) {
			for(var i=start; i<promises.length; ++i) {
				markAsHandled(getHandler(promises[i]), handler);
			}
		}

		function markAsHandled(h, handler) {
			if(h === handler) {
				return;
			}

			var s = h.state();
			if(s === 0) {
				h.visit(h, void 0, h._unreport);
			} else if(s < 0) {
				h._unreport();
			}
		}

		/**
		 * Fulfill-reject competitive race. Return a promise that will settle
		 * to the same state as the earliest input promise to settle.
		 *
		 * WARNING: The ES6 Promise spec requires that race()ing an empty array
		 * must return a promise that is pending forever.  This implementation
		 * returns a singleton forever-pending promise, the same singleton that is
		 * returned by Promise.never(), thus can be checked with ===
		 *
		 * @param {array} promises array of promises to race
		 * @returns {Promise} if input is non-empty, a promise that will settle
		 * to the same outcome as the earliest input promise to settle. if empty
		 * is empty, returns a promise that will never settle.
		 */
		function race(promises) {
			if(typeof promises !== 'object' || promises === null) {
				return reject(new TypeError('non-iterable passed to race()'));
			}

			// Sigh, race([]) is untestable unless we return *something*
			// that is recognizable without calling .then() on it.
			return promises.length === 0 ? never()
				 : promises.length === 1 ? resolve(promises[0])
				 : runRace(promises);
		}

		function runRace(promises) {
			var resolver = new Pending();
			var i, x, h;
			for(i=0; i<promises.length; ++i) {
				x = promises[i];
				if (x === void 0 && !(i in promises)) {
					continue;
				}

				h = getHandler(x);
				if(h.state() !== 0) {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
					break;
				} else {
					h.visit(resolver, resolver.resolve, resolver.reject);
				}
			}
			return new Promise(Handler, resolver);
		}

		// Promise internals
		// Below this, everything is @private

		/**
		 * Get an appropriate handler for x, without checking for cycles
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandler(x) {
			if(isPromise(x)) {
				return x._handler.join();
			}
			return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
		}

		/**
		 * Get a handler for thenable x.
		 * NOTE: You must only call this if maybeThenable(x) == true
		 * @param {object|function|Promise} x
		 * @returns {object} handler
		 */
		function getHandlerMaybeThenable(x) {
			return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
		}

		/**
		 * Get a handler for potentially untrusted thenable x
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandlerUntrusted(x) {
			try {
				var untrustedThen = x.then;
				return typeof untrustedThen === 'function'
					? new Thenable(untrustedThen, x)
					: new Fulfilled(x);
			} catch(e) {
				return new Rejected(e);
			}
		}

		/**
		 * Handler for a promise that is pending forever
		 * @constructor
		 */
		function Handler() {}

		Handler.prototype.when
			= Handler.prototype.become
			= Handler.prototype.notify // deprecated
			= Handler.prototype.fail
			= Handler.prototype._unreport
			= Handler.prototype._report
			= noop;

		Handler.prototype._state = 0;

		Handler.prototype.state = function() {
			return this._state;
		};

		/**
		 * Recursively collapse handler chain to find the handler
		 * nearest to the fully resolved value.
		 * @returns {object} handler nearest the fully resolved value
		 */
		Handler.prototype.join = function() {
			var h = this;
			while(h.handler !== void 0) {
				h = h.handler;
			}
			return h;
		};

		Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
			this.when({
				resolver: to,
				receiver: receiver,
				fulfilled: fulfilled,
				rejected: rejected,
				progress: progress
			});
		};

		Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
			this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
		};

		Handler.prototype.fold = function(f, z, c, to) {
			this.when(new Fold(f, z, c, to));
		};

		/**
		 * Handler that invokes fail() on any handler it becomes
		 * @constructor
		 */
		function FailIfRejected() {}

		inherit(Handler, FailIfRejected);

		FailIfRejected.prototype.become = function(h) {
			h.fail();
		};

		var failIfRejected = new FailIfRejected();

		/**
		 * Handler that manages a queue of consumers waiting on a pending promise
		 * @constructor
		 */
		function Pending(receiver, inheritedContext) {
			Promise.createContext(this, inheritedContext);

			this.consumers = void 0;
			this.receiver = receiver;
			this.handler = void 0;
			this.resolved = false;
		}

		inherit(Handler, Pending);

		Pending.prototype._state = 0;

		Pending.prototype.resolve = function(x) {
			this.become(getHandler(x));
		};

		Pending.prototype.reject = function(x) {
			if(this.resolved) {
				return;
			}

			this.become(new Rejected(x));
		};

		Pending.prototype.join = function() {
			if (!this.resolved) {
				return this;
			}

			var h = this;

			while (h.handler !== void 0) {
				h = h.handler;
				if (h === this) {
					return this.handler = cycle();
				}
			}

			return h;
		};

		Pending.prototype.run = function() {
			var q = this.consumers;
			var handler = this.handler;
			this.handler = this.handler.join();
			this.consumers = void 0;

			for (var i = 0; i < q.length; ++i) {
				handler.when(q[i]);
			}
		};

		Pending.prototype.become = function(handler) {
			if(this.resolved) {
				return;
			}

			this.resolved = true;
			this.handler = handler;
			if(this.consumers !== void 0) {
				tasks.enqueue(this);
			}

			if(this.context !== void 0) {
				handler._report(this.context);
			}
		};

		Pending.prototype.when = function(continuation) {
			if(this.resolved) {
				tasks.enqueue(new ContinuationTask(continuation, this.handler));
			} else {
				if(this.consumers === void 0) {
					this.consumers = [continuation];
				} else {
					this.consumers.push(continuation);
				}
			}
		};

		/**
		 * @deprecated
		 */
		Pending.prototype.notify = function(x) {
			if(!this.resolved) {
				tasks.enqueue(new ProgressTask(x, this));
			}
		};

		Pending.prototype.fail = function(context) {
			var c = typeof context === 'undefined' ? this.context : context;
			this.resolved && this.handler.join().fail(c);
		};

		Pending.prototype._report = function(context) {
			this.resolved && this.handler.join()._report(context);
		};

		Pending.prototype._unreport = function() {
			this.resolved && this.handler.join()._unreport();
		};

		/**
		 * Wrap another handler and force it into a future stack
		 * @param {object} handler
		 * @constructor
		 */
		function Async(handler) {
			this.handler = handler;
		}

		inherit(Handler, Async);

		Async.prototype.when = function(continuation) {
			tasks.enqueue(new ContinuationTask(continuation, this));
		};

		Async.prototype._report = function(context) {
			this.join()._report(context);
		};

		Async.prototype._unreport = function() {
			this.join()._unreport();
		};

		/**
		 * Handler that wraps an untrusted thenable and assimilates it in a future stack
		 * @param {function} then
		 * @param {{then: function}} thenable
		 * @constructor
		 */
		function Thenable(then, thenable) {
			Pending.call(this);
			tasks.enqueue(new AssimilateTask(then, thenable, this));
		}

		inherit(Pending, Thenable);

		/**
		 * Handler for a fulfilled promise
		 * @param {*} x fulfillment value
		 * @constructor
		 */
		function Fulfilled(x) {
			Promise.createContext(this);
			this.value = x;
		}

		inherit(Handler, Fulfilled);

		Fulfilled.prototype._state = 1;

		Fulfilled.prototype.fold = function(f, z, c, to) {
			runContinuation3(f, z, this, c, to);
		};

		Fulfilled.prototype.when = function(cont) {
			runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
		};

		var errorId = 0;

		/**
		 * Handler for a rejected promise
		 * @param {*} x rejection reason
		 * @constructor
		 */
		function Rejected(x) {
			Promise.createContext(this);

			this.id = ++errorId;
			this.value = x;
			this.handled = false;
			this.reported = false;

			this._report();
		}

		inherit(Handler, Rejected);

		Rejected.prototype._state = -1;

		Rejected.prototype.fold = function(f, z, c, to) {
			to.become(this);
		};

		Rejected.prototype.when = function(cont) {
			if(typeof cont.rejected === 'function') {
				this._unreport();
			}
			runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
		};

		Rejected.prototype._report = function(context) {
			tasks.afterQueue(new ReportTask(this, context));
		};

		Rejected.prototype._unreport = function() {
			if(this.handled) {
				return;
			}
			this.handled = true;
			tasks.afterQueue(new UnreportTask(this));
		};

		Rejected.prototype.fail = function(context) {
			this.reported = true;
			emitRejection('unhandledRejection', this);
			Promise.onFatalRejection(this, context === void 0 ? this.context : context);
		};

		function ReportTask(rejection, context) {
			this.rejection = rejection;
			this.context = context;
		}

		ReportTask.prototype.run = function() {
			if(!this.rejection.handled && !this.rejection.reported) {
				this.rejection.reported = true;
				emitRejection('unhandledRejection', this.rejection) ||
					Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
			}
		};

		function UnreportTask(rejection) {
			this.rejection = rejection;
		}

		UnreportTask.prototype.run = function() {
			if(this.rejection.reported) {
				emitRejection('rejectionHandled', this.rejection) ||
					Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
			}
		};

		// Unhandled rejection hooks
		// By default, everything is a noop

		Promise.createContext
			= Promise.enterContext
			= Promise.exitContext
			= Promise.onPotentiallyUnhandledRejection
			= Promise.onPotentiallyUnhandledRejectionHandled
			= Promise.onFatalRejection
			= noop;

		// Errors and singletons

		var foreverPendingHandler = new Handler();
		var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

		function cycle() {
			return new Rejected(new TypeError('Promise cycle'));
		}

		// Task runners

		/**
		 * Run a single consumer
		 * @constructor
		 */
		function ContinuationTask(continuation, handler) {
			this.continuation = continuation;
			this.handler = handler;
		}

		ContinuationTask.prototype.run = function() {
			this.handler.join().when(this.continuation);
		};

		/**
		 * Run a queue of progress handlers
		 * @constructor
		 */
		function ProgressTask(value, handler) {
			this.handler = handler;
			this.value = value;
		}

		ProgressTask.prototype.run = function() {
			var q = this.handler.consumers;
			if(q === void 0) {
				return;
			}

			for (var c, i = 0; i < q.length; ++i) {
				c = q[i];
				runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
			}
		};

		/**
		 * Assimilate a thenable, sending it's value to resolver
		 * @param {function} then
		 * @param {object|function} thenable
		 * @param {object} resolver
		 * @constructor
		 */
		function AssimilateTask(then, thenable, resolver) {
			this._then = then;
			this.thenable = thenable;
			this.resolver = resolver;
		}

		AssimilateTask.prototype.run = function() {
			var h = this.resolver;
			tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

			function _resolve(x) { h.resolve(x); }
			function _reject(x)  { h.reject(x); }
			function _notify(x)  { h.notify(x); }
		};

		function tryAssimilate(then, thenable, resolve, reject, notify) {
			try {
				then.call(thenable, resolve, reject, notify);
			} catch (e) {
				reject(e);
			}
		}

		/**
		 * Fold a handler value with z
		 * @constructor
		 */
		function Fold(f, z, c, to) {
			this.f = f; this.z = z; this.c = c; this.to = to;
			this.resolver = failIfRejected;
			this.receiver = this;
		}

		Fold.prototype.fulfilled = function(x) {
			this.f.call(this.c, this.z, x, this.to);
		};

		Fold.prototype.rejected = function(x) {
			this.to.reject(x);
		};

		Fold.prototype.progress = function(x) {
			this.to.notify(x);
		};

		// Other helpers

		/**
		 * @param {*} x
		 * @returns {boolean} true iff x is a trusted Promise
		 */
		function isPromise(x) {
			return x instanceof Promise;
		}

		/**
		 * Test just enough to rule out primitives, in order to take faster
		 * paths in some code
		 * @param {*} x
		 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
		 */
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		function runContinuation1(f, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject(f, h.value, receiver, next);
			Promise.exitContext();
		}

		function runContinuation3(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject3(f, x, h.value, receiver, next);
			Promise.exitContext();
		}

		/**
		 * @deprecated
		 */
		function runNotify(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.notify(x);
			}

			Promise.enterContext(h);
			tryCatchReturn(f, x, receiver, next);
			Promise.exitContext();
		}

		function tryCatch2(f, a, b) {
			try {
				return f(a, b);
			} catch(e) {
				return reject(e);
			}
		}

		/**
		 * Return f.call(thisArg, x), or if it throws return a rejected promise for
		 * the thrown exception
		 */
		function tryCatchReject(f, x, thisArg, next) {
			try {
				next.become(getHandler(f.call(thisArg, x)));
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * Same as above, but includes the extra argument parameter.
		 */
		function tryCatchReject3(f, x, y, thisArg, next) {
			try {
				f.call(thisArg, x, y, next);
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * @deprecated
		 * Return f.call(thisArg, x), or if it throws, *return* the exception
		 */
		function tryCatchReturn(f, x, thisArg, next) {
			try {
				next.notify(f.call(thisArg, x));
			} catch(e) {
				next.notify(e);
			}
		}

		function inherit(Parent, Child) {
			Child.prototype = objectCreate(Parent.prototype);
			Child.prototype.constructor = Child;
		}

		function snd(x, y) {
			return y;
		}

		function noop() {}

		function initEmitRejection() {
			/*global process, self, CustomEvent*/
			if(typeof process !== 'undefined' && process !== null
				&& typeof process.emit === 'function') {
				// Returning falsy here means to call the default
				// onPotentiallyUnhandledRejection API.  This is safe even in
				// browserify since process.emit always returns falsy in browserify:
				// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
				return function(type, rejection) {
					return type === 'unhandledRejection'
						? process.emit(type, rejection.value, rejection)
						: process.emit(type, rejection);
				};
			} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
				return (function(noop, self, CustomEvent) {
					var hasCustomEvent = false;
					try {
						var ev = new CustomEvent('unhandledRejection');
						hasCustomEvent = ev instanceof CustomEvent;
					} catch (e) {}

					return !hasCustomEvent ? noop : function(type, rejection) {
						var ev = new CustomEvent(type, {
							detail: {
								reason: rejection.value,
								key: rejection
							},
							bubbles: false,
							cancelable: true
						});

						return !self.dispatchEvent(ev);
					};
				}(noop, self, CustomEvent));
			}

			return noop;
		}

		return Promise;
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

}).call(this,require('_process'))
},{"_process":9}],26:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		pending: toPendingState,
		fulfilled: toFulfilledState,
		rejected: toRejectedState,
		inspect: inspect
	};

	function toPendingState() {
		return { state: 'pending' };
	}

	function toRejectedState(e) {
		return { state: 'rejected', reason: e };
	}

	function toFulfilledState(x) {
		return { state: 'fulfilled', value: x };
	}

	function inspect(handler) {
		var state = handler.state();
		return state === 0 ? toPendingState()
			 : state > 0   ? toFulfilledState(handler.value)
			               : toRejectedState(handler.value);
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],27:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */

/**
 * Promises/A+ and when() implementation
 * when is part of the cujoJS family of libraries (http://cujojs.com/)
 * @author Brian Cavalier
 * @author John Hann
 */
(function(define) { 'use strict';
define(function (require) {

	var timed = require('./lib/decorators/timed');
	var array = require('./lib/decorators/array');
	var flow = require('./lib/decorators/flow');
	var fold = require('./lib/decorators/fold');
	var inspect = require('./lib/decorators/inspect');
	var generate = require('./lib/decorators/iterate');
	var progress = require('./lib/decorators/progress');
	var withThis = require('./lib/decorators/with');
	var unhandledRejection = require('./lib/decorators/unhandledRejection');
	var TimeoutError = require('./lib/TimeoutError');

	var Promise = [array, flow, fold, generate, progress,
		inspect, withThis, timed, unhandledRejection]
		.reduce(function(Promise, feature) {
			return feature(Promise);
		}, require('./lib/Promise'));

	var apply = require('./lib/apply')(Promise);

	// Public API

	when.promise     = promise;              // Create a pending promise
	when.resolve     = Promise.resolve;      // Create a resolved promise
	when.reject      = Promise.reject;       // Create a rejected promise

	when.lift        = lift;                 // lift a function to return promises
	when['try']      = attempt;              // call a function and return a promise
	when.attempt     = attempt;              // alias for when.try

	when.iterate     = Promise.iterate;      // DEPRECATED (use cujojs/most streams) Generate a stream of promises
	when.unfold      = Promise.unfold;       // DEPRECATED (use cujojs/most streams) Generate a stream of promises

	when.join        = join;                 // Join 2 or more promises

	when.all         = all;                  // Resolve a list of promises
	when.settle      = settle;               // Settle a list of promises

	when.any         = lift(Promise.any);    // One-winner race
	when.some        = lift(Promise.some);   // Multi-winner race
	when.race        = lift(Promise.race);   // First-to-settle race

	when.map         = map;                  // Array.map() for promises
	when.filter      = filter;               // Array.filter() for promises
	when.reduce      = lift(Promise.reduce);       // Array.reduce() for promises
	when.reduceRight = lift(Promise.reduceRight);  // Array.reduceRight() for promises

	when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable

	when.Promise     = Promise;              // Promise constructor
	when.defer       = defer;                // Create a {promise, resolve, reject} tuple

	// Error types

	when.TimeoutError = TimeoutError;

	/**
	 * Get a trusted promise for x, or by transforming x with onFulfilled
	 *
	 * @param {*} x
	 * @param {function?} onFulfilled callback to be called when x is
	 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
	 *   will be invoked immediately.
	 * @param {function?} onRejected callback to be called when x is
	 *   rejected.
	 * @param {function?} onProgress callback to be called when progress updates
	 *   are issued for x. @deprecated
	 * @returns {Promise} a new promise that will fulfill with the return
	 *   value of callback or errback or the completion value of promiseOrValue if
	 *   callback and/or errback is not supplied.
	 */
	function when(x, onFulfilled, onRejected, onProgress) {
		var p = Promise.resolve(x);
		if (arguments.length < 2) {
			return p;
		}

		return p.then(onFulfilled, onRejected, onProgress);
	}

	/**
	 * Creates a new promise whose fate is determined by resolver.
	 * @param {function} resolver function(resolve, reject, notify)
	 * @returns {Promise} promise whose fate is determine by resolver
	 */
	function promise(resolver) {
		return new Promise(resolver);
	}

	/**
	 * Lift the supplied function, creating a version of f that returns
	 * promises, and accepts promises as arguments.
	 * @param {function} f
	 * @returns {Function} version of f that returns promises
	 */
	function lift(f) {
		return function() {
			for(var i=0, l=arguments.length, a=new Array(l); i<l; ++i) {
				a[i] = arguments[i];
			}
			return apply(f, this, a);
		};
	}

	/**
	 * Call f in a future turn, with the supplied args, and return a promise
	 * for the result.
	 * @param {function} f
	 * @returns {Promise}
	 */
	function attempt(f /*, args... */) {
		/*jshint validthis:true */
		for(var i=0, l=arguments.length-1, a=new Array(l); i<l; ++i) {
			a[i] = arguments[i+1];
		}
		return apply(f, this, a);
	}

	/**
	 * Creates a {promise, resolver} pair, either or both of which
	 * may be given out safely to consumers.
	 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
	 */
	function defer() {
		return new Deferred();
	}

	function Deferred() {
		var p = Promise._defer();

		function resolve(x) { p._handler.resolve(x); }
		function reject(x) { p._handler.reject(x); }
		function notify(x) { p._handler.notify(x); }

		this.promise = p;
		this.resolve = resolve;
		this.reject = reject;
		this.notify = notify;
		this.resolver = { resolve: resolve, reject: reject, notify: notify };
	}

	/**
	 * Determines if x is promise-like, i.e. a thenable object
	 * NOTE: Will return true for *any thenable object*, and isn't truly
	 * safe, since it may attempt to access the `then` property of x (i.e.
	 *  clever/malicious getters may do weird things)
	 * @param {*} x anything
	 * @returns {boolean} true if x is promise-like
	 */
	function isPromiseLike(x) {
		return x && typeof x.then === 'function';
	}

	/**
	 * Return a promise that will resolve only once all the supplied arguments
	 * have resolved. The resolution value of the returned promise will be an array
	 * containing the resolution values of each of the arguments.
	 * @param {...*} arguments may be a mix of promises and values
	 * @returns {Promise}
	 */
	function join(/* ...promises */) {
		return Promise.all(arguments);
	}

	/**
	 * Return a promise that will fulfill once all input promises have
	 * fulfilled, or reject when any one input promise rejects.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise}
	 */
	function all(promises) {
		return when(promises, Promise.all);
	}

	/**
	 * Return a promise that will always fulfill with an array containing
	 * the outcome states of all input promises.  The returned promise
	 * will only reject if `promises` itself is a rejected promise.
	 * @param {array|Promise} promises array (or promise for an array) of promises
	 * @returns {Promise} promise for array of settled state descriptors
	 */
	function settle(promises) {
		return when(promises, Promise.settle);
	}

	/**
	 * Promise-aware array map function, similar to `Array.prototype.map()`,
	 * but input array may contain promises or values.
	 * @param {Array|Promise} promises array of anything, may contain promises and values
	 * @param {function(x:*, index:Number):*} mapFunc map function which may
	 *  return a promise or value
	 * @returns {Promise} promise that will fulfill with an array of mapped values
	 *  or reject if any input promise rejects.
	 */
	function map(promises, mapFunc) {
		return when(promises, function(promises) {
			return Promise.map(promises, mapFunc);
		});
	}

	/**
	 * Filter the provided array of promises using the provided predicate.  Input may
	 * contain promises and values
	 * @param {Array|Promise} promises array of promises and values
	 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
	 *  Must return truthy (or promise for truthy) for items to retain.
	 * @returns {Promise} promise that will fulfill with an array containing all items
	 *  for which predicate returned truthy.
	 */
	function filter(promises, predicate) {
		return when(promises, function(promises) {
			return Promise.filter(promises, predicate);
		});
	}

	return when;
});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./lib/Promise":10,"./lib/TimeoutError":12,"./lib/apply":13,"./lib/decorators/array":14,"./lib/decorators/flow":15,"./lib/decorators/fold":16,"./lib/decorators/inspect":17,"./lib/decorators/iterate":18,"./lib/decorators/progress":19,"./lib/decorators/timed":20,"./lib/decorators/unhandledRejection":21,"./lib/decorators/with":22}],28:[function(require,module,exports){


var Program    = require( 'nanogl/program' );
var Fbo        = require( 'nanogl/fbo' );
var Texture    = require( 'nanogl/texture' );
var FillScreen = require( './fillscreen' );


function Composer( gl ){
  this.gl = gl;

  this.fillPrg = new Program( gl );
  this.fillPrg.compile( 
    "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
    "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\nvarying vec2 vUvs;\n\nvoid main( void){\n\n  gl_FragColor = texture2D( uTex, vUvs );\n}"
  )
  
  this.fill = new FillScreen( gl );

  this.fbo = new Fbo( gl, {
    format: gl.RGBA
  })

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
},{"./fillscreen":29,"nanogl/fbo":6,"nanogl/program":7,"nanogl/texture":8}],29:[function(require,module,exports){

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
},{"nanogl/arraybuffer":4}],30:[function(require,module,exports){

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

},{"./composer":28,"./pad-process":31,"nanogl-state":3,"nanogl/arraybuffer":4,"nanogl/program":7,"nanogl/texture":8,"when":27}],31:[function(require,module,exports){


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
    "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
    "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\n\nvarying vec2 vUvs;\n\nvoid main( void){\n  vec4 color = texture2D( uTex, vUvs );\n  if( color.a == 1.0) discard;\n}"
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
    "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
    "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\nvarying vec2 vUvs;\n\nvoid main( void){\n\n  gl_FragColor = texture2D( uTex, vUvs );\n}"
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
},{"./fillscreen":29,"./pad-program":32,"nanogl/fbo":6,"nanogl/program":7}],32:[function(require,module,exports){



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
        "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
        "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\n\nuniform vec2 uKernel[N_POINT];\nuniform vec2 uTexelRatio;\n\nvarying vec2 vUvs;\n\nvoid main( void){\n\n  vec3 color = vec3(0.0);\n  bool found = false;\n  for( int i = 0; i < N_POINT; i++ ){\n    vec4 c = texture2D( uTex, vUvs + uKernel[i] * uTexelRatio );\n    if( !found && c.a == 1.0 ){\n      found = true;\n      color = c.rgb;\n    }\n  }\n\n  if( !found ) discard;\n  gl_FragColor = vec4( color, 1.0 );\n}",
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
},{"nanogl/program":7}]},{},[30]);
