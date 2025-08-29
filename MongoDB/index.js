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

// user1.save();
// user2.save(); //we use as a promise also .then().catch();

// User.insertMany([
//   { name: "tony", email: "tony@gmail.com", age: 85 },
//   { name: "thor", email: "thor@gmail.com", age: 65 },
//   { name: "hulk", email: "hulk@gmail.com", age: 75 },
// ]).then((result) => {
//   console.log(result);
// });
// User.find({}).then((res) => {
//   console.log(res);
// });
// User.findByIdAndUpdate(
//   "68b147c8fdc0eb384855b363",
//   { $set: { name: "jason bourne" } },
//   { new: true }
// ).then((res) => {
//   console.log(res);
// });

// User.deleteOne({ name: "tony" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.deleteMany({ age: { $gt: 50 } }).then((res) => {
  console.log(res);
});
