const express = require("express");
const { jwtMiddleware } = require("..");
const { addCoins, displayCoins } = require("./controller/listController");
const router = express.Router();

router.post("add-new", jwtMiddleware, addCoins);

router.get("/", jwtMiddleware, displayCoins);

module.exports = router;
