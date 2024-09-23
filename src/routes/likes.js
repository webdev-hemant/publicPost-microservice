// routes/likes.js

const express = require("express");
const router = express.Router();
const Like = require("../models/likes"); // Assuming you have a Like model defined

// Create a new like
router.post("/:postId", async (req, res) => {
  try {
    const newLike = await Like.create({
      post_id: req.params.postId,
      user_id: req.body.user_id,
    });
    res.status(201).json(newLike);
  } catch (error) {
    res.status(500).json({ error: "Error creating like" });
  }
});

// Get likes for a specific post
router.get("/:postId", async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { post_id: req.params.postId },
    });
    res.status(200).json(likes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching likes" });
  }
});

// Remove a like
router.delete("/:postId/:userId", async (req, res) => {
  try {
    await Like.destroy({
      where: {
        post_id: req.params.postId,
        user_id: req.params.userId,
      },
    });
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: "Error deleting like" });
  }
});

module.exports = router;
