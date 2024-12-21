const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  current_id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;
