const Knex = require('knex');

exports.up = function(Knex) {
    return Knex.schema.createTable('NOTIFICATIONS', table => {
        table.increments('ID_NOTIFICATION_NOT').primary();
        table.string('ST_NOTIFICATION_NOT').notNullable();
        table.string('ST_STATUS_NOT').defaultTo('PENDENTE');
        table.timestamps(true, true);
    })
}

exports.down = function(Knex) {
    return Knex.schema.dropTable('NOTIFICATION');
}
