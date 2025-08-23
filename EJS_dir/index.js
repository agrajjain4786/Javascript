const express = require("express");
const app = express();
const path = require("path");

const instaData = require("./data.json");

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
  let data = instaData[username];
  // console.log(data);
  if (data) {
    res.render(`instagram.ejs`, { data });
  } else {
    res.send('<h1 style = "color:red;">user not found</h1>');
  }
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
