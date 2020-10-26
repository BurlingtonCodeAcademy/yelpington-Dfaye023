//bringing in map tile layer from website
let myMap = L.map("mapid").setView([43.605421, -72.984491], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let fourthMark = L.marker([43.605421, -72.984491]).addTo(myMap);
fourthMark.bindPopup("<h5>Bellomo's Market</h5>");
