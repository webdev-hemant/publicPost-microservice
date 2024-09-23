const express = require("express");
const router = express.Router();
const postController = require("../controllers/publicPostController");

// Create a new post
router.post("/", postController.createPost);

// Get all posts
router.get("/", postController.getAllPosts);

// Get a post by ID
router.get("/:id", postController.getPostById);

// Update a post by ID
router.put("/:id", postController.updatePost);

// Delete a post by ID
router.delete("/:id", postController.deletePost);

// const upload = require("../config/multer");
// const { CURRENT_HOST } = require("../config/allEnv");

// router.post("/createAndUpload", upload.single("image"), async (req, res) => {
//   const { user_id, content } = req.body;
//   let img_url = null;
//   if (req.file) {
//     img_url = `${CURRENT_HOST}/images/publicImages/${req.file.filename}`;
//   }
//   try {
//     const newPost = await createPublicPost(user_id, content, img_url);
//     res.status(201).json(newPost);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to create post" });
//   }
// });

module.exports = router;
