const express = require("express");
const {
  insertTutorial,
  getAllTutorails,
  deleteAllTutorials,
  getTutorialByID,
  getAllPublishedTutorials,
  updateTutorialById,
  deleteTutorialById,
} = require("../controllers/tutorailControllers.js");

const router = express.Router();

router.get("/", getAllTutorails);

router.get("/published", getAllPublishedTutorials);

router.get("/:id", getTutorialByID);

router.post("/", insertTutorial);

router.put("/:id", updateTutorialById);

router.delete("/:id", deleteTutorialById);

router.delete("/", deleteAllTutorials);

module.exports = router;
