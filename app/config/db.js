const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./tutorials.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error("Could not connect to database", err);
    } else {
      console.log("Connected to SQLite database");
    }
  }
);

const sql = `CREATE TABLE IF NOT EXISTS tutorials(
id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
title TEXT NOT NULL,
description TEXT,
published INTEGER  CHECK(published IN (0,1)) DEFAULT 0);`;

db.run(sql, [], (err) => {
  if (err) {
    console.log(err.maessage);
    return;
  }
  console.log("table created or already exist");
});

module.exports = db;
