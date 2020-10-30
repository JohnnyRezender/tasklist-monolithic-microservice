const Knex = require('knex');

exports.up = function(Knex) {
    return Knex.schema.createTable('DATA', table => {
        table.increments('id').primary();
        table.string('type').notNullable();
        table.json('data').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(Knex) {
    return Knex.schema.dropTable('DATA');
}
