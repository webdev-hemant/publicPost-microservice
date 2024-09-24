require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/db");
const publicPosts = require("./src/routes/publicPosts");
const likes = require("./src/routes/likes");
const comments = require("./src/routes/comment");
const { SERVER_PORT } = require("./src/config/allEnv");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// Public posts
app.use("/api/public-posts", publicPosts);
app.use("/api/likes", likes);
app.use("/api/comments", comments);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");

    await sequelize.sync(); // Create tables if they don't exist

    const PORT = SERVER_PORT;
    app.listen(PORT, () => {
      console.log({ message: `Server is running on port ${PORT}` });
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
