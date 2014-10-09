'use strict';

module.exports = function (server, models) {

  server.get('/products', function (req, res, next) {
    models.Product
      .all()
      .error(function (err) {
        res.send(500);
      })
      .success(function (data) {
        res.send(data);
      });
  });

  server.get('/products/:id', function (req, res, next) {
    models.Product
      .find({ where: { id: req.params.id } })
      .error(function (err) {
        res.send(500);
      })
      .success(function (data) {
        res.send(data === null ? 404 : data);
      });
  });
};
