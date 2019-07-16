const request = require('request')

const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/ad9c5cb8bdf1a14acffec985d12d2102/${lat},${lon}`
  request({url, json: true}, (error, {body}) => {
    const celsius = ((5/9) * (body.currently.temperature - 32)).toFixed(2)
    if (error) {
      callback('no se pudo conectar al pronostico', undefined)
    } else if (body.error) {
      callback('No se encontro la localizacion', undefined)
    }
    else {
      callback(undefined, 
        'The day is ' + body.currently.summary + ' and the temperature is ' + celsius + '°' 
      )
    }
  })
}
module.exports = forecast