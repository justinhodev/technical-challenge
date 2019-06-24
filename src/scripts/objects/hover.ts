import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from 'three';
import { MeshObject } from './object';

// placement outline
// adapted from https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_voxelpainter.html
const hoverGeometry = new BoxBufferGeometry(50, 50, 50);
const hoverMaterial = new MeshBasicMaterial({
  color: 0x444444,
  opacity: 0.5,
  transparent: true
});

const hoverMesh = new Mesh(hoverGeometry, hoverMaterial);

export const hover: MeshObject = {
  mesh: hoverMesh,
  animate() {
    return;
  }
};
