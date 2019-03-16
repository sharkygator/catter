const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    avatarUrl: String,
    bgUrl: String,
    password: String,
    follows: [String],
});

module.exports = mongoose.model('User', userSchema);
