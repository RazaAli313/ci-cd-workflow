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
      <h1>Hello I am a web server at pucit new campus, powered by Syed Muhammad Raza Ali Zaidi ,CI/CD</h1>
    </body>
    `);
  next();
});

module.exports = app;
