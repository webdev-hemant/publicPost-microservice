const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { removeExtension } = require("../utils");

const ensureDirSync = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const privateImgPath = `/privateImages/${req.user.id}`;
    const publicImgPath = `/publicImages`;
    const finalPath = `../images${
      req?.user?.id === 1 ? publicImgPath : privateImgPath
    }`;
    const imagesDir = path.join(__dirname, finalPath);

    ensureDirSync(imagesDir);
    cb(null, imagesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const newFileName = `${removeExtension(
      file.originalname
    )}_${uniqueSuffix}${path.extname(file.originalname)}`;
    cb(null, newFileName);
  },
});

// Initialize multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Invalid file type."));
  },
});

module.exports = upload;
