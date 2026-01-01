const express = require('express');
const app = express();


// Sample route
app.get('/', (req, res) => {
  res.cookie("name", "Prem");
  res.send('done');
});

// Start the server
app.listen(3000);