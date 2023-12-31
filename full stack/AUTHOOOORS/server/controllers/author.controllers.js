const {Author } = require('../models/author.models');

module.exports.create= (req, res) => {
    
    Author.create(req.body)
        .then(newauthor => {
            res.json({newauthor })
        })
        .catch(err => res.status(400).json(err ))
}

module.exports.getAll = (request, response) => {
    Author.find({})
        .then(objects => response.json(objects))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updated => response.json(updated))
        .catch(err => response.json(err))
}

module.exports.delete = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
