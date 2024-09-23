const Likes = require("../models/likes"); // Adjust the path as necessary

// Create a new like
const createLike = async (req, res) => {
  try {
    const { post_id, user_id } = req.body;
    const newLike = await Likes.create({ post_id, user_id });
    return res.status(201).json(newLike);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ message: "User has already liked this post." });
    }
    console.error(error);
    return res.status(500).json({ message: "Error creating like." });
  }
};

// Get all likes for a post
const getLikesForPost = async (req, res) => {
  try {
    const { post_id } = req.params;
    const likes = await Likes.findAll({ where: { post_id } });
    return res.status(200).json({ total: likes.length, likes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching likes." });
  }
};

// Delete a like
const deleteLike = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await Likes.destroy({ where: { id } });
    if (deletedCount > 0) {
      return res.status(204).send();
    } else {
      return res.status(404).json({ message: "Like not found." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting like." });
  }
};

module.exports = {
  createLike,
  getLikesForPost,
  deleteLike,
};
