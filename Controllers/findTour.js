const Tour = require("../Schema/tour.schema");

const findTour = async (req, res) => {
  try {
    const result = await Tour.findById(req?.params?.id);
    res.send(result);
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};
module.exports = findTour;
