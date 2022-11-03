const Tour = require("../Schema/tour.schema");

const increaseView = async (req, res, next) => {
  try {
    const { id } = req?.params;
    console.log(id);
    const result = await Tour.updateOne({ _id: id }, { $inc: { __v: 1 } });
    next();
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = increaseView;
