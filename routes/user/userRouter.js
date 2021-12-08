const express = require("express");
const router = express.Router();

const {
  checkIsEmpty,
  validateCreateData,
  isUndefined,
  loginValidator,
  jwtMiddleware,
  validateUpdate,
} = require("../index");
const {
  createUser,
  login,
  updateUser,
} = require("./controller/userController");

router.post(
  "/new-user",
  isUndefined,
  checkIsEmpty,
  validateCreateData,
  createUser
);

router.post("/login", isUndefined, checkIsEmpty, loginValidator, login);

router.put(
  "/profile",
  jwtMiddleware,
  isUndefined,
  checkIsEmpty,
  validateUpdate,
  updateUser
);

module.exports = router;
