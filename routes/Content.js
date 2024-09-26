const express = require("express");
const {
  getAllContents,
  postContent,
  getsingleContent,
} = require("../Controller/Content");
const router = express.Router();
router.get("/", getAllContents);
router.get("/:id", getsingleContent);
router.post("/", postContent);

module.exports = router;
