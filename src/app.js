const express = require('express')

const app = express()

// define the route
app.get('/', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
  res.send([{
    name: 'Rendi K.'
  }, {
    name: 'Mila'
  }])
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Jakarta',
    temperature: '32',
    forecast: 'The weather is mild'
  })
})

// start the server
app.listen(3000, () => {
  console.log('Server is up and running on port 3000')
})
