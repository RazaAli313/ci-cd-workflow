const app = require("./app");
const config = require("dotenv").config;

config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is listening on THE port ${PORT}`);
});


