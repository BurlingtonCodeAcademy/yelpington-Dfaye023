//bringing in map tile layer from website
let myMap = L.map("mapid").setView([43.622554, -72.952676], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

let secondMark = L.marker([43.622554, -72.952676]).addTo(myMap);
secondMark.bindPopup("<h5>Johnny Boy's Pancake House</h5>");
