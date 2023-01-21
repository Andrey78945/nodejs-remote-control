import { WebSocket } from 'ws';
import { Command } from './types.js';
import { mouse, left, right, up, down, Point } from '@nut-tree/nut-js';
import { drawCircle, drawRectangle, drawSquare } from './render.js';

export const handleCommands = (cmdFromServer: string, ws: WebSocket): void => {
  const input = cmdFromServer.split(' ');
  switch (input[0]) {
    case Command.MOUSE_DOWN:
      (async () => {
        await mouse.move(down(Number(input[1])));
        ws.send(input.join('_'));
      })();
      break;
    case Command.MOUSE_UP:
      (async () => {
        await mouse.move(up(Number(input[1])));
        ws.send(input.join('_'));
      })();
      break;
    case Command.MOUSE_LEFT:
      (async () => {
        await mouse.move(left(Number(input[1])));
        ws.send(input.join('_'));
      })();
      break;
    case Command.MOUSE_RIGHT:
      (async () => {
        await mouse.move(right(Number(input[1])));
        ws.send(input.join('_'));
      })();
      break;
    case Command.MOUSE_POSITION:
      (async () => {
        const point: Point = await mouse.getPosition();
        ws.send(`${Command.MOUSE_POSITION}_${point.x},${point.y}`);
      })();
      break;
    case Command.DRAW_SQUARE:
      const side: number = +input[1];
      (async () => {
        const point: Point = await mouse.getPosition();
        await drawSquare(point, side);
        ws.send(`${Command.DRAW_SQUARE}_${side}`);
      })();
      break;
    case Command.DRAW_RECTANGLE:
      const width: number = +input[1];
      const hight: number = +input[2];
      (async () => {
        const point: Point = await mouse.getPosition();
        await drawRectangle(point, width, hight);
        ws.send(`${Command.DRAW_SQUARE}_${width}_${hight}`);
      })();
      break;
    case Command.DRAW_CIRCLE:
      const radius: number = +input[1];
      (async () => {
        const point: Point = await mouse.getPosition();
        await drawCircle(point, radius);
        ws.send(`${Command.DRAW_CIRCLE}_${radius}`);
      })();
      break;
  }
};
