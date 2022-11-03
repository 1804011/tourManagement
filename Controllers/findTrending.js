const Tour = require("../Schema/tour.schema");
const findTrending = async (req, res) => {
  try {
    const result = await Tour.find({}).sort({ __v: -1 }).limit(3);
    res.send(result);
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};
const findCheapest = async (req, res) => {
  try {
    const result = await Tour.find({}).sort({ cost: 1 }).limit(3);
    res.send(result);
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};
module.exports = { findTrending, findCheapest };
