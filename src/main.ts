// main.ts
import { camera, scene, renderer } from './renderer';
import { cube } from './objects';
import { grid, map } from './map';
import { Clock } from 'three';
import { playerController } from './player';
import { lights } from './lighting';

document.body.appendChild(renderer.domElement);

/**
 * Renders objects within the canvas
 */
const animate = () => {
  requestAnimationFrame(animate);

  // make cube rotate on its axis
  // taken from threejs get started tutorial
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  // add user input controls
  playerController.update(new Clock().getDelta());

  renderer.render(scene, camera);
};

// add mesh object to the scene
cube.position.x = 6;
cube.position.y = 6;
cube.position.z = 0;
scene.add(cube);

// add all lights
scene.add(...lights);

// create background / ground
// scene.add(map);
scene.add(...grid);

// run three js animation
animate();
