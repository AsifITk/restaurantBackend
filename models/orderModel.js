const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    }
    items: [],
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const orderModel = mongoose.model("Order", Schema);
module.exports = orderModel;