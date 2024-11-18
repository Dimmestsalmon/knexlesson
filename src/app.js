const express = require('express')
const app = express()
const port = 8081
const knex = require('knex')(require('../knexfile.js')['development']);


app.get('/', (req, res) => {
  res.send('Application up and runnign')
})

app.listen(port, ()=>{
  console.log(`Your app running on ${port}`)
})

app.get('/pets', (req,res) => {
  knex('pet', 'food_type')
    .join('food_type', 'pet.food_type_id', '=', 'food_type.id')
    .select('pet.name', 'food_type.name as foodType')
    .then(data => {
      var petNames = data.map(pet => `pets name is: ${pet.name} and it eats ${pet.foodType}`)
      res.json(petNames)
    })
})