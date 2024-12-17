const mongoose = require("mongoose");

// schema for auction items
const auctionItemSchema = new mongoose.Schema({
  title: { type: String, required: true, lowercase: true, trim: true },
  description: { type: String, required: true, lowercase: true, trim: true },
  start_price: { type: Number, required: true, validate(value) {
    if (value <= 0) {
      throw new Error("Start price must be greater than 0");
  }}},
  reserve_price: { type: Number, validate(value) {
    if (value < this.start_price) {
      throw new Error("Reserve price must be greater than start price");
    }
  }},
});

module.exports = mongoose.model("AuctionItem", auctionItemSchema);