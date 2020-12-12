// import 'dotenv/config';
import express from "express";
import routes  from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () =>{
    console.log("ola");
    console.log("Serviço: Task-schedule-service rodando na porta 3000");
});
