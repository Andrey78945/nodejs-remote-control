import { Point, left, right, up, down, mouse, Button } from '@nut-tree/nut-js';
import { ROUND_PARTS } from './types.js';

export const drawSquare = async (point: Point, side: number): Promise<void> => {
  return drawRectangle(point, side, side);
};

export const drawRectangle = async (point: Point, width: number, hight: number): Promise<void> => {
  (async () => {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(down(hight));
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(left(width));
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
    await mouse.move(up(hight));
    await mouse.releaseButton(Button.LEFT);
  })();
};

export const drawCircle = async (point: Point, radius: number): Promise<void> => {
  (async () => {
    await mouse.pressButton(Button.LEFT);
    let x = point.x;
    let y = point.y;
    for (let i = 1; i <= ROUND_PARTS; i++) {
      const degree = (Math.PI / (ROUND_PARTS * 2)) * i;
      const x1 = x - (radius - Math.cos(degree) * radius);
      const y1 = y + Math.sin(degree) * radius;
      await mouse.setPosition(new Point(x1, y1));
    }
    for (let i = 1; i <= ROUND_PARTS; i++) {
      const degree = (Math.PI / (ROUND_PARTS * 2)) * i;
      const x1 = x - radius - Math.sin(degree) * radius;
      const y1 = y + Math.cos(degree) * radius;
      await mouse.setPosition(new Point(x1, y1));
    }
    for (let i = 1; i <= ROUND_PARTS; i++) {
      const degree = (Math.PI / (ROUND_PARTS * 2)) * i;
      const x1 = x - radius - Math.cos(degree) * radius;
      const y1 = y - Math.sin(degree) * radius;
      await mouse.setPosition(new Point(x1, y1));
    }
    for (let i = 1; i <= ROUND_PARTS; i++) {
      const degree = (Math.PI / (ROUND_PARTS * 2)) * i;
      const x1 = x - radius + Math.sin(degree) * radius;
      const y1 = y - Math.cos(degree) * radius;
      await mouse.setPosition(new Point(x1, y1));
    }
    await mouse.releaseButton(Button.LEFT);
  })();
};
