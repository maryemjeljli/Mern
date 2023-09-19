const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String
    },
    punchline: {
        type: Number
    }

}, { timestamps: true })

module.exports.joke = mongoose.model("joke", JokeSchema)