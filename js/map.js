  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.891871832152525, lng: -87.60507682130253 },
      zoom: 8
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
