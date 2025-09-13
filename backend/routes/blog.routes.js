const express = require("express");
const router = express.Router();
const {getAllBlogs,getSelectedBlogs,createBlog,deleteBlog,updateBlog} = require("../controller/blogs.controller.js")


 router.get("/blogs",getAllBlogs);
 router.get("/blogs/:id",getSelectedBlogs);
 router.delete("/blogs/:id",deleteBlog);
router.post("/blogs",createBlog);
router.patch("/blogs/:id",updateBlog);


module.exports = router;