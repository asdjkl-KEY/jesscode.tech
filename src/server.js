const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const middlewares = require('./modules/middlewares');
const router = require('./app/router');

app.set('views', path.join(__dirname, '../src/views'));

//middlewares
middlewares(app);

//rutas
router(app)

app.listen(port, () => {
    console.log(`Server Opened on port ${port}`)
});