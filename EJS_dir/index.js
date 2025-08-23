const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/root", (req, res) => {
  res.send("this is root");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render(`rolldice.ejs`, { diceVal });
});

app.get("/ig/:username", (req, res) => {
  // use ":" colon after "/" to make or get req paramenters
  let { username } = req.params;
  res.render(`instagram.ejs`, { username });
  console.log(username);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
