const express = require("express");
const {
  createPublicPost,
  getAllPublicPost,
  getSinglePostById,
} = require("../controllers/publicPostController");
const upload = require("../config/multer");
const { CURRENT_HOST } = require("../config/allEnv");

const router = express.Router();

router.post("/create", upload.single("image"), async (req, res) => {
  const { user_id, content } = req.body;
  let img_url = null;
  if (req.file) {
    img_url = `${CURRENT_HOST}/images/publicImages/${req.file.filename}`;
  }
  try {
    const newPost = await createPublicPost(user_id, content, img_url);
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

router.get("/", getAllPublicPost);
router.get("/:id", getSinglePostById);

module.exports = router;
