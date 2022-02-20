const fs = require('fs');
const path = require('path');
//let notes = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
};

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return note;
};

module.exports = { findById, createNewNote };