// import 'dotenv/config';
import express from "express";
import routes  from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3001, () =>{
    console.log("Serviço: default-tasks-service rodando na porta 3001");
});
