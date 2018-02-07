const mongoose = require('mongoose');
// const config = require('../config/database');

const PostSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  comments: {
    type: Number,
    required: false
  }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

// add post 
module.exports.addPost = (post, callback) => {
  Post.create(post, callback);
}

// get all
module.exports.getAllPosts = (callback, limit) => {
  Post.find(callback).limit(limit);
}

// get post by id
module.exports.getPostById = (id, callback) => {
  Post.findById(id, callback);
}

//update post
module.exports.updatePost = (id, post, options, callback) => {
  let query = {
    _id: id
  };
  let update = {
    title: post.title,
    image: post.image,
    date: post.date,
    body: post.body,
    comments: post.comments
  }

  Post.findOneAndUpdate(query, update, options, callback);
}

// delete post
module.exports.deletePost = (id, callback) => {
  let query = {
    _id: id
  };
  Post.remove(query, callback);
}