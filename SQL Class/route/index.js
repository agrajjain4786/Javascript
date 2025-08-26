const express = require("express");
const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");
const uuid = require("uuid");

const app = express();

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
      if (err) throw err;
      let count = result[0]["count(*)"];
      console.log(result[0]["count(*)"]);
      res.send(`success`);
    });
  } catch (err) {
    console.log(err);
    res.send(`some error in DB `, err);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
