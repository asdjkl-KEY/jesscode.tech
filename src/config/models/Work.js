const mongoose = require('mongoose');
const workSchema = mongoose.Schema({
    name: String,
    image: String,
    link: String
})
const workModel = mongoose.model('Work', workSchema);

module.exports = workModel;