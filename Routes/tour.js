const express = require("express");
const findTour = require("../Controllers/findTour");
const { findTrending, findCheapest } = require("../Controllers/findTrending");
const updateTour = require("../Controllers/updateTour");
const increaseView = require("../Middlewares/viewCount");
const routes = express.Router();

routes.get("/trending", findTrending);
routes.get("/cheapest", findCheapest);
routes.get("/:id", increaseView, findTour);
routes.patch("/:id", updateTour);
module.exports = routes;
