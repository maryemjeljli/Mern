const express= require("express")

const app= express()

app.use(express.json(),express.urlencoded({ extended : true}))

require("dotenv").config()
require("./config/mongoose.config")
require("./routes/medicament.routes")(app)

const port = process.env.port



app.listen(port, () => {
    console.log(`>>>>> server is running on port ${port}` )
})
