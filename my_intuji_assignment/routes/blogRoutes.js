const express = require("express");
const {
  getAllBlogs,
  getBlogbyId,
  createBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlogbyId);
router.post("/", createBlog);
router.put("/:id", updateBlog);

module.exports = router;
