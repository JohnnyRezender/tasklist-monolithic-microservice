import {Request, Response} from 'express';
import knex from '../database/connection';

class NotificationController
{
    /**
    * Endpoint para enviar notificações para o telegram
    * 
    * @param Request
    * @param Response
    * 
    * @return json
    */
   async send (Request, Response)
   {
     const  {ST_NOTIFICATION_NOT, ST_STATUS_NOT} = Request.body;
        
     const transaction = await knex.transaction();
     
     const notification = {
          ST_NOTIFICATION_NOT,
          ST_STATUS_NOT: ST_STATUS_NOT.toUpperCase()
     };

     //Disparar notificação

     const taskCreated = await transaction("NOTIFICATIONS").insert(notification);

     await transaction.commit();

     return Response
         .status(200)
         .json(`Notificação#${taskCreated} enviada com sucesso!`)

   }

}

export default NotificationController;
