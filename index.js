const app = require("./app");
const config = require("dotenv").config;

config();

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`The server is listening on THE port ${PORT}`);
});


