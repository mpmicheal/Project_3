function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { "lat": 41.891871832152525, "lng": -87.60507682130253 },
  });

const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: {lat: 37.4239163, lng: -122.0947209},
  });

  marker.addListener('click', ({domEvent, latLng}) => {
    const {target} = domEvent;
    // Handle the click event.
    // ...
  });
}
