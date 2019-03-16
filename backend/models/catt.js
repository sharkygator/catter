const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cattSchema = new Schema({
    content: String,
    userId: String,
    imgUrl: String
});

module.exports = mongoose.model('Catt', cattSchema);
