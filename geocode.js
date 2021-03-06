const request = require ('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiaGFyc2hzYWhkZXYiLCJhIjoiY2s0ZmducDI4MG1keTNubGhscnAxcnIydiJ9._WymMysyVk27C7hesoIEDQ'
     
//     request({url:url, json:true}, (error, response) => {
//        if(error){
//          callback('unable to connect to location services', undefined)

//        }else if(response.body.features.length === 0) {
//          callback('unable to find the location ', undefined)
//        }else{
//          callback(undefined, { 
//             latitude: response.body.features[0].center[1],
//             longitude: response.body.features[0].center[0],
//             location: response.body.features[0].place_name

//          })
//        }
//     })
// }
// this is my old code now i have changed with new 
// module.exports= geocode


request({ url: url, json: true }, (error, response) => {
  if (error) {
      callback('Unable to connect to location services!', undefined)
  } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
  } else {
      callback(undefined, {
          latitude: response.body.features[0].center[0],
          longitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name
      })
  }
})
}

module.exports = geocode
