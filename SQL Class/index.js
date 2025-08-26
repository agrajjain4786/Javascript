const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "FirstSqlDb",
  password: "1905696",
});
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["101", "Agraj", "aj@gmail.com", "4560"],
  ["102", "Arjan", "Ar@yahoo.com", "7895"],
];

try {
  connection.query(q, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}
connection.end();
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
