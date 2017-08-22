const request = require('request')

const geocodeAddress = (address, cb) => {
  let encoded = encodeURIComponent(address) //a or address will work automatically since already defined
  let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`

  request({
    url,
    json: true  //states that it will be a json object coming back, so it should convert the json string and covert it into an object
  }, (err, res, body) => {
    //console.log(JSON.stringify(body, undefined, 2)); //third argument is how you wanna format the json//the spaces

    if (err){
      cb('Unable to connect.')
    } else if (body.status === 'ZERO_RESULTS'){
      cb('Unable to find that address.')
    } else if (body.status === 'OK'){
      let loc = body.results[0].geometry.location
      cb(undefined, {
        address: body.results[0].formatted_address,
        lattitude: loc.lat,
        longitude: loc.lng
      })
    }
  })
}

module.exports = {
  geocodeAddress
}
