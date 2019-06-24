// lighting.ts

import { AmbientLight, Object3D, PointLight, DirectionalLight } from 'three';

// add lighting source to the scene
// 3 point lighting setup
const keyLight = new PointLight(0xffffff, 40);
const fillLight = new PointLight(0xffffff, 30);
const backLight = new DirectionalLight(0xffffff, 10);

// TODO (justin) - get rid of magic numbers, set positions programmaticaly?
// put lights relative to center of scene
keyLight.position.set(-20, 20, 40);
fillLight.position.set(10, 20, 28);
backLight.position.set(-5, 50, -30);

// lights from three js voxel painter example
// see https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_voxelpainter.html
const mainLight = new AmbientLight(0x606060);
const sunLight = new DirectionalLight(0xffffff);
sunLight.position.set(1, 0.75, 0.5).normalize();

const lights: Object3D[] = [mainLight, sunLight];

export { lights };
