// script.js
function initMap() {
  var location = { lat: 11.0181, lng: -74.8366 }; // Coordenadas aproximadas de Sabanilla, Puerto Colombia
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
  });
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });
}
