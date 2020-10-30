import express from 'express';
import bodyParser from 'body-parser'
import axios from 'axios';
import api from './api';

const app = express();

app.use(express.json());

app.post('/events', (req, res) => {
    const event = req.body;
 
    //Disparando events
    axios.post(
        `${api.API_URL_QUERY_SERVICE}/events`, 
        event
        ).catch(function (error) {
            console.log(error.message)
    });

    axios.post(`${api.API_URL_DEFAULT_TASKS_SERVICE}/events`, event)
         .catch(function (error) {
            console.log(error.message)
    });

    axios.post(`${api.API_URL_NOTIFICATION_SERVICE}/events`, event)
         .catch(function (error) {
            console.log(error.message)
    });

    axios.post(`${api.API_URL_TASK_REMINDER_SERVICE}/events`, event)
         .catch(function (error) {
            console.log(error.message)
    });

    axios.post(`${api.API_URL_TASK_SCHEDULE_SERVICE}/events`, event)
         .catch(function (error) {
            console.log(error.message)
    });

    res.json("ook")
});

app.listen(4005, () =>{
    console.log("Event bus rodando na porta 4005");
});
