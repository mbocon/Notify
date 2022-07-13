// import dependencies

// import models
const Note = require('../models/note');

// initialize router object
// const express = require('express');
// const router = express.Router(); // Router() is a Contstructor - which is a function that is used to create an object

const router = require('express').Router() // inline require statement same as two lines above
// define routes

// INDUCES

// Index GET /notes - show all notes
router.get('/', (req, res) => {
    Note.find({}, (err, notes) => {
        if (err) {
            console.error(err)
        } else {
            res.render('index', { notes })
        }
    })
});


// New GET /notes/new - show form to create a new note

// Delete DELETE /notes/:id - delete a note

// Update PUT /notes/:id/ - show form to edit an existing note

// Create POST /notes - create a new note

// Edit GET /notes/:id/edit - show form to edit an existing note

// Show GET /notes/:id - show a single note

// export the router object

module.exports = router;