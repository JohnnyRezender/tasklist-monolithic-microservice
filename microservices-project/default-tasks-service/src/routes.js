import express from 'express';

import DefaultTasksController from '../controllers/DefaultTasksController';

const routes = express.Router();

const defaultTasksController = new DefaultTasksController();

routes.get('/defaultTasks',defaultTasksController.index);

routes.post('/events', (req, res) => {
    console.log("Evento recebido: ", req.body.type)

    res.send({});
});

export default routes;
