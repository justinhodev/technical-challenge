// renderer.ts
import { OrthographicCamera, Scene, WebGLRenderer } from "three";

// isometric camera options
// adapted from https://codepen.io/puritanner/pen/LbgMwo
const aspect = window.innerWidth / window.innerHeight;
const depth = 60;
const nearClipping = 1;
const farClipping = 2000;

const scene = new Scene();
const camera = new OrthographicCamera(
  -depth * aspect,
  depth * aspect,
  depth,
  -depth,
  nearClipping,
  farClipping
);

camera.position.set(100, 100, 100); // leveled FOV for iso
camera.lookAt(scene.position); // origin of the scene
scene.add(camera);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

export { camera, scene, renderer };
