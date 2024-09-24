// controllers/commentsController.js

const Comment = require("../models/comments");

exports.createComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      post_id: req.params.postId,
      user_id: req.body.user_id,
      content: req.body.content,
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Error creating comment" });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { post_id: req.params.postId },
    });
    res.status(200).json({ total: comments.length, comments });
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        post_id: req.params.postId,
        id: req.params.commentId,
      },
    });
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: "Error deleting comment" });
  }
};
