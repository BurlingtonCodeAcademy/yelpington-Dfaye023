let myMap = L.map("mapid").setView([43.612132, -72.968512], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let thirdMark = L.marker([43.612132, -72.968512]).addTo(myMap);
thirdMark.bindPopup("<h5>Orientaste</h5>");
