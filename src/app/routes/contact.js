module.exports = (app) => {
    app.get('/contact', (req, res) => {
        res.render('contact', {
            path: "",
            year: 2022,
            message: req.flash('errorMessage')
        })
    })
}