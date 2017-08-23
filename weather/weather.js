const request = require('request')

const getWeather = () => {
  request({
    url: `https://api.darksky.net/forecast/054616478fd4c54f7275eda745f5c309/${results.lattitude},${results.longitude}`,
    json: true
  }, (err, res, body) =>{
    if (err) {
      console.log('Could not connect to API');
    } else {
      console.log(body.currently.temperature);
    }
  })
}

module.exports = {
  getWeather
}
