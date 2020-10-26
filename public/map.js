//bringing in map tile layer from website
let myMap = L.map("mapid").setView([43.6106, -72.9726], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

//adding markers to the map for each restaurant with a popup box for info
let firstMark = L.marker([43.60119, -72.973275]).addTo(myMap);
firstMark.bindPopup("<h5>Ramunto's</h5>");

let secondMark = L.marker([43.622554, -72.952676]).addTo(myMap);
secondMark.bindPopup("<h5>Johnny Boy's Pancake House</h5>");

let thirdMark = L.marker([43.612132, -72.968512]).addTo(myMap);
thirdMark.bindPopup("<h5>Orientaste</h5>");

let fourthMark = L.marker([43.605421, -72.984491]).addTo(myMap);
fourthMark.bindPopup("<h5>Bellomo's Market</h5>");

let fifthMark = L.marker([43.586365, -72.953147]).addTo(myMap);
fifthMark.bindPopup("<h5>The Rollin' Rooster</h5>");

let sixthMark = L.marker([43.584311, -72.968525]).addTo(myMap);
sixthMark.bindPopup("<h5>Taco Bell</h5>");
