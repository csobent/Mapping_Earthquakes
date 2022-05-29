// Add console.log to check to see if out code is working.
console.log("working");

// Create the map object with a center and zoom level. [latitude, longitude], zoom level(0-18).
let map = L.map('mapid').setView([30, 30], 2);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         // .bindPopup("<h2> " + feature.properties.name + " </h2> <hr> <h3>" + feature.properties.city + " , " + feature.properties.country + " </hr></h3>");
//         .bindPopup("<h3>Airport code: "+feature.properties.faa+"</h3><hr><h3>Airport name: "+feature.properties.name+"</hr><h/3>");
//     }

// }).addTo(map);

// // Grabbing our GeoJSON data using the onEachFeature function
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         return L.marker(layer)
//         layer.bindPopup("<h3>Airport code: "+feature.properties.faa+"</h3><hr><h3>Airport name:"+feature.properties.name+"</hr><h/3>");
//     }
// });

// // pointToLayer Function
// L.geoJSON(data, {
//     pointToLayer: function(feature,latlng) {
//         return L.marker(latlng);
//     }
// });

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         weight: 4,
//         color: "orange"
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON url
let airportData = "https://raw.githubusercontent.com/csobent/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map);
});

// // Grabbing our GeoJSON data.
// L.geoJSON(airportData, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         // .bindPopup("<h2> " + feature.properties.name + " </h2> <hr> <h3>" + feature.properties.city + " , " + feature.properties.country + " </hr></h3>");
//         .bindPopup("<h3>Airport code: "+feature.properties.faa+"</h3><hr><h3>Airport name: "+feature.properties.name+"</hr><h/3>");
//     }

// }).addTo(map);