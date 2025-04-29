//"use strict";

//promise

const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=49.554&longitude=25.5907";

fetch(weatherUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log("first");