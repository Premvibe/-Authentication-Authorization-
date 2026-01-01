const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sample route
app.get('/', function (req, res) {
  let token = jwt.sign({email : "prem@example.com"}, "secret" );
  console.log(token);




  // const result = bcrypt.compareSync(
  //   "pololololoo",
  //   "$2b$10$CpREqW5azU.I/tFfpPm3k.4XE9yLMeprSlKPtngWWprJKTVyIxLSm"
  // );

  // console.log(result); // true / false
  // res.send(result ? "Password Match" : "Password Incorrect");
});



// Start the server
app.listen(3000);