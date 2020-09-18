const { ObjectID } = require("mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    cards: [{
        type: Schema.Types.ObjectID,
        ref: 'Card'
    }]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User