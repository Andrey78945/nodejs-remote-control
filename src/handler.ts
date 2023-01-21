import { WebSocket } from 'ws';
import { Command } from './types.js';
import { mouse, left, right, up, down, Point } from '@nut-tree/nut-js';

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
        console.log(point.x, point.y);
        ws.send(`${Command.MOUSE_POSITION}_${point.x},${point.y}`);
      })();
      break;
  }
};
