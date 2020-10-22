// import 'dotenv/config';
import express from "express";
import routes  from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(4002, () =>{
    console.log("Serviço: Query-service rodando na porta 4002");
});
