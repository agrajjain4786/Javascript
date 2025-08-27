const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test");
main()
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => console.log(e));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "Adam",
  email: "adam@gamil.com",
  age: 48,
});

const user2 = new User({
  name: "Eve",
  email: "eve@gamil.com",
  age: 46,
});

user1.save();
user2.save(); //we use as a promise also .then().catch();


