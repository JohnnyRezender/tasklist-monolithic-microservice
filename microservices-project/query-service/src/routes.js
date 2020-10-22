import express from 'express';

import QueryController from '../controllers/QueryController';

const routes = express.Router();

const queryController = new QueryController();

routes.get('/tasks',queryController.index);


routes.post('/events', (req, res) => {
    console.log("Evento recebido: ", req.body.type)

    res.send({});
});

export default routes;
