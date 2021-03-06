import {parseISO, startOfMinute, format, isPast} from 'date-fns';
import {Request, Response} from 'express';
import knex from '../database/connection';
import Queue from '../lib/queue';
import defaultTasks from '../helpers/defaultTasks';

class TasksController
{
    /**
    * Endpoint para retornar todas as tarefas cadastradas
    * 
    * @param Request
    * @param Response
    * 
    * @return json
    */
   async index (Request, Response)
   {
       const tasks = 
           await knex('TASKS')
           .select('TASKS.*');

       const serializedTasks = tasks.map(task => {
           return {
               ID_TASK_TAS: task.ID_TASK_TAS,
               ST_TASK_TAS: task.ST_TASK_TAS,
               ST_STATUS_TAS: task.ST_STATUS_TAS,
               DT_TASK_TAS: format(task.DT_TASK_TAS, "dd'/'MM'/'yyy HH':'mm")
           }
       });

        await Queue.add('sendNotification',{message:"Pegando todos as tarefas"});

        return Response.status(200).json(serializedTasks);
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
    async create (Request, Response)
    {
        const  {ST_TASK_TAS, ST_STATUS_TAS, DT_TASK_TAS} = Request.body;
        
        const transaction = await knex.transaction();

        const taskDateTime = startOfMinute(parseISO(DT_TASK_TAS));

        if (isPast(taskDateTime)) {
            await transaction.rollback();

            return Response
                .status(400)
                .json({error: "Não é possivel inserir uma tarefa para o passado!"});
        }
        
        const task = {
            ST_TASK_TAS,
            ST_STATUS_TAS: ST_STATUS_TAS.toUpperCase(),
            DT_TASK_TAS: taskDateTime
        };

        const taskExists = 
            await transaction('TASKS')
            .where('ST_TASK_TAS', ST_TASK_TAS)
            .andWhere('DT_TASK_TAS', task.DT_TASK_TAS)
            .andWhere('ST_STATUS_TAS', task.ST_STATUS_TAS)
            .first();

        if (taskExists) {
            await transaction.rollback();
            return Response
                .status(400)
                .json({error: 'Tarefa já criado!'});
        };

        const taskCreated = await transaction("TASKS").insert(task);

        await transaction.commit();

       Queue.add('scheduleReminder', {method: 'remind',task:`lembrete: ${ST_TASK_TAS}`, date: DT_TASK_TAS});

        return Response
            .status(200)
            .json(`Tarefa#${taskCreated} criado com sucesso!`)
    }

    /**
     * Endpoint para remover uma tarefa
     *  
     * @param Request
     * @param Response
     * 
     * @return success
     * @throws error
     */
    async remove (Request, Response)
    {
        const {ID_TASK_TAS} = Request.body;

        const reminder = await knex('TASKS').where('ID_TASK_TAS', ID_TASK_TAS).del();

        if (reminder == 0) {
            return Response
                .status(200)
                .json('Tarefa já deletada!');    
        }

        return Response
            .status(200)
            .json('Tarefa deletada!');
    }

    /**
     * Endpoint para editar um lembrete
     *  
     * @param Request
     * @param Response
     * 
     * @return success
     * @throws error
     */
    async update(Request, Response) 
    {
        const {ID_TASK_TAS} = Request.params;

        const {ST_TASK_TAS, DT_TASK_TAS, ST_STATUS_TAS} = Request.body;

        const transaction = await knex.transaction();
        const idTaskExists = 
            await transaction('TASKS')
            .where('ID_TASK_TAS', ID_TASK_TAS)
            .first();

        if (! idTaskExists) {
            await transaction.rollback();

            return Response
                .status(400)
                .json({error: "Tarefa não encontrada!"});
        }

        const taskDateTime = startOfMinute(parseISO(DT_TASK_TAS));

        if (isPast(taskDateTime)) {
            await transaction.rollback();

            return Response
                .status(400)
                .json({error: "Não é possivel inserir uma tarefa para o passado!"});
        }

        const taskExists = 
            await transaction('TASKS')
            .where('ST_TASK_TAS', ST_TASK_TAS)
            .andWhere('DT_TASK_TAS', taskDateTime)
            .andWhere('ST_STATUS_TAS', ST_STATUS_TAS)
            .whereNot('ID_TASK_TAS', ID_TASK_TAS)
            .first()
            .select('*');

        if (taskExists) {
            await transaction.rollback();
            return Response
                .status(400)
                .json({error: 'Tarefa já existe!'});
        }

        const task = 
            await transaction('TASKS')
            .update({
                ST_TASK_TAS,
                ST_STATUS_TAS,
                DT_TASK_TAS: taskDateTime
            })
            .where('ID_TASK_TAS', ID_TASK_TAS);

            await transaction.commit();

            Queue.add('scheduleReminder', {method: 'remind',task:`lembrete: ${ST_TASK_TAS}`, date: DT_TASK_TAS});

            return Response.status(200).json(`Tartefa#${ID_TASK_TAS} alterada com sucesso!`)
    }

    async defaultTasks(Request, Response)
    {
        return Response.json(defaultTasks);
    }

}

module.exports = TasksController;