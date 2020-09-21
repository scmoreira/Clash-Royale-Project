const mongoose = require("mongoose")
const Schema = mongoose.Schema

const locationSchema = new Schema ({

    id: Number,
    name: {
        type: String,
        lowercase: true
    }
}, {
    timestamps: true
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location