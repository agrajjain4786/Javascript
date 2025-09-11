const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((e) => {
    console.log(e);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationShipText");
}

const userSchema = new Schema({
  username: String,
  addersses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const saveUser = async () => {
  let user1 = new User({
    username: "Agraj",
    addersses: [
      {
        location: "Bodla",
        city: "Agra",
      },
    ],
  });
  user1.addersses.push({ location: "Chipiyana", city: "Ghaziabad" });
  let result = await user1.save();
  console.log(result);
};

saveUser();
