const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url='https://api.darksky.net/forecast/ab20c541f4495372c97dcd42a3fde5e0/37.8267,-122.4233'

// request({url:url,json:true},(error,response) =>{
 
//    if(error){
//      console.log('we are unable to connect with weather service')
//    }else if(response.body.error){
//      console.log('unable to find location')
//    }else{
//     console.log(response.body.currently.temperature + response.body.daily.data[0].summary +'its currently ' +  response.body.currently.precipProbability)
//    }
// })

// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFyc2hzYWhkZXYiLCJhIjoiY2s0ZmducDI4MG1keTNubGhscnAxcnIydiJ9._WymMysyVk27C7hesoIEDQ'

// request({url:geocodeURL,json:true},(error,response)=>{


//     if(error){

//      console.log('no network connection')
//     }else if(response.body.features.length === 0){

//         console.log('unable to find the location')
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude= response.body.features[0].center[0]
//          console.log(latitude,longitude)
        
// }

// })


// geocode('boston', (error, data) => {

//  if (error){
//    return console.log(error)
//  }
  
//   forecast(data.latitude,data.longitude, (error,forecastData) => {

//     if (error){
//       return console.log(error)
//     }

//     console.log(data.location)
//     console.log(forecastData)
//  })

// })
// this was the previous code now  ihave changed this 



const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}


