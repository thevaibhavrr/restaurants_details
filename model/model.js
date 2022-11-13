const mongoose = require("mongoose");
const connection = require("../conifg/db");

const deatilsModel = new mongoose.Schema({
  name: String,
  special: String,
  type: String,
  rating: Number,
  location: String
});
let hotel = connection.model("restaurants", deatilsModel);
module.exports = hotel;
