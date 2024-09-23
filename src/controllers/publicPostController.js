const PublicPost = require("../models/publicPosts");

// Create a post
const createPublicPost = async (user_id = null, content, img_url) => {
  try {
    const newPost = await PublicPost.create({ user_id, content, img_url });
    return newPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw new Error("Error creating post");
  }
};

// Get all public posts
const getAllPublicPost = async (req, res) => {
  try {
    const posts = await PublicPost.findAll({
      order: [["created_at", "ASC"]],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "An error occurred while fetching posts." });
  }
};

// Get a single post by ID
const getSinglePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PublicPost.findOne({
      where: { id },
    });
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post not found." });
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the post." });
  }
};

module.exports = { createPublicPost, getAllPublicPost, getSinglePostById };
