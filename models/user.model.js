const { ObjectID } = require("mongodb")
const mongoose = require("mongoose")
const { stringify } = require("qs")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { 
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cards: [Number]
    
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User