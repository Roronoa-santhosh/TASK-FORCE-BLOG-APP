const express = require("express");
require("dotenv").config();
const blogs = require("./routes/blog.routes.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS for React frontend
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE ,PATCH",
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", blogs);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(` Server running on port ${port}`);
      console.log(" Database connected successfully");
    });
  })
  .catch((err) => {
    console.error(" Database not connected:", err.message);
  });
