const works = require('../../database/works.json');
let recentWorks = [];
for (let i = 1; i < 4; i++) {
    recentWorks.push(works[works.length - i]);
}
const allworks = require('../../database/allworks.json');
let pages = [];
if (Math.fround(allworks.length/10) > Math.floor(allworks.length/10)) {
    for(let i = 1; i < Math.floor(allworks.length/10) +2; i++) {
        pages.push(i)
    }
}
function sendWorks(page, list) {
    let result = [];
    for( let i = (page * 10) - 10; i < (page * 10); i++) {
        if(list[i] == undefined) {
            return result;
        }
        result.push(list[i]);
    }
    return result;
}

module.exports = (app) => {
    app.get("/works/:page", (req, res) => {
        let page = req.params.page;
        let prev = parseInt(page)-1;
        let next = parseInt(page)+1;
        console.log(pages)
        if(allworks.length < (page * 10) - 10) return res.status(404).send("No found");
        ws = sendWorks(page, allworks);
        let finalpage = pages.length
        res.render('works', {
            path: "/",
            recentWorks,
            ws,
            page,
            pages,
            finalpage,prev,next
        })
        console.log(req.params.page)
    })
    app.get('/works', (req, res) => {
        res.redirect('/works/1');
    })
}