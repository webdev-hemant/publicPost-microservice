exports.getUserDetails = async (req, res) => {
  const userDetails = req.user;
  try {
    res.send(userDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
