import express from 'express';

import DefaultTasksController from '../controllers/DefaultTasksController';

const routes = express.Router();

const defaultTasksController = new DefaultTasksController();

routes.get('/defaultTasks',defaultTasksController.index);


export default routes;
