const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const path = require('path');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken'); // ✅ keep ONLY this one

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/create', async (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) return res.status(500).send(err.message);

    let createdUser = await userModel.create({
      username,
      email,
      password: hash,
      age
    });

    let token = jwt.sign({ email }, "shhhhhhhhh");
    res.cookie('token', token);

    res.send(createdUser);
  });
});
app.get('/login', async  function(req, res) {
  res.render('login');

})

app.get('/logout', function(req, res) {
  

})

app.listen(3000);
