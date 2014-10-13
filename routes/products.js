'use strict';

module.exports = function (server, models, HttpStatus) {
  var Product = models.Product;

  server.get('/products', function (req, res, next) {
    Product
      .all()
      .then(function (data) {
        res.send(data);
      })
      .catch(function (err) {
        next(err);
      });
  });

  server.get('/products/:id', function (req, res, next) {
    Product
      .find({ where: { id: req.params.id } })
      .then(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : data);
      })
      .catch(function (err) {
        next(err);
      });
  });

  server.post('/products', function (req, res, next) {
    Product
      .build({
        name: req.body.name,
        price: req.body.price
      })
      .save()
      .then(function (data) {
        res.send(HttpStatus.CREATED, data);
      })
      .catch(function (err) {
        next(err);
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
      .then(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT);
      })
      .catch(function (err) {
        next(err);
      });
  });

  server.del('/products/:id', function (req, res, next) {
    Product
      .destroy({ where: { id: req.params.id } })
      .then(function (data) {
        res.send(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT);
      })
      .catch(function (err) {
        next(err);
      });
  });
};
