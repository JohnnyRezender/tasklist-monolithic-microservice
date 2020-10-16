const express = require('express');

const TasksController = require('../controllers/TasksController');

const routes = express.Router();

const tasksController = new TasksController();

routes.get('/tasks',tasksController.index);

routes.post('/tasks',tasksController.create);

routes.delete('/tasks',tasksController.remove);

routes.put('/tasks/:ID_TASK_TAS', tasksController.update);


module.exports = routes;
