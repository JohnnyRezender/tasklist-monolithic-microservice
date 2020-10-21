import {parseISO, startOfMinute, format, isPast} from 'date-fns';
import {Request, Response} from 'express';
import Queue from '../lib/queue';

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

        return Response
            .status(200)
            .json(`Lembrete agendado com sucesso!`)
    }
}

export default TasksController;