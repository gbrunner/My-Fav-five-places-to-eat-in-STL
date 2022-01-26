require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10, 
          center: [-90, 38] // longitude, latitude
        });
      });



var marker1 = L.marker([38.649, -90.261]).addTo(mymap);
var marker2 = L.marker([38.640, -90.260]).addTo(mymap);
var marker3 = L.marker([38.599, -90.237]).addTo(mymap);
var marker4 = L.marker([38.646, -90.262]).addTo(mymap);
var marker5 = L.marker([38.560, -90.252]).addTo(mymap);

marker1.bindPopup("<b>Resturant 1</b><br>Jeni's Splendid Ice Creams").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>PokeDoke").openPopup();
marker3.bindPopup("<b>Resturant 1</b><br>Sheesh").openPopup();
marker4.bindPopup("<b>Resturant 2</b><br>Taste Of Lebanon").openPopup();
marker5.bindPopup("<b>Resturant 1</b><br>Pho Grand").openPopup();
