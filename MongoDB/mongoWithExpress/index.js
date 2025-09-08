const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const app = express();
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
main()
  .then(() => {
    console.log(`DataBase Connected successful`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakeWhatsapp");
}

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
}

app.get("/", (req, res) => {
  res.send("hello");
});

app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let chat = await Chat.find();
    // console.log(chat);
    res.render(`index.ejs`, { chat });
  })
);

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// new- show route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError(500, "chat Not Found"));
    }
    res.render("edit.ejs", { chat });
  })
);

app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, msg } = req.body;
    //   console.log(from, to, msg);

    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat.save();

    res.redirect("/chats");
  })
);

app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    // console.log(id);
    let chat = await Chat.findById(id);
    // console.log(chat);
    res.render(`edit.ejs`, { chat });
  })
);

app.put(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { newmsg } = req.body;
    // console.log(newmsg);
    await Chat.findByIdAndUpdate(id, { msg: newmsg });
    res.redirect("/chats");
  })
);

app.delete(
  "/chat/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  })
);

// Error handlling midellware
app.use((err, req, res, next) => {
  let { status = 500, message = `Some Error Occurred` } = err;
  res.status(status).send(message);
});

const port = 8080;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
