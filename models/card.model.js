const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema({
    name: String,
    id: Number,
    maxLevel: String,
    iconUrls: {
        medium: String
    }
}, {
    timestamps: true
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card