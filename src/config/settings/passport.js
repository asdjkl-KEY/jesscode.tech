const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
        done(err, user);
        });
    }); 

    //!Apartado de Registro//
    passport.use('local-register', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback : true
    },
    function (req, username, password, done) { 
        if(!req.body) return done("Hubo un error", false)
    }));
    //!Apartado de Login//
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function (req, username, password, done) {
        
    }));
    //!Apartado de Admin login//
    passport.use('admin-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function (req, username, password, done) {
    
    }))
}