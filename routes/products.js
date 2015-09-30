'use strict';

module.exports = (app, models, HttpStatus) => {
  const Product = models.Product;

  app.get('/products', (req, res, next) => {
    Product
      .all()
      .then(data => res.send(data))
      .catch(err => next(err));
  });

  app.get('/products/:id', (req, res, next) => {
    Product
      .find({ where: { id: req.params.id } })
      .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : data))
      .catch(err => next(err));
  });

  app.post('/products', (req, res, next) => {
    Product
      .build({
        name: req.body.name,
        price: req.body.price
      })
      .save()
      .then(data => res.send(HttpStatus.CREATED, data))
      .catch(err => next(err));
  });

  app.put('/products/:id', (req, res, next) => {
    Product
      .update({
        name: req.body.name,
        price: req.body.price
      }, {
        where: { id: req.params.id }
      })
      .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT))
      .catch(err => next(err));
  });

  app.delete('/products/:id', (req, res, next) => {
    Product
      .destroy({ where: { id: req.params.id } })
      .then(data => res.send(data === null ? HttpStatus.NOT_FOUND : HttpStatus.NO_CONTENT))
      .catch(err => next(err));
  });
};
