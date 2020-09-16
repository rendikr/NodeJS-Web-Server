const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// tell the app to use hbs template engine
app.set('view engine', 'hbs')

// define express to also serve static files under directory
app.use(express.static(publicDirectoryPath))

// define the route
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    author: 'Rendi K.'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    author: 'Rendi K.'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    message: 'What can I assist you with?',
    author: 'Rendi K.'
  })
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
