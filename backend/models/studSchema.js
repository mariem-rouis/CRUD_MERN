const mongoose = require('mongoose');

const studScchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
    ,
    mobile: {
        type: Number,
        required: true
    }
})

const students = new mongoose.model("students", studScchema)
module.exports = students