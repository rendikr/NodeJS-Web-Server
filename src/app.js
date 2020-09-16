const path = require('path')
const express = require('express')
console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// define express to also serve static files under directory
// filename will be considered as the route path with the file extension
// example: localhost:3000/about.html
app.use(express.static(publicDirectoryPath))

// define the route except file name on public directory as they are served on code above
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
