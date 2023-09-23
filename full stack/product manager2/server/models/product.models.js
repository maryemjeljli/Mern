const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required : [true , "{PATH} is required"]
    },
    price: { 
        type: String,
        required : [true , "{PATH} is required"]
    },
    description: { 
        type: String,
        required : [true , "{PATH} is required"]
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
