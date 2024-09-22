require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const { SERVER_PORT } = require("./src/config/allEnv");

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync(); // Create tables if they don't exist

    const PORT = SERVER_PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
