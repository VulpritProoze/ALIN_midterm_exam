// Import express library
const express = require('express');
// Create an instance of express
const app = express();
// Define port
const port = 3000;

// Defining index route
app.get('/', (req, res) => {
    res.send("Go to /test route.");
});

// Defining the /test route
app.get('/test', (req, res) => {
    res.send("Express is working! Ram Railey Alin.");
});

// Starting the express server.
app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});