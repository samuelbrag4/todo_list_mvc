import express from 'express';
import { config } from "dotenv";
import tarefaRouter from './routes/tarefaRouter.js';

config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/tarefas', tarefaRouter);

app.listen(port, () => {
    console.log(`💣 Tá Rodando fi!!! Na porta ${port} 💣`);
});