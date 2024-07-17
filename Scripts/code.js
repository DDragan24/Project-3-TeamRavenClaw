//default map of Project
var defaultMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
//grayscale layer
var grayMap = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
});

//make basemaps obj
let basemaps = {
    "Gray Scale": grayMap,
    Default: defaultMap
    
}

//make map object
var myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 4,
    layers: [grayMap, defaultMap ]
});
//add default map to map
defaultMap.addTo(myMap);

//layer control
L.control
    .layers(basemaps)
    .addTo(myMap);

let prisonInmates = new L.layerGroup();
d3.json("merged.json")
.then(function(InmateData){
    //check if the data is in the site
    console.log(InmateData);
    //make an emptyarray to grab the counties
    var counties = [];
    
    }).addTo(prisonInmates);  



//add prisonInmates to map
prisonInmates.addTo(myMap);
