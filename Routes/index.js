const express = require('express');
const { Product } = require('../db/Product').models
const route = express.Router();

route.get('/products', async (req, res, next) => {
    const products = await Product.findAll();
    res.send(products)
})

route.post('/products', (req, res, next) => {
    const newProduct = req.body
    Product.create(newProduct)
    .then((product) => res.send(product))
    .catch((error) => next(error))
})

route.delete('/products/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then((product) => product.destroy()
    .then(() => res.sendStatus(204)))
    .catch((error) => next(error));
})

module.exports = route