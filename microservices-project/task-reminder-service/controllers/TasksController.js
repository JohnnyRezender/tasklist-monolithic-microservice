import {parseISO, startOfMinute, format, isPast} from 'date-fns';
import {Request, Response} from 'express';
import Queue from '../lib/queue';
import axios from 'axios';
import {randomBytes} from 'crypto';
import api from '../lib/api';

class TasksController
{

    /**
     * Endpoint para criar uma tarefa
     *  
     * @param Request
     * @param response
     * 
     * @return success
     * @throws error
     */
    async create (Request, Response)
    {
        const  {dtNotificacao, message} = Request.body;

        const params = {
            dtNotificacao: startOfMinute(parseISO(dtNotificacao)),
            message
        }

        if (isPast(params.dtNotificacao)) {
            return Response
                .status(400)
                .json({error: "Não é possivel inserir uma tarefa para o passado!"});
        }

        Queue.add('scheduleReminder', params);

        await axios.post(`${api.EVENT_BUS_API_URL}/events`, {
            id: randomBytes(4).toString('hex'),
            type: 'reminderCreated',
            data: {
                dtNotificacao: dtNotificacao,
                message: message
            },
            postId: Request.params.id
        });

        return Response
            .status(200)
            .json(`Lembrete agendado com sucesso!`)
    }
}

export default TasksController;