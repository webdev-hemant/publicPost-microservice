const express = require("express");
const {
  createLike,
  getLikesForPost,
  deleteLike,
} = require("../controllers/likesController"); // Adjust the path as necessary

const router = express.Router();

// Create a like
router.post("/", createLike);

// Get all likes for a specific post
router.get("/post/:post_id", getLikesForPost);

// Delete a like
router.delete("/:id", deleteLike);

module.exports = router;
