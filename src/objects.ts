// objects.ts
import {
  BoxGeometry,
  Mesh,
  MeshLambertMaterial,
  BoxBufferGeometry,
  MeshBasicMaterial,
  Object3D
} from 'three';

// shape of cube
const cubeGeometry = new BoxGeometry(6, 6, 6);
// red mat
const cubeMaterial = new MeshLambertMaterial({ color: 0xff0000 });
// generate new shape
const cubeMesh = new Mesh(cubeGeometry, cubeMaterial);

// placement outline
// adapted from https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_voxelpainter.html
const hoverGeometry = new BoxBufferGeometry(25, 25, 25);
const hoverMaterial = new MeshBasicMaterial({
  color: 0x444444,
  opacity: 0.5,
  transparent: true
});
const hoverMesh = new Mesh(hoverGeometry, hoverMaterial);

interface MeshObject {
  /** Object geometry */
  mesh: Mesh;
  /** Applies transformations to the mesh */
  animate(): any;
}

// export as custom object to handle both meshes and animating them
const objects: MeshObject[] = [
  {
    mesh: cubeMesh,
    animate() {
      // make cube rotate on its axis
      // taken from threejs get started tutorial
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.01;
      this.mesh.rotation.z += 0.01;
    }
  },
  {
    mesh: hoverMesh,
    animate() {
      return;
    }
  }
];

export { objects };
