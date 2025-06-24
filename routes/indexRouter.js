const { Router } = require("express");

const indexRouter = Router();
const messages = [
    {
        text: "Hi there!",
        user: "Jerin",
        added: new Date()
    },
    {
        text: "Hello!",
        user: "Akku",
        added: new Date()
    }
];
const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New" },
];


indexRouter.get("/", (req, res) => res.render("index", { links: links, messages: messages }));
indexRouter.get("/new", (req, res) =>   res.render("form", { links: links }));
indexRouter.post("/new", (req, res) => {
    const authorName = req.body.authorName;
    const newMessage = req.body.newMessage;
    messages.push({text: newMessage, user: authorName, added: new Date()});
    res.redirect("/");
});

module.exports = indexRouter;