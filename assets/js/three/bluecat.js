var container;
var camera, scene, renderer;
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

  var pointLight2 = new THREE.PointLight( 0xffffff * Math.random(), .9 );
  pointLight2.position.set(-200,200,200);
  scene.add( pointLight2 );

  var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
  camera.add( pointLight );
  scene.add( camera );

  // texture

  // model
  object1 = new THREE.Object3D();
  scene.add( object1 );

  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath( 'assets/js/three/3d/' );
  mtlLoader.load( '3_lowpolyisland2_forweb.mtl', function( materials ) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.setPath( 'assets/js/three/3d/' );
    objLoader.load( '3_lowpolyisland2_forweb.obj', function ( object ) {
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

  // var time = Date.now();
  // object1.rotation.y += -0.005;
  renderer.render( scene, camera );
}
