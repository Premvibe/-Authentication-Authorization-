const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const path = require('path');
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/create', async (req, res) => {
  try {
    const { username, email, password, age } = req.body;

    // 1️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2️⃣ Create user
    const createdUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
      age
    });

    // 3️⃣ Send safe response
    res.status(201).send({
      message: "User created successfully",
      user: {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        age: createdUser.age
      }
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
