const User = require("../../user/model/User");
const Coin = require("../model/coin");

async function addCoins(req, res) {
  try {
    let errObj = {};
    const {
      name,
      currentPrice,
      marketCap,
      volume,
      circulatingSupply,
      rank,
      priceChange24Hr,
    } = req.body;

    if (!name) {
      errObj.name = "No name";
    }

    if (!currentPrice) {
      errObj.currentPrice = "Current price not available";
    }
    if (!marketCap) {
      errObj.marketCap = "Market cap not available";
    }
    if (!volume) {
      errObj.volume = "volume not available";
    }
    if (!circulatingSupply) {
      errObj.circulatingSupply = "circulating supply not available";
    }
    if (!rank) {
      errObj.rank = "rank not available";
    }
    if (!priceChange24Hr) {
      errObj.priceChange24Hr = "priceChange24Hr not available";
    }

    if (Object.keys(errObj).length > 0) {
      return res.status(500).json({
        message: "error",
        error: errObj,
      });
    }

    const decoded = res.locals.decoded;

    const foundUser = await User.findOne({ email: decoded.email });

    const newCoin = new Coin({
      name,
      currentPrice,
      marketCap,
      volume,
      circulatingSupply,
      rank,
      priceChange24Hr,
      owner: foundUser._id,
    });

    const savedCoin = await newCoin.save();

    foundUser.coinList.push(savedCoin._id);

    await foundUser.save();

    res.json({ message: `${newCoin.name} saved to favorites`, coinList });
  } catch (e) {
    res.status(500).json({ message: "error", error: errObj });
  }
}

async function displayCoins(req, res) {
  const decoded = res.locals.decoded;
  const foundUser = await User.findOne({ email: decoded.email }).populate(
    "coinList"
  );

  res.json({ message: "success", payload: foundUser.coinList });
}
module.exports = {
  addCoins,
  displayCoins,
};
