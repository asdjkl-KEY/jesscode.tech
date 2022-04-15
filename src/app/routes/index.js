const object = require('../../database/articles.json');
const works = require('../../database/works.json');
const recentPost = [];
const recentWorks = [];
for (let i = 1; i < 4; i++) {
    recentPost.push(object[object.length - i]);
    recentWorks.push(works[works.length - i]);
}
let year = new Date().getFullYear();


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', {
            path: '',
            recentArticles: recentPost,
            year: year,
            recentWorks: recentWorks
        })
    })
}