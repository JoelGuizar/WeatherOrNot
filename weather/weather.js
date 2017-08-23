const request = require('request')

const getWeather = (lat, long, cb) => {
  request({
    url: `https://api.darksky.net/forecast/054616478fd4c54f7275eda745f5c309/${lat},${long}`,
    json: true
  }, (err, res, body) =>{
    if (err) {
      cb('Could not connect to API');
    } else {
      cb(undefined, {
        temperature: body.currently.temperature,
        appTemperature: body.currently.apparentTemperature
      }); // must create object instead of just logging the temperature
      console.log(`It is ${body.currently.temperature} degrees, but it feels like ${body.currently.apparentTemperature}!`);
    }
  })
}

module.exports = {
  getWeather
}
