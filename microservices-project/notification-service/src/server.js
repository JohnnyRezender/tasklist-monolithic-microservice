// import 'dotenv/config';
import express from "express";
import routes  from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3002, () =>{
    console.log("Serviço: notification-service rodando na porta 3002");
});
