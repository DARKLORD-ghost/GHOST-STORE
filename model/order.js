const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  game: String,
  playerId: String,
  amount: Number,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
