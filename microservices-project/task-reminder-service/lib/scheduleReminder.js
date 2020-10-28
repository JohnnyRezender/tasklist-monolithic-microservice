import axios from 'axios';
import api from './api';
import schedule from 'node-schedule';


export default {
    scheduleReminder(params) {
        const {dtNotificacao, message} = params;
        console.log("Agendando notificação");
        const a = schedule.scheduleJob(dtNotificacao, function ()
        {
            const event = {
                ST_NOTIFICATION_NOT: message,
                ST_STATUS_NOT: "COMPLETA"
            };

            try {
                axios.put(`${api.NOTIFICATION_API_URL}/notification`, event).then(
                    function(response){
                        console.log('Notificação enviada!')
                    }
                );   
            } catch (error) {
                console.log(error.message)
            }

        });
    }
}
