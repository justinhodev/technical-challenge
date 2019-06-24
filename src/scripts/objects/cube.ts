import { MeshObject } from './object';
import { BoxGeometry, MeshLambertMaterial, Mesh } from 'three';

// shape of cube
const cubeGeometry = new BoxGeometry(50, 50, 50);
// red mat
const cubeMaterial = new MeshLambertMaterial({ color: 0xff0000 });
// generate new shape
const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);

export const cube: MeshObject = {
  mesh: cubeMesh,
  animate() {
    // make cube rotate on its axis
    // taken from threejs get started tutorial
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.01;
    // this.mesh.rotation.z += 0.01;
    return;
  }
};