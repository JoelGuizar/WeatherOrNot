const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')

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
    console.log(JSON.stringify(results, undefined, 2));
  }
})
