import express from 'express';

import TasksController from '../controllers/TasksController';

const routes = express.Router();

const tasksController = new TasksController();

routes.put('/tasksSchedule', tasksController.create);

export default routes;
