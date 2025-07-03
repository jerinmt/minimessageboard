#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user VARCHAR ( 20 ) NOT NULL,
  message VARCHAR ( 255 ) NOT NULL,
  added DATETIME
);

INSERT INTO messages (user, message) 
VALUES
  ('Jerin', 'Hi there!')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,//environment variable
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();