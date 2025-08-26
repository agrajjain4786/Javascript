const express = require("express");
const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");
const uuid = require("uuid");
const Path = require("path");
const method = require("method-override");

const app = express();

app.use(method("_method"));
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "user",
  password: "1905696",
});

app.get("/", (req, res) => {
  //Fetch & Show total number of users on our app
  //   res.send(`home page`);
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      let count = result[0]["count(*)"];
      // console.log(result[0]["count(*)"]);
      res.render(`home.ejs`, { count });
    });
  } catch (err) {
    console.log(err);
    res.send(`some error in DB `, err);
  }
});

app.get("/user", (req, res) => {
  // show all user's id, username, email in table
  q = `select * from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      res.render(`user.ejs`, { result });
      // console.log(result);
    });
  } catch (err) {
    console.log(err);
    res.send(`some error in DB `, err);
  }
});

app.get("/user/:id/edit", (req, res) => {
  // edit username by edit button and sending patch request
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      let user = result[0];
      res.render(`edit.ejs`, { user });
      console.log(user);
    });
  } catch (err) {
    console.log(err);
    res.send(`some error in DB `, err);
  }
  // console.log(id);
  // res.render(`edit.ejs`);
});

app.patch("/user/:id", (req, res) => {
  // accepting patch request and update in database
  res.send(`request is send`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
