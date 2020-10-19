import express from 'express';

import NotificationController from '../controllers/NotificationController';

const routes = express.Router();

const notificationController = new NotificationController();

routes.put('/notification',notificationController.send);


export default routes;
