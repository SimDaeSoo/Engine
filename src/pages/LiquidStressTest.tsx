import * as PIXI from 'pixi.js';
import { useEffect } from 'react';
import { setRenderer, setUpdater } from '../utils';
import { createLabel } from '../utils/Label';
import * as Map from '../utils/Map';
import * as LiquidSimulator from '../utils/LiquidSimulator';
import { getTileNumber, getWaterTileNumber } from '../utils/Tile';
import { TileProperties } from '../interfaces';

const onTouch = (e: any) => {
  const [x, y] = [
    Math.floor(e.targetTouches[0].clientX / 8),
    Math.floor(e.targetTouches[0].clientY / 8),
  ];
  spreadWater(x, y);
};

const onClick = (e: any) => {
  const [x, y] = [Math.floor(e.clientX / 8), Math.floor(e.clientY / 8)];
  spreadWater(x, y);
};

let callback: (x: number, y: number) => void;
const spreadWater = (x: number, y: number): void => {
  if (callback) callback(x, y);
};

const LiquidStressTest = () => {
  useEffect(() => {
    // Buffer Tile Map Generate
    const width = Math.ceil(window.innerWidth / 8);
    const height = Math.ceil(window.innerHeight / 8);
    const tileBufferGrids: Array<Array<ArrayBuffer>> = Map.create(
      width,
      height,
      {
        splitSize: 0,
        density: {
          block: 0,
          liquid: 1,
        },
      }
    );
    const tileGrid: Array<Array<[Uint8Array, Float64Array]>> =
      Map.merge(tileBufferGrids);
    const tileGridProperties: Array<Array<TileProperties>> =
      Map.createTileGridProperties(width, height);

    // Event Listener
    window.removeEventListener('touchstart', onTouch);
    window.removeEventListener('click', onClick);
    window.addEventListener('touchstart', onTouch);
    window.addEventListener('click', onClick);
    callback = (x, y) => {
      for (let offsetY = -5; offsetY <= 5; offsetY++) {
        for (let offsetX = -5; offsetX <= 5; offsetX++) {
          if (
            x + offsetX >= 0 &&
            x + offsetX < width &&
            y + offsetY >= 0 &&
            y + offsetY < height &&
            !tileGrid[y + offsetY][x + offsetX][0][0]
          ) {
            tileGrid[y + offsetY][x + offsetX][1][0] += 1;
          }
        }
      }
    };

    // Rendering
    const app: PIXI.Application = setRenderer();
    const { container: labelContainer } = createLabel('Click to create water');
    labelContainer.x = Math.round(
      window.innerWidth / 2 - labelContainer.width / 2
    );
    labelContainer.y = 60;

    const backgroundContainer = new PIXI.Container();
    const tileContainer = new PIXI.Container();
    const waterContainer = new PIXI.Container();
    const tileSprites: Array<Array<PIXI.Sprite>> = new Array(height)
      .fill(true)
      .map(() => new Array(width));

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (tileGrid[y][x][0][0]) {
          const sprite = new PIXI.Sprite(
            PIXI.Texture.from(
              `tiles/Tile_${getTileNumber(x, y, tileGrid)
                .toString()
                .padStart(2, '0')}.png`
            )
          );
          sprite.width = 8;
          sprite.height = 8;
          sprite.x = x * 8;
          sprite.y = y * 8;
          tileSprites[y][x] = sprite;
          tileContainer.addChild(sprite);
        } else {
          const waterTileNumber = getWaterTileNumber(x, y, tileGrid);
          const waterSprite = new PIXI.Sprite(
            waterTileNumber >= 0
              ? PIXI.Texture.from(
                  `waters/${waterTileNumber.toString().padStart(2, '0')}.png`
                )
              : PIXI.Texture.EMPTY
          );
          waterSprite.width = 8;
          waterSprite.height = 8;
          waterSprite.x = x * 8;
          waterSprite.y = y * 8;
          tileSprites[y][x] = waterSprite;
          waterContainer.addChild(waterSprite);

          const sprite = new PIXI.Sprite(
            PIXI.Texture.from(`tiles/Tile_61.png`)
          );
          sprite.width = 8;
          sprite.height = 8;
          sprite.x = x * 8;
          sprite.y = y * 8;
          backgroundContainer.addChild(sprite);
        }
      }
    }

    app.stage.addChild(backgroundContainer);
    app.stage.addChild(tileContainer);
    app.stage.addChild(waterContainer);
    app.stage.addChild(labelContainer);

    backgroundContainer.cacheAsBitmap = true;
    tileContainer.cacheAsBitmap = true;

    // Update Logic
    const step = LiquidSimulator.stepGenerator(tileGrid, tileGridProperties);

    setUpdater(() => {
      step.next();

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (!tileGrid[y][x][0][0]) {
            const waterTileNumber = getWaterTileNumber(x, y, tileGrid);
            tileSprites[y][x].texture =
              tileGrid[y][x][1][0] && waterTileNumber >= 0
                ? PIXI.Texture.from(
                    `waters/${waterTileNumber.toString().padStart(2, '0')}.png`
                  )
                : PIXI.Texture.EMPTY;
            tileSprites[y][x].alpha = Math.min(
              0.3 + tileGrid[y][x][1][0] * 0.15,
              0.8
            );
          }
        }
      }
    });
  }, []);

  return <></>;
};

export default LiquidStressTest;
