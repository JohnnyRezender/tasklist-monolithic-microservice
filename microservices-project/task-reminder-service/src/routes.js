import express from 'express';
import axios from 'axios';
import api from '../lib/api';

import TasksController from '../controllers/TasksController';

const routes = express.Router();

const tasksController = new TasksController();

routes.put('/tasksSchedule', tasksController.create);

routes.post('/events', (req, res) => {
    console.log("Evento recebido: ", req.body.type)
    const {type, data, postId} = req.body;

    const isCreatingOrUpdating = type == 'taskCreated' || type == 'taskUpdated';
    
    if (isCreatingOrUpdating) {

        axios.put(`${api.TASK_REMINDER_API_URL}/tasksSchedule`,
            {
                dtNotificacao: data.DT_TASK_TAS,
                message: data.ST_TASK_TAS
            }
            )
            .catch( function (error) {
                console.log(error.message)
            }
        )
    }

    res.send({});
});

export default routes;
