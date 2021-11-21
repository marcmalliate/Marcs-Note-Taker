// Import express and routes required
const express = require('express');
const path = require('path');
const api = require('./routes/index');

// Initialise the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('./api', api);
app.use('/', htmlRoutes);

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

//GET route for notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//GET wildcard route to redirect back to the  homepage 
app.get('*', (req, res) => res.redirect('/'));


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));