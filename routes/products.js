'use strict';

module.exports = function (server, models, HttpStatus) {
  var Product = models.Product;

  server.get('/products', function (req, res, next) {
    Product
      .all()
      .success(function (data) {
        res.send(data);
      })
      .error(function (err) {
        res.send(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  });

  server.get('/products/:id', function (req, res, next) {
    Product
      .find({ where: { id: req.params.id } })
      .success(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : data);
      })
      .error(function (err) {
        res.send(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  });

  server.post('/products', function (req, res, next) {
    Product
      .build({
        name: req.body.name,
        price: req.body.price
      })
      .save()
      .success(function (data) {
        res.send(HttpStatus.CREATED, data);
      })
      .error(function (err) {
        res.send(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  });

  server.put('/products/:id', function (req, res, next) {
    Product
      .update({
        name: req.body.name,
        price: req.body.price
      }, {
        where: { id: req.params.id }
      })
      .success(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT);
      })
      .error(function (err) {
        res.send(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  });

  server.del('/products/:id', function (req, res, next) {
    Product
      .destroy({ where: { id: req.params.id } })
      .success(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT);
      })
      .error(function (err) {
        res.send(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  });
};
