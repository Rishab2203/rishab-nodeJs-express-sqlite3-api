const db = require("../config/db.js");

const getAll = (cb) => {
  db.all("SELECT * FROM tutorials", [], (err, rows) => {
    cb(err, rows);
  });
};

const insert = ({ title, description, published }, cb) => {
  db.run(
    "INSERT INTO tutorials (title ,description,published) VALUES(?,?,?)",
    [title, description, published],
    (err) => {
      cb(err);
    }
  );
};
const findById = (id, cb) => {
  db.get("SELECT * FROM tutorials WHERE id = ?", [id], (err, row) => {
    console.log(err, row);
    cb(err, row);
  });
};

const deleteById = (id, cb) => {
  db.run("DELETE FROM tutorials WHERE id = ? ", [id], (err) => {
    cb(err);
  });
};

const deleteAll = (cb) => {
  db.run("DELETE FROM tutorials ", (err) => {
    cb(err);
  });
};

const allPublished = (cb) => {
  db.all("SELECT * FROM tutorials WHERE  published = 1 ", [], (err, rows) => {
    cb(err, rows);
  });
};

const upDateByID = (id, { title, description, published }, cb) => {
  db.run(
    "UPDATE tutorials SET title = ? , description = ?, published = ?  WHERE id = ?",
    [title, description, published, id],
    (err) => {
      cb(err);
    }
  );
};

module.exports = {
  upDateByID,
  allPublished,
  insert,
  deleteAll,
  deleteById,
  getAll,
  findById,
};
