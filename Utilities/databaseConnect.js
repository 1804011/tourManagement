const mongoose = require("mongoose");
const connectDb = (db) => {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      db,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  } catch (e) {
    console.log("could not connect");
  }
};
module.exports = connectDb;
