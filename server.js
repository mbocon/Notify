// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const notesRouter = require('./controllers/notes');
require('dotenv').config();

// initialize the express app
const app = express();

// configure application settings

//  connect to the database
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connected to mongoose');
})
db.on('disconnected', () => {
    console.log('disconnected from mongoDB');
})

// mount middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// mount routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.use('/notes', notesRouter);

// tell the app to listen for requests from the client

// ? why do we do this ?
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Express is listening for request on port:${port}`);
});