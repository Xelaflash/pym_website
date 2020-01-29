import GMaps from 'gmaps/gmaps.js';

const mapElement = document.getElementById('map');
{
  const cabinet = { lat: 43.477026, lng: -1.506039 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: cabinet,
  });
  const marker = new google.maps.Marker({
    position: cabinet,
    map,
  });
}
