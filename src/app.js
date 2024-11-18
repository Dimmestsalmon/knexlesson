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
  knex('pet')
    .select('*')
    .then(data => {
      var petNames = data.map(pet => `pets name is: ${pet.name} and it eats ${pet.food_type_id}`)
      res.json(petNames)
    })
})