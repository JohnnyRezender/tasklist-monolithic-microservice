const Knex = require('knex');

exports.seed = async function(Knex)
{
    const task = {
        teste: 'teste',
        teste1: 'teste1',
        teste2: 'teste2',
    };

    await Knex('DATA').insert([
        {
            type: 'taskCreated',
            data: JSON.stringify(task),
        }
    ]);
}
