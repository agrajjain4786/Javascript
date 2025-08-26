const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");
const uuid = require("uuid");

// generating fake data for database
let getData = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "user",
  password: "1905696",
});

let data = [];
for (let i = 0; i <= 100; i++) {
  data.push(getData());
  // sotoring data form fake-data to data variable
}

// passing querry to database
let q = "INSERT INTO user (id,username,email,password)VALUES ?";

try {
  connection.query(q, [data], (e, result) => {
    if (e) console.log(e);
    console.log(result);
  });
} catch (e) {
  console.log(e);
}
