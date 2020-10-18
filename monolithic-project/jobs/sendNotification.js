import notification from '../lib/notification';
import Notification from '../lib/notification';

export default {
    key: "sendNotification",
    options: {
      attempts:3,
    },
    async handle({data}) {
      const {message} = data;
      Notification.send(message)
    }
}
