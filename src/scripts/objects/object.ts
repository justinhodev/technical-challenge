// object.ts

import { Mesh } from 'three';

export interface MeshObject {
  /** Object geometry */
  mesh: Mesh;
  /** Applies transformations to the mesh */
  animate(): any;
}
