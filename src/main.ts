// main.ts
import { camera, scene, renderer } from "./renderer";
import { cube } from './objects';
import { PointLight } from 'three';

document.body.appendChild(renderer.domElement);

/**
 * Renders objects within the canvas
 */
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// add mesh object to the scene
cube.position.x = -2;
cube.position.z = -5;
scene.add(cube);

// add light source to the scene
const light = new PointLight(0xFFFFFF);
light.position.x = 0;
light.position.y = 10;
light.position.z = 0;
scene.add(light);

animate();
