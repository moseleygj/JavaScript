function myMap() {

  var mapProp= {
      center:new google.maps.LatLng(40.8728,-73.8287),
      zoom:14,
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
//Get current location

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
