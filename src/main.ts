// main.ts
import { camera, scene, renderer } from "./renderer";
import { cube } from './objects';
import { DirectionalLight, PointLight } from 'three';

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
const light1 = new DirectionalLight(0xFFFFFF, 0.3);
const light2 = new DirectionalLight(0xFFFFFF, 0.3);
const light3 = new DirectionalLight(0xFFFFFF, 0.3);

const light4 = new PointLight(0xFFFFFF);

light1.position.set(0, 10, 0);
light2.position.set(10, 0, 0);
light3.position.set(0, 0, 10);

light4.position.set(0, 25, 100);

scene.add(light1);
scene.add(light2);
scene.add(light3);

scene.add(light4);

animate();
