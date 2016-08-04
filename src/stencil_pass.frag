precision highp float;
uniform sampler2D uTex;

varying vec2 vUvs;


void main( void){
  vec4 color = texture2D( uTex, vUvs );
  if( color.a == 1.0) discard;
}