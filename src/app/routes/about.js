const badges = require('../../database/badges.json');
const curses = require('../../database/curses.json');

module.exports = (app) => {
    app.get('/about', (req, res) => {
        res.render("about", {
            path: "",
            badges,
            curses

        })
    })
}