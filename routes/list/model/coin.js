const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  currentPrice: {
    type: String,
  },
  MarketCap: {
    type: String,
  },
  volume: {
    type: String,
  },
  circulatingSupply: {
    type: String,
  },
  rank: {
    type: String,
  },
  priceChange24Hr: {
    type: String,
  },
});

module.exports = mongoose.model("coinList", coinSchema);
