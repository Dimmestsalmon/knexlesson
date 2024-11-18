/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'Leonardo', pet_type_id: 2},
    {id: 2, name: 'Raphael', pet_type_id: 3},
    {id: 3, name: 'Michaleangelo', pet_type_id: 4},
    {id: 4, name: 'Donatello', pet_type_id: 1},
  ]);
};
