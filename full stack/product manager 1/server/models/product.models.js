const mongoose = require("mongoose")
const productschema =new mongoose.Schema({
    title :{
        type: String, 
        required :[true ,"the  title of the product is required"]
    },
    price :{
        type:Number,
        required:[true,"the price of the product is required"],
    },
    description : {
        type : String,
        required :[true,"the description of the product is required"]
    }
}, {timestamps : true});

module.exports.product= mongoose.model("product",productschema)