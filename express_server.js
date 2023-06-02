const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Start the server
app.listen(8082, () => {
    console.log('Server is running on port 8082');
});