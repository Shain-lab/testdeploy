const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const imp = require("./dummyDatabase");

app.get("/", (req, res)=>{
  res.send("Hello World");
});

app.get("/dummy", (req, res)=>{
  res.send(imp);
});
app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;
