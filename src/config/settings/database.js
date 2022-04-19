const connect = require('./connect.js');
const uris = ['works'];
const mongoose = require('mongoose');

module.exports = () => {
    for(uri of uris) {
        const url = 'mongodb://localhost/'+ uri;
        connect(mongoose, url)
    }
}