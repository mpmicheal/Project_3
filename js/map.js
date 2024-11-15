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
    content: "New York City",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
    

}

google.maps.event.addDomListener(window, 'load', initMap);
