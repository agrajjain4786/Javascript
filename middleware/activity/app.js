const express = require("express");
const app = express();
const ExpressError = require("../ErrorHandling/ExpressError");

app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  res.send("ACCESS DENIED!");
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, `ACCESS TO ADMIN IS FORBIDDEN`);
});

app.use((err, req, res, next) => {
  let { status = 500, message = `some error` } = err;
  res.status(status).send(message);
});

app.get("/api", (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("i m root");
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
