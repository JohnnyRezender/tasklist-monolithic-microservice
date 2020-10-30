import express from 'express';

import NotificationController from '../controllers/NotificationController';

const routes = express.Router();

const notificationController = new NotificationController();

routes.put('/notification',notificationController.send);

routes.post('/events', (req, res) => {
    console.log("Evento recebido: ", req.body.type)

    res.send({});
});


export default routes;
