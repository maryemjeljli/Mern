const mongoose = require("mongoose")
const product = process.env.DB 

mongoose.connect(`mongodb://127.0.0.1:27017/${product}`)
    .then(()=> console.log(`established a connection to the database ${product}`))
    .catch(err =>console.log('something went wrong when connecting to the database ', err))

