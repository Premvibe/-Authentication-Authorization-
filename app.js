const express = require('express');
const app = express();
const userModel = require('./models/user');
const bcrypt = require('bcrypt');

const path = require('path');
const cookieParser = require('cookie-parser');

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) {
                console.error(err);
                return res.status(500).send('Error hashing password');
            }
            password = hash;
        });
    });

   let createdUser = await userModel.create({
    username,
    email,
    password,
    age
   });  
   res.send(createdUser); 
}
);

app.listen(3000);