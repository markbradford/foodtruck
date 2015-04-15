var drawMap = function(markers) {

  L.mapbox.accessToken = 'pk.eyJ1IjoibWFya2JyYWRmb3JkIiwiYSI6IkpralhwWlkifQ.Gqyl_zCShEO5y6huqCQnvw';

  var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/markbradford.lo0nc2np/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
  });

  var map = L.map('map').addLayer(mapboxTiles)

   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      map.setView([position.coords.latitude, position.coords.longitude], 16);
    })
   }

   markers.forEach(function(marker) {
    console.log(marker);
    L.marker([marker.lat, marker.lng]).addTo(map).bindPopup(marker.name)
   })

}