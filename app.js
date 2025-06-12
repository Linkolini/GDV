

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

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(Mannheim);
}

Mannheim.on('click', onMapClick);



// var marker = L.marker([49.443662, 7.770]).addTo(Kaiserslautern);
// var marker1 = L.marker([49.443662, 7.774]).addTo(Kaiserslautern);
// var marker2 = L.marker([49.443662, 7.764]).addTo(Kaiserslautern);


fetch('HaltestellenKaiserslautern.geojson')
  .then(response => response.json())
  .then(data => {
    // Add GeoJSON layer to map
    const geojsonLayer = L.geoJSON(data, {
      onEachFeature: (feature, layer) => {
        const coords = JSON.stringify(feature.geometry.coordinates);
        const type = feature.geometry.type;
        layer.bindPopup(`<strong>${type}</strong><br>Coords: ${coords}`);
      }
    }).addTo(Kaiserslautern);

    // Zoom to layer bounds
    map.fitBounds(geojsonLayer.getBounds());
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });

var circle = L.circle([49.492672, 8.470],{
    color:"green",
    fillColor: '#f03',
    fillOpacity: '0.5',
    radius:100
}).addTo(Mannheim);



marker.bindPopup("<b>Kaiserslautern HBF</b><br>Lorem ipsum").openPopup();
circle.bindPopup("Abendakademie <br> Linien: 1,3,4,5 <br> Frequenz: Alle 10 Minuten");
polygon.bindPopup("I am a polygon.");




