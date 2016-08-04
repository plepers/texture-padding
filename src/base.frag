precision highp float;
uniform sampler2D uTex;
varying vec2 vUvs;


void main( void){

  gl_FragColor = texture2D( uTex, vUvs );
}