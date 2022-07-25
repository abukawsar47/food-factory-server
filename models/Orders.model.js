const mongoose = require("mongoose");
const reviewsSchema = mongoose.Schema({
  productId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
    require: true,
  },
  orderQuantity: {
    type: Number,
    require: true,
  },
  consumerEmail: {
    type: String,
    require: true,
  },
  consumerName: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Order", reviewsSchema);
