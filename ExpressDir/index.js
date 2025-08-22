const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
// app.use((req, res) => {
//   console.log(`request recevied`);
//   res.send("this is response throung server");
//   console.log(`respose is sended`);
// });
app.get("/", (req, res) => {
  res.send("you request for root page");
});
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`your username = ${username} and id = ${id}`);
});
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    console.log(`empty query`);
    res.send(`empty query`);
  }

  console.log(req.query); // http://localhost:3000/search?q=anything

  res.send(`results for ${q}`);
});
