const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required : [true ,"name is required"],
        minlength :[3,"the name must be at least 3caracters long"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Product',AuthorSchema );
