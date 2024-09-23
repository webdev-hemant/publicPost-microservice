const fs = require("fs");
const path = require("path");

const removeExtension = (filename) => {
  const dotIndex = filename.lastIndexOf(".");
  // If there's no dot, return the filename as is
  if (dotIndex === -1) {
    return filename;
  }
  return filename.substring(0, dotIndex);
};

const mkdirIfNotExistsSync = (dirPath) => {
  try {
    const resolvedPath = path.resolve(dirPath);

    // Check if the directory exists
    if (!fs.existsSync(resolvedPath)) {
      fs.mkdirSync(resolvedPath, { recursive: true });
      console.log(`Directory created: ${resolvedPath}`);
    } else {
      console.log(`Directory already exists: ${resolvedPath}`);
    }
  } catch (err) {
    console.error("Error creating directory:", err);
    throw err;
  }
};

module.exports = { removeExtension, mkdirIfNotExistsSync };
