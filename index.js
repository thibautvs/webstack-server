'use strict';

var restify = require('restify');
var models = require('./models');
var routes = require('./routes');

var server = restify.createServer({name: 'API'});
server
  .use(restify.fullResponse())
  .use(restify.bodyParser());

routes(server, models);

models.sequelize.sync().then(function () {
  server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
  });
})
