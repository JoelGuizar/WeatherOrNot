const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')
const axios = require('axios');

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

let encoded = encodeURIComponent(argv.address)
let geoURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`

axios.get(geoURL).then((response)=> {
  if (response.data.status === 'ZERO_RESULTS'){
    throw new Error ('Unable to find that address'); //throws error so it can go straight to catch
  }
  let lat = response.data.results[0].geometry.location.lat
  let long = response.data.results[0].geometry.location.lng
  let weatherURL = `https://api.darksky.net/forecast/054616478fd4c54f7275eda745f5c309/${lat},${long}`


  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherURL)
  //response.data --- data is an auto-property of the response argument passed in
}).catch((error) => {

  if (e.code === "ENOTFOUND"){
    console.log('Could not connect to API');
  } else {
    console.log(error);
  }
}) //http get request


// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage){
//     console.log(errorMessage);
//   } else {
//     weather.getWeather(results.latitude, results.longitude, (errMessage, res) =>{
//       if (errMessage){
//         console.log(errMessage);
//       } else {
//         console.log(JSON.stringify(res, undefined, 2));
//       }
//     });
//   }
// })
