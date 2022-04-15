const fs = require('fs');
const path = require('path');
const fileRoutes = fs.readdirSync(path.join(__dirname, './routes')).filter(file => file.endsWith('.js'));

module.exports = (app) => {
    for (file of fileRoutes) {
        const route = require(path.join(__dirname, `/routes/${file}`));
        route(app);
    }
}