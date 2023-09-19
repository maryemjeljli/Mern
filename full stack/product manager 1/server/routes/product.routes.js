const productcontrollers = require("../controllers/product.controllers")
module.exports =(app) => {
    app.post("/api/product",productcontrollers.addproduct)
    app.get("/api/product",productcontrollers.findall)
}