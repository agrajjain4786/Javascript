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
  email: String,
});
const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = await User.findOne({ username: "Rahul Kumar" });
  let post2 = new Post({
    content: "post_2",
    likes: 50,
  });
  post2.user = user1;
  //   await user1.save();
  await post2.save();
};

// addData();

const getData = async () => {
  let res = await Post.find({}).populate("user");
  console.log(res);
};
getData();
