const badges = require('../../database/badges.json');

module.exports = (app) => {
    app.get('/about', (req, res) => {
        res.render("about", {
            path: "",
            badges: badges
        })
    })
}