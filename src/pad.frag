precision highp float;
uniform sampler2D uTex;

uniform vec2 uKernel[N_POINT];
uniform vec2 uTexelRatio;

varying vec2 vUvs;


void main( void){

  vec3 color = vec3(0.0);
  bool found = false;
  for( int i = 0; i < N_POINT; i++ ){
    vec4 c = texture2D( uTex, vUvs + uKernel[i] * uTexelRatio );
    if( !found && c.a == 1.0 ){
      found = true;
      color = c.rgb;
    }
  }

  if( !found ) discard;
  gl_FragColor = vec4( color, 1.0 );
}