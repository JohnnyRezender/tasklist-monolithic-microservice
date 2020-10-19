const Knex = require('knex');
const {parseISO,formatISO, startOfMinute, addDays} = require('date-fns');

exports.seed = async function(Knex)
{
    const dtLembrete = formatISO(startOfMinute(addDays(new Date(), 3)));

    await Knex('TASKS').insert([
        {
            ST_TASK_TAS: 'Tarefa teste',
            ST_STATUS_TAS: 'PENDENTE',
            DT_TASK_TAS: parseISO(dtLembrete)
        }
    ])
}
