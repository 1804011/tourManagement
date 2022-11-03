console.clear();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv");
const Tour = require("./Schema/tour.schema");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const allTours = require("./Routes/tours");
const updateTour = require("./Routes/tour");
const connectDb = require("./Utilities/databaseConnect");

//middleware
app.use(express.json());
app.use(cors());
//connection to database
const uri = `mongodb+srv://Sharif:ZTYBWc7E1EhuiiUT@cluster0.rqpspsr.mongodb.net/tourMs?retryWrites=true&w=majority`;
mongoose.connect(uri).then(() => {
  console.log("Database connected".bold.yellow);
});
//Routes
app.use("/api/v1/tours", allTours);
app.use("/api/v1/tour", updateTour);

app.get("/", (req, res) => {
  res.send("server is okk!");
});
app.listen(port, (err) => console.log("listening to port 5000".bold.red));
