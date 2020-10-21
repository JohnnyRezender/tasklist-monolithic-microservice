import 'dotenv/config';
import express from "express";
import routes  from './routes';
import Queue from '../lib/queue';
import BullBoard from 'bull-board';


const app = express();

app.use(express.json());

app.use(routes);

app.listen(3003, () =>{
    console.log("Serviço: task-reminder-service rodando na porta 3003");
});

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));
app.use('/admin/queues', BullBoard.UI);
Queue.process();
