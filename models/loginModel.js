// CREATE LOGIN SCHEMA //

const mongoose = require('mongoose')


const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        ref: 'Register'
    }

})

module.exports = mongoose.model("Login", loginSchema)