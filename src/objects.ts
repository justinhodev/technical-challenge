// objects.ts
import { BoxGeometry, Mesh, MeshPhongMaterial } from 'three';

// shape of cube
const cubeGeometry = new BoxGeometry(6, 6, 6);
// red Phong
const cubeMaterial = new MeshPhongMaterial({ color: 0xff0000 });
// generate new shape
const cube = new Mesh(cubeGeometry, cubeMaterial);

export { cube };
