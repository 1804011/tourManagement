const express = require("express");
const getTours = require("../Controllers/getAllTours.controllers");
const postTour = require("../Controllers/postTour");
const routes = express.Router();
routes.get("/", getTours);
routes.post("/", postTour);
module.exports = routes;
