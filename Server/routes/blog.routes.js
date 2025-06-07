const express = require("express");
const { storeBlog, getSpecificBlog, getAllBlogs, updateBlog, deleteBlog } = require("../controller/blog.controller");
const router = express.Router();

router.post("/blog/store", storeBlog);
router.put("/blog/update/:blogId", updateBlog);
router.delete("/blog/delete/:blogId", deleteBlog);
router.get("/blog/:blogId", getSpecificBlog);
router.get("/blogs", getAllBlogs);

module.exports = router;