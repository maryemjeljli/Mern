const {jokes }= require("../models/jokes.models")
module.exports.addjokes = (req,res) => {
    product.create(req.body)
    .then(alljokes => {
        console.log(alljokes)
        res.json({alljokes})
    })
    .catch(err =>{res.json({message:"wait a minute😊"})})
}
module.exports.findall = (req,res) => {
    product.find()
    .then(alljokes => {
        console.log(alljokes)
        res.json({alljokes})
    })
    .catch(err =>{res.json({message:"wait a minute😊"})})
}
