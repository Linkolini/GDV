//--------------------Karten initiieren------------------------------------------------------------------------------------------------------------------\\

var Mannheim = L.map("Mannheim", {
    center: [49.492672, 8.470],
    zoom: 16

});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Mannheim);


var Kaiserslautern = L.map("Kaiserslautern", {
    center: [49.443662, 7.770],
    zoom: 16

});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Kaiserslautern);

//-----------------Clck-Popups-------------------------------------------------------------------------------------------------------------------------------------------\\

var popup = L.popup();
var popup2 = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(Mannheim);
}

Mannheim.on('click', onMapClick);

function onMapClick2(e) {
    popup2
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(Kaiserslautern);
}

Kaiserslautern.on('click', onMapClick2);

//------------------------------------------------------------------------------------------------------------------------------------------------------------\\

// var marker = L.marker([49.443662, 7.770]).addTo(Kaiserslautern);
// var marker1 = L.marker([49.443662, 7.774]).addTo(Kaiserslautern);
// var marker2 = L.marker([49.443662, 7.764]).addTo(Kaiserslautern);

//---------------------------Custom Markers erzeugen---------------------------------------------------------------------------------------------------\\

const publicTransport = L.icon({
  iconUrl: 'MapIcons/busStop.png',
  iconSize: [20, 20],        
  iconAnchor: [15, 30],      
  popupAnchor: [0, -30]     
});

const pointOfInterest = L.icon({
  iconUrl: 'MapIcons/barMap.png',
  iconSize: [20, 20],        
  iconAnchor: [15, 30],      
  popupAnchor: [0, -30]     
});

//-----------------Marker an Haltestellen erzeugen-------------------------------------------------------------------------------------------------------------------------------------------\\

fetch('HaltestellenKaiserslautern.geojson')
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to map
    const geojsonLayer = L.geoJSON(data, {
       pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: publicTransport });
       },
      onEachFeature: (feature, layer) => {
        const coords = JSON.stringify(feature.geometry.coordinates);
        const name = feature.properties.name;
        layer.bindPopup(`<strong>${name}</strong><br>Coords: ${coords}`);
      }
    }).addTo(Kaiserslautern);

    // Zoom to layer bounds
    map.fitBounds(geojsonLayer.getBounds());
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });

  fetch('HaltestellenMannheim.geojson')
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to map
    const geojsonLayer = L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: publicTransport });
       },
      onEachFeature: (feature, layer) => {
        const coords = JSON.stringify(feature.geometry.coordinates);
        const name = feature.properties.name
        layer.bindPopup(`<strong>${name}</strong><br>Coords: ${coords}`);
      }
    }).addTo(Mannheim);

    // Zoom to layer bounds
    map.fitBounds(geojsonLayer.getBounds());
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });

//------------------------------------------------------------------------------------------------------------------------------------------------------------\\

//-------------------------------------------Marker für Third PLaces erzeugen------------------------------------------------------------------------------------------\\

fetch('ThirdPlacesKaiserslautern.geojson')
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to map
    const geojsonLayer = L.geoJSON(data, {
       pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: pointOfInterest });
       },
      onEachFeature: (feature, layer) => {
        const coords = JSON.stringify(feature.geometry.coordinates);
        const name = feature.properties.name;
        layer.bindPopup(`<strong>${name}</strong><br>Coords: ${coords}`);
      }
    }).addTo(Kaiserslautern);

    // Zoom to layer bounds
    map.fitBounds(geojsonLayer.getBounds());
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });


  fetch('ThirdPlacesMannheim.geojson')
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to map
    const geojsonLayer = L.geoJSON(data, {
       pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: pointOfInterest });
       },
      onEachFeature: (feature, layer) => {
        const coords = JSON.stringify(feature.geometry.coordinates);
        const name = feature.properties.name;
        layer.bindPopup(`<strong>${name}</strong><br>Coords: ${coords}`);
      }
    }).addTo(Mannheim);

    // Zoom to layer bounds
    map.fitBounds(geojsonLayer.getBounds());
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });







