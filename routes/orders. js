const router = require("express").Router();
const Order = require("../models/Order");

router.post("/create", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order created" });
});

router.get("/all", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
