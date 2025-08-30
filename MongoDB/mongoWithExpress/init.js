const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let initialChats = [
  {
    from: "neha",
    to: "priya",
    msg: "hello",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "hey buddy",
    created_at: new Date(),
  },
  {
    from: "ram",
    to: "shyam",
    msg: "teach me js callback",
    created_at: new Date(),
  },
  {
    from: "azad",
    to: "deepesh",
    msg: "let make a trip",
    created_at: new Date(),
  },
  {
    from: "aman",
    to: "naman",
    msg: "we have almost same name",
    created_at: new Date(),
  },
];
Chat.insertMany(initialChats);
