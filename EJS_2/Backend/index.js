const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true })); //use this for post request
app.use(express.json()); // use this for post request when data is in object form
app.get("/register", (req, res) => {
  let { user, pass } = req.query;
  res.send(`standard get request ${user}`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body; // by default req.body is given undefine value but when we define the data of body bt app.use it give the data's value.
  console.log(req.body);
  res.send(`standard post request ${username}`);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
