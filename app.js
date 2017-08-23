const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const request = require('request')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true //tells yargs to always parse the 'a' as a string
    }
  }) // let us configure the options
  .help()
  .alias('help', 'h') //alias for help
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
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
    //console.log(JSON.stringify(results, undefined, 2));
  }
})
