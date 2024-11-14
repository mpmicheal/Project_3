  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.754932, lng: -73.984016 },
      zoom: 8
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
