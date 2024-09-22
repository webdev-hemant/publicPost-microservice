const express = require("express");
const { register, login } = require("../controllers/authController");
const { getUserDetails } = require("../controllers/getUserDetails");
const { isAuthenticated } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUserDetails", isAuthenticated, getUserDetails);

module.exports = router;
