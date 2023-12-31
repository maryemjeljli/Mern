const { Product } = require('../models/product.models');

module.exports.create = (request, response) => {
    const { title, price,description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(object => response.json(object))
        .catch(err => response.json(err));
}

module.exports.getAll = (request, response) => {
    Product.find({})
        .then(objects => response.json(objects))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updated => response.json(updated))
        .catch(err => response.json(err))
}

module.exports.delete = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
