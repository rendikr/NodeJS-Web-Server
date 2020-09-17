const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5ec956c24e2a6a7adb9c59ce3cb09e03&query=${latitude},${longitude}`

  // destructure response.body as a single variable body
  request({ url, json: true }, (err, { body } = {}) => {
    if (err) {
      // set the first argument of the callback as the err argument, and the second argument as undefined
      callback('Unable to connect to the forecast service.', undefined)
    } else if (body.error) {
      // set the first argument of the callback as the err argument, and the second argument as undefined
      callback('Unable to find location.', undefined)
    } else {
      const data = body.current
      const message = 'It is currently ' + data.temperature + ' degrees out and feels like ' + data.feelslike + ' degrees'
      // set the first argument of the callback as undefined, and the second argument as the response data
      callback(undefined, message)
    }
  })
}

module.exports = forecast
