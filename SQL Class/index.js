const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "FirstSqlDb",
  password: "1905696",
});
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [
//   ["101", "Agraj", "aj@gmail.com", "4560"],
//   ["102", "Arjan", "Ar@yahoo.com", "7895"],
// ];

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let data = [];
for (let i = 0; i <= 100; i++) {
  data.push(getRandomUser());
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}
connection.end();
