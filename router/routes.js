const express = require("express");
const router = express.Router();
const Hotel = require("../model/model");

router.get("", async (req, res) => {
  let data = await Hotel.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const hotel = await Hotel.findOne(req.params.id);
  res.send(hotel);
});

router.get("/n/:name", async (req, res) => {
  const hotel = await Hotel.find({ name: req.params.name });
  res.send(hotel);
});
router.get("/type/:type", async (req, res) => {
  const hotel = await Hotel.find({ type: req.params.type });
  res.send(hotel);
});

router.post("/add", async (req, res) => {
  const { name, location, type, rating, special } = req.body;
  let data = new Hotel({ name, location, special, rating, type });
  let response = await data.save();
  res.status(200).json({ message: "data added", res: response });
});

module.exports = router;
