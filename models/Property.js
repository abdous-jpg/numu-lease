const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    title: String,
    price: Number,
    location: String,
    description: String,
    available: Boolean
});

module.exports = mongoose.model("Property", propertySchema);