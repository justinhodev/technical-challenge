// renderer.ts
import { OrthographicCamera, Scene, WebGLRenderer, Color, PerspectiveCamera } from 'three';

// isometric camera options
// adapted from https://codepen.io/puritanner/pen/LbgMwo
const aspect = window.innerWidth / window.innerHeight;
// const depth = 60;
const fov = 45;
const nearClipping = 1;
const farClipping = 10000;

const scene = new Scene();
const camera = new PerspectiveCamera(
  fov,
  aspect,
  nearClipping,
  farClipping
);
// const camera = new OrthographicCamera(
//   -depth * aspect,
//   depth * aspect,
//   depth,
//   -depth,
//   nearClipping,
//   farClipping
// );

// camera.position.set(100, 100, 100); // leveled FOV for iso
camera.position.set(500, 800, 1300);
camera.lookAt(0, 0, 0); // origin of the scene
scene.add(camera);
scene.background = new Color(0xf0f0f0);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

export { camera, scene, renderer };
