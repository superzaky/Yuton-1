// dependencies
var config        = require('./config/settings');
var safinia       = require('safinia');
var express       = require('express');
var session       = require('express-session')(config.session);
var bodyParser    = require('body-parser');
var app           = express();
var server        = require('http').Server(app);
var mongoose      = require('mongoose');
var httpRoutes    = require('./config/routes.http');

// middleware
app.use(session);
app.use(bodyParser.json(config.bodyParser.json));
app.use(bodyParser.urlencoded(config.bodyParser.urlEncoded));

//routers
app.use(safinia.web.router(httpRoutes, config.httpControllers, app));

// databases
mongoose.connect(config.mongodb);

// server
server.listen(config.port, function () {
    console.log('Server is listening at port ' + config.port);
});
