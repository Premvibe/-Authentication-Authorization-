const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

// Sample route
app.get('/', function (req, res) {
  const result = bcrypt.compareSync(
    "pololololoo",
    "$2b$10$CpREqW5azU.I/tFfpPm3k.4XE9yLMeprSlKPtngWWprJKTVyIxLSm"
  );

  console.log(result); // true / false
  res.send(result ? "Password Match" : "Password Incorrect");
});



// Start the server
app.listen(3000);