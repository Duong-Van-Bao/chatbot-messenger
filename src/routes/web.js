const express = require('express');
const homeController = require('../controllers/HomeController');

let router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)

    router.post('/webhook', homeController.postwebhook)
    router.get('/webhook', homeController.getwebhook)
    return app.use('/', router);
}

module.exports = initWebRoutes