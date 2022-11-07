import express from 'express';
import cors from 'cors';
import { config } from './config/config';
import connectToDb from './utils/connecToDB';

const app = express();

app.use(connectToDb);

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json());

app.listen(config.server, () => {
  console.log(`Server started on http://localhost:${config.server.port}`);
  connectToDb();
})