const Knex = require('knex');
const {parseISO,formatISO, startOfMinute, addDays} = require('date-fns');

exports.seed = async function(Knex)
{
    const dtLembrete = formatISO(startOfMinute(addDays(new Date(), 3)));

    await Knex('NOTIFICATIONS').insert([
        {
            ST_NOTIFICATION_NOT: 'Notificação teste',
            ST_STATUS_NOT: 'PENDENTE'
        }
    ])
}
