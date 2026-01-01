const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

// Sample route
app.get('/', (req, res) => {

  res.send('done');
});

app.get('/read', (req, res) => {

  res.send('read');
});

// Start the server
app.listen(3000);