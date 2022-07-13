// Dependencies
const express = require('express');

// Initialize the Express App
const app = express();

// Configure application settings

// Mount middleware

// Mount routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

// Tell the app to listen for requests from the client
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})