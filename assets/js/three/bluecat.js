var container;
var camera, scene, renderer;
var particleLight;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
  container = document.getElementById( 'container' );
  document.body.appendChild(container);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight*0.94 );
  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  container.appendChild( renderer.domElement );
  //
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );

  window.addEventListener('resize',onWindowResize,false);

  fillScene();

}

function fillScene(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x021926);

  camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.z = 250;

  // scene
  particleLight = new THREE.Object3D();
  var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
  var prticle = new THREE.Mesh( new THREE.SphereBufferGeometry( 1, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
  particleLight.add(pointLight, prticle);
  scene.add( particleLight );

  // camera.add( new THREE.AmbientLight( 0x222222 )  );
  scene.add( camera );

  // texture

  // model
  object1 = new THREE.Object3D();
  scene.add( object1 );

  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath( 'assets/js/three/3d/' );
  mtlLoader.load( '3_lowpolyisland3_forweb.mtl', function( materials ) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.setPath( 'assets/js/three/3d/' );
    objLoader.load( '3_lowpolyisland3_forweb.obj', function ( object ) {
      object.position.set(40,-20,0);
      object.rotation.set(0,180*Math.PI/180,0);
      object.scale.set(50,50,50);
      object1.add( object );
    });
  });
}

function onWindowResize(){
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight*0.94 );
}

function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouseX = (  event.clientX - windowHalfX  )/2;
  mouseY = (  event.clientY - windowHalfY  )/2;
}

//

function animate() {
  requestAnimationFrame( animate );
  render();

}

function render() {
  camera.position.x += ( mouseX - camera.position.x ) * .06;
  camera.position.y += ( - mouseY - camera.position.y ) * .06;

  camera.lookAt( scene.position );

  var timer = Date.now() * 0.0001;
  particleLight.position.x = Math.sin( timer * 7 ) * 80;
  particleLight.position.y = Math.cos( timer * 5 ) * 160;
  particleLight.position.z = Math.cos( timer * 3 ) * 80;
  // object1.rotation.y += -0.005;
  renderer.render( scene, camera );
}
