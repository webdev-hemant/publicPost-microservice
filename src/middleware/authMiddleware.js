const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/allEnv");
const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const user = await User.findOne({
      where: {
        id: decoded.id,
      },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    const userDetails = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      birthdate: user.birthdate,
      email: user.email,
    };
    req.user = userDetails;
    next();
  });
};

module.exports = { isAuthenticated };
