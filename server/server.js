// server.js

// Import necessary packages
const express = require('express');
const cors = require('cors');

// Create an Express app
const app = express();

// Define the port
const port = process.env.PORT || 5000;

// Use middleware
app.use(cors()); // Enable Cross-Origin Request Sharing (CORS)
app.use(express.json()); // Middleware to parse JSON data in requests

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, World! Your Express app is running.');
});

// Another example route
app.get('/api', (req, res) => {
  res.json({ message: "This is a sample API response" });
});

// Define a POST route example
app.post('/api/data', (req, res) => {
  const data = req.body; // Access the sent data
  res.json({ message: "Data received successfully", data });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
