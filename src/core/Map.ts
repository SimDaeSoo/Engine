import { BLOCK_TYPES, BLOCK_TYPE_VALUES, TILE_TYPE_BYTES } from '../constants';
import { isSharedArrayBufferSupport } from '../utils';

class Map {
  private id: number;
  private threadQuantity: number;
  private _tileBufferGrid?: Array<Array<ArrayBuffer | SharedArrayBuffer>>;
  private _tileRgbaView?: Array<Array<Uint8Array>>;
  private _tileValueView?: Array<Array<Uint32Array>>;

  private _width?: number;
  private _height?: number;
  private _totalWidth?: number;
  private _totalHeight?: number;
  private _splitQuantity?: number;
  private _x?: number;
  private _y?: number;
  private _lookupX?: Array<number>;
  private _lookupY?: Array<number>;

  constructor(id: number, threadQuantity: number) {
    this.id = id;
    this.threadQuantity = threadQuantity;
  }

  public update(): void {
    // this.simulator.next();
    let x;
    let y;
    let value;
    let type;
    let isLiquid;
    let isMovable;

    for (let i = this.totalWidth * this.totalHeight - 1 - this.id; i >= 0; i -= this.threadQuantity) {
      x = i % this.totalWidth;
      y = Math.floor(i / this.totalWidth);
      value = this.getTileValue(x, y);
      type = this.lookupTileType(value);
      isMovable = type !== BLOCK_TYPES.EMPTY && type !== BLOCK_TYPES.STONE;
      isLiquid = type === BLOCK_TYPES.WATER || type === BLOCK_TYPES.LAVA || type === BLOCK_TYPES.ACID;

      if (!isMovable) continue;

      if (y + 1 < this.totalHeight && this.lookupTileType(this.getTileValue(x, y + 1)) === BLOCK_TYPES.EMPTY) {
        this.setTileValue(x, y, 0);
        this.setTileValue(x, y + 1, value);
        continue;
      }

      if (y + 1 < this.totalHeight && x + 1 < this.totalWidth && this.lookupTileType(this.getTileValue(x + 1, y + 1)) === BLOCK_TYPES.EMPTY) {
        this.setTileValue(x, y, 0);
        this.setTileValue(x + 1, y + 1, value);
        continue;
      }

      if (y + 1 < this.totalHeight && x - 1 >= 0 && this.lookupTileType(this.getTileValue(x - 1, y + 1)) === BLOCK_TYPES.EMPTY) {
        this.setTileValue(x, y, 0);
        this.setTileValue(x - 1, y + 1, value);
        continue;
      }

      if (x + 1 < this.totalWidth && isLiquid && this.lookupTileType(this.getTileValue(x + 1, y)) === BLOCK_TYPES.EMPTY) {
        this.setTileValue(x, y, 0);
        this.setTileValue(x + 1, y, value);
        continue;
      }

      if (x - 1 >= 0 && isLiquid && this.lookupTileType(this.getTileValue(x - 1, y)) === BLOCK_TYPES.EMPTY) {
        this.setTileValue(x, y, 0);
        this.setTileValue(x - 1, y, value);
        continue;
      }
    }
  }

  public clear(id: number, threadQuantity: number): void {
    for (let i = id; i < this.totalWidth * this.totalHeight; i += threadQuantity) {
      const x = i % this.totalWidth;
      const y = Math.floor(i / this.totalWidth);

      this.setTileValue(x, y, 0);
    }
  }

  public create(x: number, y: number, width: number, height: number, splitQuantity: number = 1): void {
    this._tileBufferGrid = [];
    this._tileRgbaView = [];
    this._tileValueView = [];
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._totalWidth = width * splitQuantity;
    this._totalHeight = height * splitQuantity;
    this._splitQuantity = splitQuantity;
    this._lookupX = new Array(this.totalWidth);
    this._lookupY = new Array(this.totalHeight);

    const sharedArrayBufferSupported = isSharedArrayBufferSupport();
    for (let y = 0; y < this.splitQuantity; y++) {
      this._tileBufferGrid.push([]);
      this._tileRgbaView.push([]);
      this._tileValueView.push([]);

      for (let x = 0; x < this.splitQuantity; x++) {
        if (!sharedArrayBufferSupported) {
          this._tileBufferGrid[y].push(new ArrayBuffer(width * height * TILE_TYPE_BYTES));
        } else {
          this._tileBufferGrid[y].push(new SharedArrayBuffer(width * height * TILE_TYPE_BYTES));
        }
        this._tileRgbaView[y].push(new Uint8Array(this.tileBufferGrid[y][x]));
        this._tileValueView[y].push(new Uint32Array(this.tileBufferGrid[y][x]));
        for (let offsetX = 0; offsetX < width; offsetX++) {
          this._lookupX[x * width + offsetX] = x;
        }
      }

      for (let offsetY = 0; offsetY < height; offsetY++) {
        this._lookupY[y * height + offsetY] = y;
      }
    }
  }

  public import(data: {
    tileBufferGrid: Array<Array<ArrayBuffer | SharedArrayBuffer>>;
    x: number;
    y: number;
    width: number;
    height: number;
    splitQuantity: number;
  }): void {
    const { tileBufferGrid, x, y, width, height, splitQuantity } = data;

    this._tileBufferGrid = tileBufferGrid;
    this._tileRgbaView = [];
    this._tileValueView = [];
    this._width = width;
    this._height = height;
    this._totalWidth = width * splitQuantity;
    this._totalHeight = height * splitQuantity;
    this._splitQuantity = splitQuantity;
    this._x = x;
    this._y = y;
    this._lookupX = new Array(this.totalWidth);
    this._lookupY = new Array(this.totalHeight);

    for (let y = 0; y < this.splitQuantity; y++) {
      this._tileRgbaView.push([]);
      this._tileValueView.push([]);

      for (let x = 0; x < this.splitQuantity; x++) {
        this._tileRgbaView[y].push(new Uint8Array(this.tileBufferGrid[y][x]));
        this._tileValueView[y].push(new Uint32Array(this.tileBufferGrid[y][x]));
        for (let offsetX = 0; offsetX < width; offsetX++) {
          this._lookupX[x * width + offsetX] = x;
        }
      }
      for (let offsetY = 0; offsetY < height; offsetY++) {
        this._lookupY[y * height + offsetY] = y;
      }
    }
  }

  public export(): {
    tileBufferGrid: Array<Array<ArrayBuffer | SharedArrayBuffer>>;
    x: number;
    y: number;
    width: number;
    height: number;
    splitQuantity: number;
  } {
    return {
      tileBufferGrid: this.tileBufferGrid,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      splitQuantity: this.splitQuantity,
    };
  }

  private get tileBufferGrid(): Array<Array<ArrayBuffer | SharedArrayBuffer>> {
    if (!this._tileBufferGrid) throw new Error('map tilerBuffer undefined');
    return this._tileBufferGrid;
  }

  public get x(): number {
    if (this._x === undefined) throw new Error('map position x undefined');
    return this._x;
  }

  public get y(): number {
    if (this._y === undefined) throw new Error('map position y undefined');
    return this._y;
  }

  public get lookupX(): Array<number> {
    if (this._lookupX === undefined) throw new Error('map lookup x undefined');
    return this._lookupX;
  }

  public get lookupY(): Array<number> {
    if (this._lookupY === undefined) throw new Error('map lookup y undefined');
    return this._lookupY;
  }

  public get width(): number {
    if (!this._width) throw new Error('map width undefined');
    return this._width;
  }

  public get height(): number {
    if (!this._height) throw new Error('map height undefined');
    return this._height;
  }

  public get totalWidth(): number {
    if (!this._totalWidth) throw new Error('map width undefined');
    return this._totalWidth;
  }

  public get totalHeight(): number {
    if (!this._totalHeight) throw new Error('map height undefined');
    return this._totalHeight;
  }

  public get splitQuantity(): number {
    if (!this._splitQuantity) throw new Error('map split quantity undefined');
    return this._splitQuantity;
  }

  public get tileRgbaView(): Array<Array<Uint8Array>> {
    if (!this._tileRgbaView) throw new Error('map tile properties undefined');
    return this._tileRgbaView;
  }

  public get tileValueView(): Array<Array<Uint32Array>> {
    if (!this._tileValueView) throw new Error('map tile types undefined');
    return this._tileValueView;
  }

  private set tileBufferGrid(bufferGrid: Array<Array<ArrayBuffer | SharedArrayBuffer>>) {
    this._tileBufferGrid = bufferGrid;
  }

  public set x(x: number) {
    this._x = x;
  }

  public set y(y: number) {
    this._y = y;
  }

  public set width(width: number) {
    this._width = width;
  }

  public set height(height: number) {
    this._height = height;
  }

  public set totalWidth(totalWidth: number) {
    this._totalWidth = totalWidth;
  }

  public set totalHeight(totalHeight: number) {
    this._totalHeight = totalHeight;
  }

  public set splitQuantity(splitQuantity: number) {
    this._splitQuantity = splitQuantity;
  }

  public set tileRgbaView(tileRgbaView: Array<Array<Uint8Array>>) {
    this._tileRgbaView = tileRgbaView;
  }

  public set tileValueView(tileValueView: Array<Array<Uint32Array>>) {
    this._tileValueView = tileValueView;
  }

  public lookupTileType(value: number): BLOCK_TYPES {
    if ((value & BLOCK_TYPE_VALUES.EMPTY) === 0) return BLOCK_TYPES.EMPTY;
    if ((value & BLOCK_TYPE_VALUES.DIRT) === BLOCK_TYPE_VALUES.DIRT) return BLOCK_TYPES.DIRT;
    if ((value & BLOCK_TYPE_VALUES.SAND) === BLOCK_TYPE_VALUES.SAND) return BLOCK_TYPES.SAND;
    if ((value & BLOCK_TYPE_VALUES.WATER) === BLOCK_TYPE_VALUES.WATER) return BLOCK_TYPES.WATER;
    if ((value & BLOCK_TYPE_VALUES.LAVA) === BLOCK_TYPE_VALUES.LAVA) return BLOCK_TYPES.LAVA;
    if ((value & BLOCK_TYPE_VALUES.STONE) === BLOCK_TYPE_VALUES.STONE) return BLOCK_TYPES.STONE;
    if ((value & BLOCK_TYPE_VALUES.ACID) === BLOCK_TYPE_VALUES.ACID) return BLOCK_TYPES.ACID;

    throw new Error(
      `undefined tile type ${value} / 0b${value
        .toString(2)
        .padStart(32, '0')
        .split('')
        .map((v, i) => (i < 8 ? 0 : v))
        .join('')}`
    );
  }

  public getTileValue(x: number, y: number): number {
    return this.tileValueView[this.lookupY[y]][this.lookupX[x]][(y % this.height) * this.width + (x % this.width)];
  }

  public setTileValue(x: number, y: number, value: number): void {
    this.tileValueView[this.lookupY[y]][this.lookupX[x]][(y % this.height) * this.width + (x % this.width)] = value;
  }

  public getTileRgba(x: number, y: number): [number, number, number, number] {
    const index = ((y % this.height) * this.width + (x % this.width)) * TILE_TYPE_BYTES;
    return [
      this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 0],
      this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 1],
      this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 2],
      this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 3],
    ];
  }

  public setTileRgba(x: number, y: number, r: number, g: number, b: number, a: number): void {
    const index = ((y % this.height) * this.width + (x % this.width)) * TILE_TYPE_BYTES;
    this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 0] = r;
    this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 1] = g;
    this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 2] = b;
    this.tileRgbaView[this.lookupY[y]][this.lookupX[x]][index + 3] = a;
  }
}

export default Map;
