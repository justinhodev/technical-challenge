// player.ts
import { FirstPersonControls } from '../node_modules/three/examples/jsm/controls/FirstPersonControls';
import { camera } from './renderer';

// adapted from https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_minecraft.html
const playerController = new FirstPersonControls(camera);

playerController.movementSpeed = 200;
playerController.lookSpeed = 0.05;
playerController.lookVertical = true;
playerController.constrainVertical = true;

export { playerController };