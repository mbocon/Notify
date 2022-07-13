// require dependences
const mongoose = require('mongoose');

// initialize a shortcut variable
const Schema = mongoose.Schema;

// define the schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    bookmarked: Boolean
}, { timestamps: true });

// export the model to be used within our controller

 module.exports = mongoose.model('Note', noteSchema);

/*
    Model === Note

    The Model is nothing more than
    a special object with methods
    that allow us to perform
    CRUD on a specific collection 
    within a database.

    The model can covert
    a standard JavaScript object into
    a document in a MongoDB database collection

    This is why mongoose is referred to as an ODM

    Model.create()
    Model.find()
    Model.findById()
    Model.findByIdAndDelete()
    Model.deleteMany()
    Model.findByIdAndUpdate()
    Model.findByIdAndModify()
    Model.findByIdAndRemove()

*/

