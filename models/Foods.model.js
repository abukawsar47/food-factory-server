const mongoose = require("mongoose");
const foodsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
});
module.exports = mongoose.model("Foods", foodsSchema);
