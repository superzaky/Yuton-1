var pkg        = require(process.env.root + '/package.json');
var httpRoutes = require(process.env.root + '/config/routes.http');
var config     = require(process.env.root + '/config/settings');

module.exports =
{
    info: function (req, res) {
        res.json({
            name : pkg.name,
            version : pkg.version,
            description : pkg.description,
            env : process.env.NODE_ENV
        });
    },

    api: function (req, res) {
        var apis = [];

        httpRoutes.forEach(function (api) {
            if (api.resource.indexOf('/api') !== -1) {
                apis.push({
                    resource: api.resource,
                    method: api.method.toUpperCase()
                });
            }
        });

        res.json(apis);
    }
}
