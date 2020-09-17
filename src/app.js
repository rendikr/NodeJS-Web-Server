const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine & views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Define static directory to serve
app.use(express.static(publicDirectoryPath))

// Define the route
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    author: 'Rendi K.'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
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
    title: 'Weather',
    location: 'Jakarta',
    temperature: '32',
    forecast: 'The weather is mild'
  })
})

// start the server
app.listen(3000, () => {
  console.log('Server is up and running on port 3000')
})
