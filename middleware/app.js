const express = require("express");
const app = express();

// middleware
app.use((req, res) => {
  console.log(`Hi, I am middleware`);
  res.send("middleware finished");
});

app.get("/", (req, res) => {
  res.send("hi i am root");
});

app.get("/random", (req, res) => {
  res.send("hi i am random page");
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
