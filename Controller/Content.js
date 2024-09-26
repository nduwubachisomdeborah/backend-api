const content = require("../schema/Content");
const asyncHandler = require("express-async-handler");
const getAllContents = asyncHandler(async (req, res) => {
  const getcontents = await content.find().sort({ createdAt: -1 });
  res.status(200).json(getcontents);
});
const postContent = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  try {
    const newpost = await content.create({
      title,
      body,
    });
    res.status(200).json({ message: "post successful", newpost });
  } catch (error) {
    res.status(401).json({
      massage: "Unenable to create",
      error,
    });
  }
});
const getsingleContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const debby = await content.findById(id);
    if (!debby) {
      res.status(600).json({
        message: "content not found",
      });
    }
    res.status(200).json({
      message: "successful",
      debby,
    });
  } catch (error) {
    res.status(401).json({
      message: "error",
      error,
    });
  }
});
const postContentyy = asyncHandler((req, res) => {});
module.exports = {
  getAllContents,
  postContent,
  getsingleContent,
};
