var path     = require('path');
var settings = {};

// global config
settings.root            = path.normalize(__dirname + '/..');
settings.httpControllers = path.join(settings.root, '/controllers/http/');
settings.port            = process.env.PORT || 5000;
settings.mongodb         = 'mongodb://yuton:5Wc6qe8k6LYhyyrK@ds061374.mongolab.com:61374/yuton';
settings.session         = { secret: '5gQYMrjbFrcLVa9jnVuTsCEb', resave: false, saveUninitialized: true };
settings.bodyParser      = { json: '2mb' , urlEncoded: { 'extended' : true }}
settings.env             = typeof process.env.NODE_ENV == 'undefined' ? 'development' : process.env.NODE_ENV.trim();

// override config
switch (settings.env) {
    case 'development':
        break;

    case 'staging':
        break;

    case 'production':
        break;
}

process.env.root = settings.root;
module.exports   = settings;
