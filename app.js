//imports
const express = require("express");
//const newMessageRouter = require("./routes/newMessageRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");

//initialisations
const app = express();
const assetsPath = path.join(__dirname, "public");
require("dotenv").config();
//static fiiles
app.use(express.static(assetsPath));

//views setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//for form values
app.use(express.urlencoded({extended: true}));

//routing
//app.use("/new", newMessageRouter);
app.use("/", indexRouter);

// Error handling
app.get("/{*splat}", (req, res) => {
  res.send("Error 404: Page not found");
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});