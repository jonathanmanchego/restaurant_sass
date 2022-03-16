const express = require("express");
const app = express();
const server = require("./server");
const port = process.env.PORT || 3000;

server(app);

app.listen(port, () => {
  console.log(`restaurant backend software listen port => ${port}`);
});
