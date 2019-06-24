// map.ts
import {
  MeshBasicMaterial,
  PlaneBufferGeometry,
  Mesh,
  DoubleSide,
  GridHelper
} from 'three';
import { getRandomNum } from '../utils';

// grid layout for map
// adopted from http://jsfiddle.net/q3m2kh5q/
const mapGeometry = new PlaneBufferGeometry(1000, 1000, 10);
const mapMaterial = new MeshBasicMaterial({
  color: 'lightgreen',
  opacity: 0.85,
  transparent: true,
  wireframe: true
});
const map = new Mesh(mapGeometry, mapMaterial);

map.rotation.order = 'YXZ';
map.rotation.y = -Math.PI / 2;
map.rotation.x = -Math.PI / 2;

// ============================================
//              self made grid
// ============================================

// attempt to make grid using individual planes
// grid settings
const tileWidth: number = 10;
const tileLength: number = 10;
const gridRow: number = 100;
const gridCol: number = 100;

const gridGeometry = new PlaneBufferGeometry(tileWidth, tileLength, 1, 1);
const gridMaterial = new MeshBasicMaterial({ side: DoubleSide });

const grid: Mesh[] = [];

// populate grid
for (let col = -gridCol / 2; col < gridCol / 2; col = col + 1) {
  for (let row = -gridRow / 2; row < gridRow / 2; row = row + 1) {
    // TODO (justin) use seeded random generation
    // add pseudo random coloring
    if (getRandomNum(3) < 1) {
      gridMaterial.color.set(0x00aa00);
    } else if (getRandomNum(3) > 1) {
      gridMaterial.color.set(0x00ff00);
    } else {
      gridMaterial.color.set(0x654321);
    }

    const tile = new Mesh(gridGeometry, gridMaterial);
    tile.position.set(col * tileWidth, 0, row * tileLength);
    // rotate to face upwards
    tile.rotation.order = 'YXZ';
    tile.rotation.y = -Math.PI / 2;
    tile.rotation.x = -Math.PI / 2;
    grid.push(tile);
  }
}

export { grid, map };
