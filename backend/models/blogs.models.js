const mongoose = require("mongoose");
const { timeStamp } = require("node:console");


const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,   
  },
  body: {
    type: String,
    required: true,   
  },
  author: {
    type: String,
    default: "Anonymous",
  },
 
},{ timestamps: true });


const blog = mongoose.model("blogs",blogSchema);


module.exports = blog;
