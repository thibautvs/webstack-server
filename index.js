var restify = require('restify');
var server = restify.createServer({name: 'API'});

server.use(restify.fullResponse())
      .use(restify.bodyParser());

var products = [
  {id: 1, name: 'Macbook Pro retina', price: 3000},
  {id: 2, name: 'iPhone', price: 900},
  {id: 3, name: 'iPad', price: 700},
];

server.get('/products', function (req, res, next) {
  console.log('[GET] all products');
  res.send(products);
});

server.get('/products/:id', function (req, res, next) {
  console.log('[GET] product id ' + req.params.id);
  var product = null;
  for (var i=0 ; i<products.length ; i++) {
    if (products[i].id == req.params.id) {
      product = products[i];
      break;
    }
  }
  res.send(product);
});

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
