import Queue from '../lib/queue';
import schedule from 'node-schedule';

export default {
    key: "scheduleReminder",
    options: {
      attempts:3,
    },
    async handle({data}) {
        const {method, task, date} = data;
        const a = schedule.scheduleJob(date, function ()
        {
            Queue.add('sendNotification',{message:task});
        });
    }
}
