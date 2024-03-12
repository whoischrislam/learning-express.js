// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Process form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const color = req.body.color;
    res.render('greeting', { name, color });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
