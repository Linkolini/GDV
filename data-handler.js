// function extractCoordinates(geojsonData) {
//   if (geojsonData.type !== "FeatureCollection") {
//     console.error("Invalid GeoJSON: not a FeatureCollection");
//     return;
//   }

//   geojsonData.features.forEach((feature, index) => {
//     const geometry = feature.geometry;
//     const type = geometry.type;
//     const coordinates = geometry.coordinates;

//     L.geoJSON(feature).addTo(Kaiserslautern);
//   })
//   }



// const fs = require('fs');

// // Read and parse the GeoJSON file
// const geojsonData = JSON.parse(fs.readFileSync('./HaltestellenKaiserslautern.geojson', 'utf8'));

// // Extract coordinates
// extractCoordinates(geojsonData);