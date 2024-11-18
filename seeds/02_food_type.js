/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE food_type CASCADE')
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'kibbles', description: 'kibbles'},
    {id: 2, name: 'bits', description: 'bits'},
    {id: 3, name: 'seeds', description: 'seeds'}
  ]);
};
