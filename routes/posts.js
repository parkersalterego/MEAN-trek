const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Post = require('../models/post');

// get posts
router.get('/', (req, res, next) => {
    Post.getPosts((err, posts) => {
        if (err) {
            throw err;
        }
        res.json(posts);
    });
});

// get post by id
router.get('/:_id', (req, res, next) => {
    Post.getPostById(req.params._id, (err, post) => {
        if (err) {
            throw err;
        }
        res.json(post);
    });
});

// add post
router.post('/', (req, res, next) => {
    let post = new Post({
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body
    });

    Post.addPost(post, (err, post) => {
        if (err) {
            throw err;
        }
        res.json(post);
    });
});

// update post
router.put('/:_id', (req, res, next) => {
    let id = req. params._id;
    let post = new Post({
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        body: req.body.body
    });

    Post.updatePost(id, post, {}, (err, post) => {
        if (err) {
            throw err;
        }
        res.json(post);
    });
});

// delete post 
router.delete('/:_id', (req, res, next) => {
    let id = req.params._id;
    Post.deletePost(id, (err, post) => {
        if (err) {
            throw err;
        }
        res.json(post);
    });
});

module.exports = router;