// main.ts
import { camera, scene, renderer } from './renderer';
import { objects } from './objects';
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

  objects.forEach((object) => {
    object.animate();
  });

  // add user input controls
  // playerController.update(new Clock().getDelta());

  renderer.render(scene, camera);
};

// add mesh object to the scene
objects.forEach((object) => {
  scene.add(object.mesh);
});

// add all lights
scene.add(...lights);

// create background / ground
// scene.add(map);
// scene.add(...grid);

// run three js animation
animate();
