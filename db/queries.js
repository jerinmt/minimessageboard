const pool = require("./pool");

async function getAllmessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function enterNewMessage(user, message, added) {
  await pool.query("INSERT INTO messages (user, message, added) VALUES ($1, $2, $3)", [user, message, added]);
}

module.exports = {
  getAllmessages,
  enterNewMessage
};