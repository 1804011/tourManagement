const Tour = require("../Schema/tour.schema");

const postTour = async (req, res) => {
  try {
    const result = await Tour.create(req.body);
    res.send(result);
  } catch (error) {
    res.send({
      status: "failed",
      message: error?.message,
    });
  }
};
module.exports = postTour;
