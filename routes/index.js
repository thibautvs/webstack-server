'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function (server, models) {
  fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function (file) {
      require(path.join(__dirname, file))(server, models);
    });
};
