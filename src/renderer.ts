// renderer.ts
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const width = window.innerWidth;
const height = window.innerHeight;
const viewAngle = 45;
const nearClipping = 0.1;
const farClipping = 999;

const scene = new Scene();
const camera = new PerspectiveCamera(
  viewAngle,
  width / height,
  nearClipping,
  farClipping
);

const renderer = new WebGLRenderer();

renderer.setSize(width, height);

export { camera, scene, renderer };
