//bringing in map tile layer from website
let myMap = L.map("mapid").setView([43.584311, -72.968525], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let sixthMark = L.marker([43.584311, -72.968525]).addTo(myMap);
sixthMark.bindPopup("<h5>Taco Bell</h5>");
