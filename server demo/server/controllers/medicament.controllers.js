const {medicament }= require("../models/medicament.model")
module.exports.findallmedicament = (req,res) => {
    medicament.find()
    .then(allmedicament => {
        console.log(allmedicament)
        res.json({allmedicament})
    })
    .catch(err =>{res.json({message:"wait a minute😊"})})
}