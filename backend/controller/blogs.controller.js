//get all blogs 

const blog = require("../models/blogs.models.js");


const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find().sort({createdAt:-1});
    return res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

//get selected blog

const getSelectedBlogs = async (req, res) => {
  const id = req.params.id;

  try {
    const blogData = await blog.findById(id); 
    if (!blogData) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(blogData);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return res.status(500).json({ message: "Server error" });
    console.error("Error details:", err.name, err.message);

  }
};


// create blog

const createBlog= async(req,res)=>{
    const blogData = req.body;
    try {
        const newblog= await blog.create(blogData);
        return res.status(201).json(newblog);
    } catch (error) {
       console.error("Error creating blog:", error.message);
    return res.status(400).json({ message: "All fields are required" });
    }
    

}



//delete  blog
const deleteBlog = (req, res) => {
  const id = req.params.id;

  blog.findByIdAndDelete(id)
    .then((deletedBlog) => {
      if (!deletedBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json({ message: "Blog deleted successfully" });
    })
    .catch((err) => {
      console.error("Error deleting blog:", err);
      res.status(500).json({ message: "Server error" });
    });
};




//update blog
// update blog
const updateBlog = (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  blog.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true })
    .then((updatedBlog) => {
      if (!updatedBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json(updatedBlog);
    })
    .catch((err) => {
      console.error("Error updating blog:", err);
      res.status(500).json({ message: "Server error" });
    });
};



module.exports ={getAllBlogs,getSelectedBlogs,createBlog,deleteBlog,updateBlog }