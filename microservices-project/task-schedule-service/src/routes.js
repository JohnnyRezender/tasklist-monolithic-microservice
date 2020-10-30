import express from 'express';

import TaskSchedulerController from '../controllers/TaskSchedulerController';

const routes = express.Router();

const taskSchedulerController = new TaskSchedulerController();

routes.get('/tasks',taskSchedulerController.index);

routes.post('/tasks',taskSchedulerController.create);

routes.delete('/tasks',taskSchedulerController.remove);

routes.put('/tasks/:ID_TASK_TAS', taskSchedulerController.update);


routes.post('/events', (req, res) => {
    console.log("Evento recebido: ", req.body.type)

    res.send({});
});

export default routes;
