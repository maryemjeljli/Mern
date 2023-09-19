const jokescontrollers = require("../controllers/jokes.controllers")
module.exports =(app) => {
    app.post("/api/jokes",jokescontrollers.addjokes)
    app.get("/api/jokes",jokescontrollers.findall)
}