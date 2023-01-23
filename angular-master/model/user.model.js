const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile:{
        type: String,
        default: ''
    }
});

module.exports = mongoose.model("user",userSchema);