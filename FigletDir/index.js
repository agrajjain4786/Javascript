const figlet = require("figlet");

figlet("A G R A J", (e,data) => {
  if (e) {
    console.log("something is wronge");
    console.dir(e);
    return;
  }
  console.log(data);
});
