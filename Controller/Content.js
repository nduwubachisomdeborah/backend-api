const Content = require("../schema/Content");
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
const updatecontent = asyncHandler(async (req, res) => {
  const { id } = req.params; //WHERE to pass ur parameter and request.body
  const { title, body } = req.body;
  try {
    const updateData = await content.findById(id);
    if (!updateData) {
      res.status(701).json({
        message: "content not found",
        updateData,
      });
    }
    updateData.title = title || updateData.title;
    updateData.body = body || updateData.body;
    await updateData.save();
    res.status(200).json({
      message: "update successful",
      updateData,
    });
  } catch (error) {
    res.status(401).json({
      massage: "error in update",
      error,
    });
  }
});
const deleteContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteContent = await content.findByIdAndDelete(id);
    if (!deleteContent) {
      res.status(965).json({
        message: "request unsuccesful",
      });
    }
    res.status(300).json({
      message: "delete successful",
      deleteContent,
    });
  } catch (error) {
    res.status(405).json({
      message: "error",
      error,
    });
  }
});
module.exports = {
  getAllContents,
  postContent,
  getsingleContent,
  updatecontent,
  deleteContent,
};
