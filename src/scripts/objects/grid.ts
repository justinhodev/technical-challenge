import { GridHelper, Raycaster, Vector2, PlaneBufferGeometry, MeshBasicMaterial, Mesh, Object3D } from 'three';

const gridHelper = new GridHelper(1000, 20);

const raycaster = new Raycaster();
const mouse = new Vector2();

const geometry = new PlaneBufferGeometry(1000, 1000);
geometry.rotateX(-Math.PI / 2);

const material = new MeshBasicMaterial({ visible: false });

const plane = new Mesh(geometry, material);

export { gridHelper, raycaster, mouse, plane };