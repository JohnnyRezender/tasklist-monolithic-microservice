import {parseISO, startOfMinute, format, isPast} from 'date-fns';
import {Request, Response} from 'express';
import knex from '../database/connection';

class QueryController
{

    async index (Request, Response)
    {
        return Response
            .status(200)
            .json(`Retornar registros`)
    }

    /**
     * Endpoint para criar uma tarefa
     *
     * @param Request
     * @param response
     *
     * @return success
     * @throws error
     */
    async post (Request, Response)
    {
        const  {type, data} = Request.body;

        const transaction = await knex.transaction();

        // const taskDateTime = startOfMinute(parseISO(DT_TASK_TAS));

        const data = {
            type,
            data
        };
        console.log(data);
        const dataCreated = 
            await transaction("query")
            .insert(data);

        await transaction.commit();

        return Response
            .status(200)
            .json(`Registro#${dataCreated} criado com sucesso!`);
    }

}

export default QueryController;
