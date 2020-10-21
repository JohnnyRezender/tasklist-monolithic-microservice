import scheduleReminder from '../lib/scheduleReminder';

export default {
    key: "scheduleReminder",
    options: {
      attempts:3,
    },
    async handle({data}) {
      scheduleReminder.scheduleReminder(data)
    }
}
