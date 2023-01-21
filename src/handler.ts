import { Command } from './types.js';
import { mouse, left, right, up, down } from '@nut-tree/nut-js';

export const handleCommands = (cmdFromServer: string): void => {
  const input = cmdFromServer.split(' ');
  switch (input[0]) {
    case Command.MOUSE_DOWN:
      (async () => {
        await mouse.move(down(Number(input[1])));
      })();
      break;
    case Command.MOUSE_UP:
      (async () => {
        await mouse.move(up(Number(input[1])));
      })();
      break;
    case Command.MOUSE_LEFT:
      (async () => {
        await mouse.move(left(Number(input[1])));
      })();
      break;
    case Command.MOUSE_RIGHT:
      (async () => {
        await mouse.move(right(Number(input[1])));
      })();
      break;
  }
};
