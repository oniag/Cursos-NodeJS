const express = require('express');
const routes = express.Router();

//Rotas de produtos;
const ProductController = require('./controllers/ProductController');
routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/product/:id', ProductController.update);
routes.delete('product/:id', ProductController.destroy);


// exporta as rotas;
module.exports = routes;