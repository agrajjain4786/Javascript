const express = require("express");
const app = express();

// middleware
// app.use((req, res) => {
//   console.log(`Hi, I am middleware`);
//   res.send("middleware finished");
// });

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toLocaleString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
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
