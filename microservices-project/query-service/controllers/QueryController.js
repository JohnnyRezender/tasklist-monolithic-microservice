import {parseISO, startOfMinute, format, isPast} from 'date-fns';
import {Request, Response} from 'express';
import knex from '../database/connection';

class QueryController
{

    async index (Request, Response)
    {
        const data = 
            await knex('DATA')
            .select('DATA.*');

        const serializedData = data.map(data => {

            return {
                type: data.type,
                data: JSON.parse(data.data),
            }
        });

        return Response.status(200).json(serializedData);
    }

    /**
     * Endpoint para salvar um data
     *
     * @param Request
     * @param response
     *
     * @return success
     * @throws error
     */
    async event (Request, Response)
    {
        console.log("Evento Recebido")
        const  {type, data} = Request.body;

        const transaction = await knex.transaction();

        const insertData = {
            type,
            data: JSON.stringify(data),
        };

        const dataCreated = 
            await transaction("DATA")
            .insert(insertData);

        await transaction.commit();

        return Response
            .status(200)
            .json(`Registro#${dataCreated} criado com sucesso!`);
    }

}

export default QueryController;
