// map.ts
import { MeshBasicMaterial, PlaneBufferGeometry, Mesh } from 'three';

// grid layout for map
// adopted from http://jsfiddle.net/q3m2kh5q/
const mapGeometry = new PlaneBufferGeometry(100, 100, 10, 10);
const mapMaterial = new MeshBasicMaterial({ wireframe: true, opacity: 0.5, transparent: true });
const map = new Mesh(mapGeometry, mapMaterial);

map.rotation.order = 'YXZ';
map.rotation.y = -Math.PI / 2;
map.rotation.x = -Math.PI / 2;

export { map };