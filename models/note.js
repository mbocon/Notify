// Dependencies
const mongoose = require('mongoose');

// Initialize a shortcut variable
const Schema = mongoose.Schema;

// Define the Schema
const noteSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    bookmarked: { type: Boolean, default: false },
}, { timestamps: true });

// Export the Model to be used within our controller
module.exports = mongoose.model('Note', noteSchema);