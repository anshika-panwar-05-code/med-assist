// Create a new scene
const scene = new THREE.Scene();

// Create a new camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a new renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a new geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a new material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create a new mesh with the geometry and material
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a new render loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}
animate();

// Set the camera's position to account for the new content
camera.position.z = 15;

// Create a new render loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}
animate();