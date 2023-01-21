import { Point, left, right, up, down, mouse, Button } from '@nut-tree/nut-js';

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
