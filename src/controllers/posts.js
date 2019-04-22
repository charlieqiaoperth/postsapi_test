const postModel = require('../models/posts');

function addPost(req, res) {
    const { author, content } = req.body;
    const newPost = postModel.addPost({ author, content });
    return res.status(201).json(newPost);
}

function getPostById(req, res) {
    const { id } = req.params;
    const post = postModel.getPostById(id);
    return res.json(post);
}

function getAllPost(req, res) {
    const posts=postModel.getAllPost();
    return res.json(posts);
}

function updatePostById(req, res) {
    const { id } = req.params;
    const { author, content } = req.body;
    const updatePostById = postModel.updatePostById(id, { author, content});
    return res.json(updatePostById);
}

function deletePostById(req, res) {
    const { id } = req.params;
    const deletePostById = postModel.deletePostById(id);
    return res.json(deletePostById);
}

module.exports = {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
}