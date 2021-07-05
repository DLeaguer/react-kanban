exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.string('priority').notNullable();
    table.string('type').notNullable();
    table.string('by').notNullable();
    table.string('to').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
}