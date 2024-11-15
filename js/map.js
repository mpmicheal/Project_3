  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.754932, lng: -73.984016 },
    zoom: 8,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_LEFT,
      mapTypeIds: ['roadmap' , 'satellite']
    },
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

window.initMap = initMap;

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let slideIndex = 0;
  
  function showSlides() {
    slides.forEach((slide) => {
      slide.classList.remove("show");
    });

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("show");
    setTimeout(showSlides, 3000);
  }

  slides[0].classList.add("show");
  showSlides();
});
