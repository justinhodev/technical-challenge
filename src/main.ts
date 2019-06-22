// main.ts
import { camera, scene, renderer } from "./renderer";
import { cube } from './objects';
import { map } from './map';
import { Clock, DirectionalLight, PointLight } from 'three';
import { playerController } from './player';

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
}

// add mesh object to the scene
cube.position.x = 6;
cube.position.y = 6;
cube.position.z = 0;
scene.add(cube);

// add lighting source to the scene
// 3 point lighting setup
const keyLight = new PointLight(0xFFFFFF, 40);
const fillLight = new PointLight(0xFFFFFF, 30);
const backLight = new DirectionalLight(0xFFFFFF, 10);

// TODO (justin) - get rid of magic numbers, set positions programmaticaly?
// put lights relative to center of scene
keyLight.position.set(-20, 20, 40);
fillLight.position.set(10, 20, 28);
backLight.position.set(-5, 50, -30);

// point lights to origin
keyLight.lookAt(scene.position);
fillLight.lookAt(scene.position);
backLight.lookAt(scene.position);

// add lights to the scene
scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

scene.add(map);

// run three js animation
animate();
