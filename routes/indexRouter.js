const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();
const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New" },
];

indexRouter.get("/", (req, res) => {
  const currentMessages = db.getAllMessages();
  const messages = Object.values(currentMessages);
  res.render("index", { links: links, messages: messages });
});
indexRouter.get("/new", (req, res) =>   res.render("form", { links: links }));
indexRouter.post("/new", (req, res) => {
    const authorName = req.body.authorName;
    const newMessage = req.body.newMessage;
    const addedDate = new Date();
    db.enterNewMessage(authorName, newMessage, addedDate);
    res.redirect("/");
});

module.exports = indexRouter;