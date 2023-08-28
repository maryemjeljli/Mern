const medicamentcontrollers = require("../controllers/medicament.controllers")
console.log(medicamentcontrollers)

module.exports =(app) => {
    app.get("/api/medicament", medicamentcontrollers.findallmedicament)
}