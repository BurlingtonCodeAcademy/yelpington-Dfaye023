// express setup
const express = require("express");
//translate relative to absolute path
const path = require("path");
const app = express();
//assign port
const port = process.env.PORT || 8000;

//static middleware
app.use(express.static("./public"));

//show restaurant json page when adding /api in URL
app.get("/api", (request, response) => {
  response.sendFile(path.resolve("./api/restaurants.json"));
});

//show specific json object when searched for in URL
app.get("/api/:id", (request, response) => {
  let restaurant = req.params.id;

  if (id === "ramuntos") {
    response.sendFile(path.resolve(`./api/${id}.json`));
  } else {
    res.send(`{"error": "No such record for ${id} exists}`);
  }
});

//start the port
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
