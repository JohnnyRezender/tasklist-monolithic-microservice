import {Request, Response} from 'express';
import knex from '../database/connection';
import Notification from '../lib/notification';
import axios from 'axios';
import {randomBytes} from 'crypto';
import api from '../lib/api';

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

     let taskCreated = '';
     try {
       taskCreated = await transaction("NOTIFICATIONS").insert(notification);

       if (notification.ST_STATUS_NOT == 'COMPLETA') {
         Notification.send(ST_NOTIFICATION_NOT)
       }

       await transaction.commit();

     } catch (error) {
        await transaction.rollback();

        return Response
          .status(500)
          .json({msg:`Não foi possível enviar a notificação:`, erro: error.message})
     }

      await axios.post(`${api.EVENT_BUS_API_URL}/events`, {
          id: randomBytes(4).toString('hex'),
          type: 'notificationSended',
          data: {
            ST_NOTIFICATION_NOT: ST_NOTIFICATION_NOT,
            ST_STATUS_NOT: ST_STATUS_NOT,
          },
          postId: Request.params.id
      });

     return Response
         .status(200)
         .json(`Notificação#${taskCreated} enviada com sucesso!`)

   }

}

export default NotificationController;
