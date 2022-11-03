const mongoose = require("mongoose");
const tourSchema = mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Name must be unique"],
    minLength: 5,
    maxLength: 30,
    require: true,
  },
  image: {
    type: String,
    required: [true, "Link of image must be provided"],
  },
  guideName: {
    type: String,
  },
  cost: {
    type: Number,
    required: [true, "Cost must be provided"],
  },
  groupSize: {
    type: Number,
  },
});
// const To
const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
