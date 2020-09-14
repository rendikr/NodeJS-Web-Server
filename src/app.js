const express = require('express')

const app = express()

// define the route
app.get('/', (req, res) => {
  res.send('Hello express!')
})

app.get('/help', (req, res) => {
  res.send('Help page')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/weather', (reqe, res) => {
  res.send('Get a weather report')
})

// start the server
app.listen(3000, () => {
  console.log('Server is up and running on port 3000')
})
