const request = require('postman-request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiZ2hpam9vbiIsImEiOiJjazEwa2V0MXYwNnJwM2JteWhiZmY1anNpIn0.MgqLIiJYw1259w5n_vbA_A`

  // destructure response.body as a single variable body
  request({ url, json: true }, (err, { body } = {}) => {
    if (err) {
      // set the first argument of the callback as the err argument, and the second argument as undefined
      callback('Unable to connect to the location service.', undefined)
    } else if (body.features.length === 0) {
      // set the first argument of the callback as the err argument, and the second argument as undefined
      callback('Unable to find location. Try another search.', undefined)
    } else {
      const data = body.features[0]
      // set the first argument of the callback as undefined, and the second argument as the response data
      callback(undefined, {
        location: data.place_name,
        latitude: data.center[1],
        longitude: data.center[0]
      })
    }
  })
}

module.exports = geocode
