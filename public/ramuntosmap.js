//bringing in map tile layer from website
let myMap = L.map("mapid").setView([43.60119, -72.973275], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let firstMark = L.marker([43.60119, -72.973275]).addTo(myMap);
firstMark.bindPopup("<h5>Ramunto's</h5>");
