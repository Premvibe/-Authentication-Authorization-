const mongoose = require('mongoose');
mongoose.connect(`mongodb:// localhost:127.0.0.1.27017/myapp`);

const userSchema = new mongoose.Schema({
    username: String,
    email : String,
    password: String,
    age: Number 
});

model.exports = mongoose.model('User', userSchema);