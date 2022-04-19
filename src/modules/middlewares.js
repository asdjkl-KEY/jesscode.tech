const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')

module.exports = (app) => {
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(session({
        secret: 'key-asd-jkl',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

}