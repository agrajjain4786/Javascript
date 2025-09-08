const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.use("/err", (req, res) => {
  console.log(`-----error-----`);
  res.send(err);
});

app.use((err, req, res, next) => {
  let { status = 500, message = `some error` } = err;
  res.status(status).send(message);
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
