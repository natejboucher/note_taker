const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { findById, createNewNote } = require('../lib/notes.js');

let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
// displayes all notes data
router.get('/notes', (req, res) => {
    return res.json(notes);
});
// displays note data by id
router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});
// create new note
router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;
