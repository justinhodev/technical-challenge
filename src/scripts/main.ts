// main.ts
import { camera, scene, renderer } from './scene/renderer';
import { cube, hover } from './objects/index';
import { lights } from './scene/lighting';
import { gridHelper, raycaster, mouse, plane } from './objects/grid';
import { Object3D, Mesh, BoxGeometry, MeshLambertMaterial } from 'three';
import { onMouseClick, onMouseMove, onWindowResize } from './utils';
import { colors } from './colors';

document.body.appendChild(renderer.domElement);

/**
 * Renders objects within the canvas
 */
const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

// add mesh objects to the scene
scene.add(hover.mesh);

// add all lights
scene.add(...lights);

// create background / ground
scene.add(gridHelper);
scene.add(plane);

// ====================================
//        Interactions
// ====================================

const objectArray: Object3D[] = []; // objects which the mouse can collide with
objectArray.push(plane);
const hoverMesh = hover.mesh; // changeable hover object

let currentColor = 0; // color of the object

// move shape outline along with mouse position
document.addEventListener('mousemove', (event) => {
  onMouseMove(event, mouse, raycaster, hoverMesh, camera, objectArray);
});

// change object when mouse press
document.addEventListener('mousedown', (event) => {
  const intersect = onMouseClick(event, mouse, raycaster, camera, objectArray);
  if (intersect !== undefined) {
    const newMesh = new Mesh(new BoxGeometry(50, 50, 50), new MeshLambertMaterial({ color: colors[currentColor] }));
    newMesh.position.copy(intersect.point).add(intersect.face!.normal);
    newMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
    scene.add(newMesh);
    objectArray.push(newMesh);
  }
});

// change output color when tab is pressed
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 9) { // tab
    if (currentColor < colors.length - 1) {
      currentColor = currentColor + 1;
    } else {
      currentColor = 0;
    }
  }
});

// change camera view and re-render on window resize
window.addEventListener('resize', () => {
  onWindowResize(camera, renderer);
});

// run three js animation
animate();
