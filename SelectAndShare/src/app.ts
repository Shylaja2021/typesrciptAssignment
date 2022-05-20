// import axios from 'axios';

const form=document.querySelector('form')!;
const addressInput=document.getElementById('address')! as HTMLInputElement;
// // declare var google:any;
// const GOOGLE_API_KEY='AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs'
//  type GoogleGeocodingResponse={
//      results:{geometry:{location:{lat:number,lng:number}}}[],
//      status:'OK'|'ZERO_RESULTS'
//     }
// function searchAddress(event:Event){
// event.preventDefault();
// const eneteredAddress=addressInput.value;

// axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(eneteredAddress)}+Amphitheatre+Parkway,+Mountain+View,+CA&key=${GOOGLE_API_KEY}`)
// .then(response=>{
//    // console.log(response);
//    if(response.data.status!=="OK"){
//        throw new Error("Could not fetch location")
//    }
//    const coordinates=response.data.results[0].geometry.location;
//    const map = new google.maps.Map(document.getElementById('map')!, {
//     center: coordinates,
//     zoom: 8
//   });
//   new google.maps.Marker({position:coordinates,map:map})
// })

// .catch(error=>{
//     alert(error.message)
//     console.log(error)
// })

// }
// // function searchAddressHandler(event:Event){
// //     event.preventDefault();
// //     console.log("search function")
// // }


declare var ol: any;
 
function searchAddressHandler(event: Event) {
  event.preventDefault();
 
  const coordinates = {lat: 40.41, lng: -73.99}; // Can't fetch coordinates from Google API, use dummy ones
 
  document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
  new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
    
  });
}

form.addEventListener('submit',searchAddressHandler);