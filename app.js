const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(require('cookie-parser')());
// Sample route
app.get('/', function (req, res) {
  let token = jwt.sign({email : "prem@example.com"}, "secret" );
  res.cookie('token', token);
res.send("Token set in cookie");


});

app.get('/read', function (req, res) {
 let data = jwt.verify(req.cookies.token , "secret");
console.log(data);


});

  // const result = bcrypt.compareSync(
  //   "pololololoo",
  //   "$2b$10$CpREqW5azU.I/tFfpPm3k.4XE9yLMeprSlKPtngWWprJKTVyIxLSm"
  // );

  // console.log(result); // true / false
  // res.send(result ? "Password Match" : "Password Incorrect");




// Start the server
app.listen(3000);