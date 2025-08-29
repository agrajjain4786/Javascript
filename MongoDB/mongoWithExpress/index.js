const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
  .then(() => {
    console.log(`DataBase Connected successful`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat({
  from: "neha",
  to: "priya",
  msg: "hello",
  created_at: new Date(),
});

chat1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello");
});

const port = 8080;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
