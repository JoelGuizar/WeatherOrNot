const request = require('request');

const geocodeAddress = (address) => {
  return new Promise ((resolve, reject) => {

    let encoded = encodeURIComponent(address) //a or address will work automatically since already defined
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
      json: true  //states that it will be a json object coming back, so it should convert the json string and covert it into an object
    }, (err, res, body) => {
      //console.log(JSON.stringify(body, undefined, 2)); //third argument is how you wanna format the json//the spaces

      if (err){
        reject('Unable to connect.')
      } else if (body.status === 'ZERO_RESULTS'){
        reject('Unable to find that address.')
      } else if (body.status === 'OK'){
        let loc = body.results[0].geometry.location
        resolve({
          address: body.results[0].formatted_address,
          latitude: loc.lat,
          longitude: loc.lng
        })
      }
    })


  })
}


geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})
