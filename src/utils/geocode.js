const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmJydW5mbWFuIiwiYSI6ImNqeHpkZ2hlMjAxdm0zaHBqZHZhMnY3amsifQ.V1cPJQiLGIN6RddVUzk7FA'  
  request({ url, json: true}, (error, {body}) => {
    console.log(body.features)
    if (error) {
      callback('No se pudo conectar con el servicio', undefined)
    } else if (body.features.length === 0) {
      callback('No se encontro la localizacion', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode