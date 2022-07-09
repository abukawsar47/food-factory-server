const mongoose = require("mongoose");
const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Employee", employeeSchema);
