import { Renderer, PerspectiveCamera, Vector2, Raycaster, Mesh, Camera, Object3D, Intersection } from 'three';

// utils.ts

/**
 * Generate a random number between 0 and max
 * @param max - max number to be generated
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
export const getRandomNum = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};


// ====================================
//         User Interactions
// ====================================

// taken from https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_voxelpainter.html

/**
 * Adjust camera and render output when window is resized
 * @param camera - view to be resized
 * @param renderer - output to be re-rendered
 */
export const onWindowResize = (camera: PerspectiveCamera, renderer: Renderer): void => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

/**
 * Changes position of the hover object when moving the mouse
 * @param event - mouse move event
 * @param mouse - x + y coordinates of the mouse
 * @param raycaster - difference between mouse and camera
 * @param hoverMesh - mesh to be rendered at location
 * @param camera - view of scene
 * @param objects - objects to be collided
 */
export const onMouseMove = (event: MouseEvent, mouse: Vector2, raycaster: Raycaster, hoverMesh: Mesh, camera: Camera, objects: Object3D[]): void => {
  event.preventDefault();

  mouse.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    const intersect = intersects[0];

    hoverMesh.position.copy(intersect.point).add(intersect.face!.normal);
    hoverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
  }
};

export const onMouseClick = (event: MouseEvent, mouse: Vector2, raycaster: Raycaster, camera: Camera, objects: Object3D[]): Intersection | undefined => {
  event.preventDefault();

  mouse.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    const intersect = intersects[0];

    return intersect;
  }
};