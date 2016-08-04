
attribute vec2 aPosition;
varying vec2 vUvs;


void main( void){
  gl_Position = vec4( aPosition, 1.0, 1.0 );
  vUvs = gl_Position.xy * .5 + .5;
}

