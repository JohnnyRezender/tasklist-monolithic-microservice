import express from 'express';

import QueryController from '../controllers/QueryController';

const routes = express.Router();

const queryController = new QueryController();

routes.get('/query',queryController.index);

routes.post('/query',queryController.event);

routes.post('/events',queryController.event);

export default routes;
