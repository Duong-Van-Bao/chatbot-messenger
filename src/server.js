 const express = require('express');
 const bodyParser = require('body-parser');
 const configViewEngine = require('./configs/viewEngine');
 const initWebRoutes = require('./routes/web');

 let app = express();

 //config  view Engine
 configViewEngine(app);

 //config web routes
 initWebRoutes(app);

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }))

 let port = process.env.PORT || 8080;

 app.listen(port, () => {
     console.log("App is running at the port:" + port);
 })