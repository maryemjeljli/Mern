const {product }= require("../models/product.models")
module.exports.addproduct = (req,res) => {
    product.create(req.body)
    .then(allproduct => {
        console.log(allproduct)
        res.json({allproduct})
    })
    .catch(err =>{res.json({message:"wait a minute😊"})})
}
module.exports.findall = (req,res) => {
    product.find()
    .then(allproduct => {
        console.log(allproduct)
        res.json({allproduct})
    })
    .catch(err =>{res.json({message:"wait a minute😊"})})
}
module.exports.UpdateNewProduct =  (req, res) => {
    Food.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(UpdateNewProduct => { res.json({ UpdateNewProduct}) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}