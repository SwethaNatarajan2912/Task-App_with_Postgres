const express = require("express")
const router = express.Router();
const tutorials = require("../controllers/tutorial.controller.js");

// Create a new notes
router.post("/api/notes", tutorials.create);

// Retrieve all notes
router.get("/api/notestitle", tutorials.findAll);

// Retrieve all published notes
router.get("/published", tutorials.findAllPublished);

// Retrieve a single note with id
router.get("/:id", tutorials.findOne);

// Update a note with id
router.put("/:id", tutorials.update);

// Delete a note with id
router.delete("/:id", tutorials.delete);

// Create a new note
router.delete("/", tutorials.deleteAll);

module.exports = router