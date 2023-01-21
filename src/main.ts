import { httpServer } from './http_server/index.js';
import { mouse } from '@nut-tree/nut-js';
import { PORT, wss } from './socket_server/index.js';
import { handleCommands } from './handler.js';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wss.on('connection', function connection(ws) {
  let mes = '';
  ws.on('message', function message(data) {
    mes = String(data);
    console.log(mes);
    ws.send(mes.split(' ').join('_'));
    handleCommands(mes);
  });
});
console.log(`Start websoket server on the ${PORT} port!`);

wss.on('close', () => wss.close()); //???
