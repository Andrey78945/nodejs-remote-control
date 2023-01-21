import { WebSocketServer } from 'ws';
import 'dotenv/config';

export const PORT = Number(process.env.PORT) || 8080;

export const wss = new WebSocketServer({ port: PORT });
