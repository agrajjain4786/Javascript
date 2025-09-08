const express = require("express");
const app = express();

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  res.send("ACCESS DENIED!");
});

app.get("/api", (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("i m root");
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
