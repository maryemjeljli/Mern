const mongoose = require("mongoose")
const medicamentschema =new mongoose.Schema({
    name :{
        type: String, 
        required :[true ,"the  name of the medicament is required"]
    },
    price :{
        type:Number,
        required:[true,"the price of the medicament is required"],
    }
}, {timestamps : true});

module.exports.medicament= mongoose.model("medicament",medicamentschema)