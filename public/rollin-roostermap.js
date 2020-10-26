//bringing in map tile layer from website
let myMap = L.map("mapid").setView([43.586365, -72.953147], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let fifthMark = L.marker([43.586365, -72.953147]).addTo(myMap);
fifthMark.bindPopup("<h5>The Rollin' Rooster</h5>");
