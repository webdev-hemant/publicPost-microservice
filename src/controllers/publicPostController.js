const PublicPost = require("../models/publicPosts");

// Create a new post
exports.createPost = async (req, res) => {
  const { user_id, username, content, media, tags, location, visibility } =
    req.body;

  // Basic validation
  if (!user_id || !username || !content || !visibility) {
    return res.status(400).json({
      error: "user_id, username, content, and visibility are required.",
    });
  }

  try {
    const post = await PublicPost.create({
      user_id,
      username,
      content,
      media,
      tags,
      location,
      visibility,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await PublicPost.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await PublicPost.findByPk(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
  const { user_id, username, content, media, tags, location, visibility } =
    req.body;

  // You can choose which fields are required for updating
  if (!visibility) {
    return res
      .status(400)
      .json({ error: "visibility is required for update." });
  }

  try {
    const [updated] = await PublicPost.update(
      {
        user_id,
        username,
        content,
        media,
        tags,
        location,
        visibility,
      },
      {
        where: { id: req.params.id },
      }
    );

    if (updated) {
      const updatedPost = await PublicPost.findByPk(req.params.id);
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const deleted = await PublicPost.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
