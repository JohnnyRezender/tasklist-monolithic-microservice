const Knex = require('knex');

exports.up = function(Knex) {
    return Knex.schema.createTable('TASKS', table => {
        table.increments('ID_TASK_TAS').primary();
        table.string('ST_TASK_TAS').notNullable();
        table.string('ST_STATUS_TAS').defaultTo('PENDENTE');
        table.dateTime('DT_TASK_TAS').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(Knex) {
    return Knex.schema.dropTable('TASKS');
}
