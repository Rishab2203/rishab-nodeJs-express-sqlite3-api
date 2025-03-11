const {
  upDateByID,
  allPublished,
  insert,
  deleteAll,
  deleteById,
  getAll,
  findById,
} = require("../models/tutorial.model.js");

const getAllTutorails = (req, res) => {
  getAll((err, rows) => {
    if (err) {
      console.log("Error getting all tutorials:", err.message);
      res
        .status(500)
        .json({ message: "database error in fetching tutorials. " });
      return;
    }

    res.status(200).json(rows);
  });
};

const insertTutorial = (req, res) => {
  let inputs = req.body;
  insert(inputs, (err) => {
    if (err) {
      console.log("Error insertng  tutorial:", err.message);
      res.status(500).send("database error in inserting tutorial");
      return;
    }
    res.status(200).json({ message: "new tutorial data inserted" });
  });
};

const deleteAllTutorials = (req, res) => {
  deleteAll((err) => {
    if (err) {
      console.log("Error deleting all tutorials:", err.message);
      res.status(500).send("database error in deleting tutorials. ");
    }
    res.status(200).json({ message: "all tutorials deleted." });
  });
};

const deleteTutorialById = (req, res) => {
  let id = req.params.id;
  deleteById(id, (err) => {
    if (err) {
      console.log("Error deleting all tutorials:", err.message);
      res.status(500).send("database error in deleting data of id. ", id);
    }
    res
      .status(200)
      .json({ message: `Data of Tutorial of id ${id} deleted successfuly. ` });
  });
};

const getTutorialByID = (req, res) => {
  let id = req.params.id;
  findById(id, (err, row) => {
    if (err) {
      console.log("Error getting  tutorial data of id.", id, err.message);
      res
        .status(500)
        .json({ message: `database error in getting data of id ${id}. ` });
      return;
    }
    if (!err && !row) {
      res.json({ message: `No data found related to ${id}` });
      return;
    }
    res.status(200).json(row);
  });
};

const updateTutorialById = (req, res) => {
  let id = req.params.id;
  let inputs = req.body;
  upDateByID(id, inputs, (err) => {
    if (err) {
      console.log("Error updating tutorial of id.:", id, err.message);
      res.status(500).json({ message: "Database error in updating data." });
      return;
    }
    res.status(200).json({ message: "Data updated successfully." });
  });
};

const getAllPublishedTutorials = (req, res) => {
  allPublished((err, rows) => {
    if (err) {
      console.log("Error getting all published tutorials", err.message);
      res
        .status(500)
        .json({ message: "Database error getting all published tutorials." });
      return;
    }
    if (!err && !rows) {
      res.json({ message: `No data found.` });
      return;
    }

    res.status(200).json(rows);
  });
};

module.exports = {
  insertTutorial,
  getAllTutorails,
  deleteAllTutorials,
  getTutorialByID,
  getAllPublishedTutorials,
  updateTutorialById,
  deleteTutorialById,
};
