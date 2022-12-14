const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },


    createdAt: {
        type: Date,
        default: Date.now
    }

});

const userModel = mongoose.model("User", schema);
module.exports = userModel;