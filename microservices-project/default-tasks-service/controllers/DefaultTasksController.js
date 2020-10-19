import {Request, Response} from 'express';
import defaultTasks from '../helpers/defaultTasks';

class DefaultTasksController
{
    /**
    * Endpoint para retornar todas as tarefas padrão
    * 
    * @param Request
    * @param Response
    * 
    * @return json
    */
   async index (Request, Response)
   {
        return Response.json(defaultTasks);
   }

}

export default DefaultTasksController;
