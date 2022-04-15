const { response, request } = require("express");
const Product = require("../models/product.model");

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.listProducts = (request, response) => {
    Product.find()
        .then(products => response.json(products))
        .catch(err => response.json(err));
}

