const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Node Js Web Server</title>
      </head>
    </html>
    <body>
      <h1>Hello I am web server , powered by Syed Muhammad Raza Ali Zaidi, the servant of Ahlebait A.S...</h1>
    </body>
    `);
  next();
});

module.exports = app;
