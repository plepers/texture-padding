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
},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){


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
    "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
    "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\nvarying vec2 vUvs;\n\nvoid main( void){\n\n  gl_FragColor = texture2D( uTex, vUvs );\n}"
  )

  stencilPrg = new Program( gl );
  stencilPrg.compile( 
    "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
    "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\n\nvarying vec2 vUvs;\n\nvoid main( void){\n  vec4 color = texture2D( uTex, vUvs );\n  if( color.a == 1.0) discard;\n}"
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
        "#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vUvs;\n\nvoid main( void){\n  gl_Position = vec4( aPosition, 1.0, 1.0 );\n  vUvs = gl_Position.xy * .5 + .5;\n}\n\n",
        "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D uTex;\n\nuniform vec2 uKernel[N_POINT];\nuniform vec2 uTexelRatio;\n\nvarying vec2 vUvs;\n\nvoid main( void){\n\n  vec3 color = vec3(0.0);\n  bool found = false;\n  for( int i = 0; i < N_POINT; i++ ){\n    vec4 c = texture2D( uTex, vUvs + uKernel[i] * uTexelRatio );\n    if( !found && c.a == 1.0 ){\n      found = true;\n      color = c.rgb;\n    }\n  }\n\n  if( !found ) discard;\n  gl_FragColor = vec4( color, 1.0 );\n}",
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

},{"nanogl-state":3,"nanogl/arraybuffer":4,"nanogl/program":6,"nanogl/texture":7}]},{},[8]);
