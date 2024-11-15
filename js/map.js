  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.754932, lng: -73.984016 },
      zoom: 8
    });

  var marker = new google.maps.Marker({
  position: {lat: 40.754932, lng: -73.984016},
  map: map,
  title: 'Your Location'
});

  var infoWindow = new google.maps.InfoWindow({
    content: "<h2>New York City</h2><p>This is Midtown Manhattan, the city that doesn't sleep</p>",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  map.setOptions({
  mapTypeControl: true,
  mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    position: google.maps.ControlPosition.TOP_RIGHT
  }

  var cityCircle = new google.maps.Circle({
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  map: map,
  center: { lat: 40.754932, lng: -73.984016 },
  radius: 4000
});
    

}

google.maps.event.addDomListener(window, 'load', initMap);
