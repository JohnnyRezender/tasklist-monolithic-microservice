import express from 'express';

import TasksController from '../controllers/TasksController';

const routes = express.Router();

const tasksController = new TasksController();

routes.put('/tasksSchedule', tasksController.create);

routes.post('/events', (req, res) => {
    console.log("Evento recebido: ", req.body.type)

    res.send({});
});

export default routes;
