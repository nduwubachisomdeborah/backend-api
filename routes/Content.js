const express = require("express");
const {
  getAllContents,
  postContent,
  getsingleContent,
  updatecontent,
  deleteContent,
} = require("../Controller/Content");
const router = express.Router();
router.get("/", getAllContents);
router.get("/:id", getsingleContent);
router.post("/", postContent);
router.put("/:id", updatecontent);
router.delete("/:id", deleteContent);
module.exports = router;
