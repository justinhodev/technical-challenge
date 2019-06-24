// main.ts
import { camera, scene, renderer } from './scene/renderer';
import { objects } from './objects/index';
import { lights } from './scene/lighting';
import { gridHelper, raycaster, mouse, plane } from './objects/grid';
import { Object3D } from 'three';
import { onMouseMove, onWindowResize } from './utils';

document.body.appendChild(renderer.domElement);

/**
 * Renders objects within the canvas
 */
const animate = () => {
  requestAnimationFrame(animate);

  objects.forEach((object) => {
    object.animate();
  });

  renderer.render(scene, camera);
};

// add mesh objects to the scene
objects.forEach((object) => {
  scene.add(object.mesh);
});

// add all lights
scene.add(...lights);

// create background / ground
scene.add(gridHelper);
scene.add(plane);

// handle interactions
const objectArray: Object3D[] = [];
objectArray.push(plane);
const hoverMesh = objects[1].mesh;
document.addEventListener('mousemove', (event) => {
  onMouseMove(event, mouse, raycaster, hoverMesh, camera, objectArray);
});

// change camera view and re-render on window resize
window.addEventListener('resize', () => {
  onWindowResize(camera, renderer);
});

// run three js animation
animate();
