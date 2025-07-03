const db = require("../db/queries");

async function usernamesGet(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function newUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function searchUsernamesGet(req, res) {
  const searchItem = `%${req.query.search}%`;
  const usernames = await db.seachUsername(searchItem);
  if(usernames.length > 0) {
    res.send("Search result: " + usernames.map(user => user.username).join(", "));
  }
  else {
    res.send("No results found");
  }
}

async function deleteAll(req, res) {
  await db.deleteAllEntries();
  res.send("All entries deleted");
}

module.exports = {
  usernamesGet, newUsernamePost, searchUsernamesGet, deleteAll
};