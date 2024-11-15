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

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">New York City</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Manhattan New York</b>, As they say the City never sleeps</b>, is a large "
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  var infoWindow = new google.maps.InfoWindow({
    content: cotentString,
  });

}

google.maps.event.addDomListener(window, 'load', initMap);
