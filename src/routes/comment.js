// routes/comments.js

const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentsController");

// Create a new comment
router.post("/:postId", commentsController.createComment);

// Get comments for a specific post
router.get("/:postId", commentsController.getComments);

// Remove a comment
router.delete("/:postId/:commentId", commentsController.deleteComment);

module.exports = router;
