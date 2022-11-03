const Tour = require("../Schema/tour.schema");

const updateTour = async (req, res) => {
  try {
    const { id } = req?.params;
    console.log(id);
    const result = await Tour.updateOne({ _id: id }, req.body, {
      runValidator: true,
    });
    res.send(result);
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};
module.exports = updateTour;
