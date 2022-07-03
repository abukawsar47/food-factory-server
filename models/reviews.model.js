const mongoose = require("mongoose");
const reviewsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    profession: {
        type: String,
        require: true,
    },
    ratting: {
        type: Number,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
});
module.exports = mongoose.model("Testimonial", reviewsSchema);
