import GMaps from 'gmaps/gmaps.js';

const mapElement = document.getElementById('map'); {
  var cabinet = {lat: 44.83686989999999, lng: -0.5679794999999785};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: cabinet
    });
  var marker = new google.maps.Marker({
    position: cabinet,
    map: map
  });
}

