// myApp.js

var express = require('express');
var app = express();

app.get("/api/:date?", (req, res) => {
  let dateInput = req.params.date;
  let date;

  if (!dateInput) {
    date = new Date();
  } else if (/^\d+$/.test(dateInput)) {
    date = new Date(Number(dateInput));
  } else {
    date = new Date(dateInput);
  }

  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

module.exports = app;
