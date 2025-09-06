const express = require("express");
const app = express();

// middleware

app.get("/", (req, res) => {
  res.send("something");
});

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
