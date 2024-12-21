const blogs = require("../models/blog");

const getAllBlogs = async (req, res, next) => {
  try {
    const all_blogs = await blogs.find({});
    res.json(all_blogs);
  } catch (err) {
    next(err);
  }
};

const getBlogbyId = async (req, res, next) => {
  try {
    let { id } = req.params;
    console.log(id);
    const blog = await blogs.findOne({ current_id: id });
    console.log(blog);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    next(err);
  }
};

const createBlog = async (req, res, next) => {
  try {
    const newBlog = new blogs(req.body);
    newBlog.current_id = current_id++;
    await newBlog.save();
    res
      .status(201)
      .json({ message: "Blog Created Successfully", blog: newBlog });
  } catch {
    next(err);
  }
};

const updateBlog = async (req, res, next) => {
  try {
    let { id } = req.params;
    const blog = await blogs.findOne({ current_id: id });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const { title, description, category } = req.body;
    if (title) blog.title = title;
    if (description) blog.description = description;
    if (category) blog.category = category;
    await blog.save();
    res.json({ message: "Blog Upddated successfully", blog });
  } catch {
    next(err);
  }
};

module.exports = { getAllBlogs, getBlogbyId, createBlog, updateBlog };
