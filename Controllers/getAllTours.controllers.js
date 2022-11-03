const Tour = require("../Schema/tour.schema");

const getTours = async (req, res) => {
  try {
    const queries = req.query;
    let { fields, sort, page = 1, limit = 3 } = queries;
    console.log(fields?.split(",")?.join(" "));
    let result = await Tour.find({})
      .skip((page - 1) * (limit * 1))
      .limit(parseInt(limit))
      .select(fields?.split(",")?.join(" ") || "")
      .sort(sort?.split(",")?.join(" ") || "");

    res.send(result);
  } catch (error) {
    res.send({
      status: "failed",
      message: error.message,
    });
  }
};
module.exports = getTours;
