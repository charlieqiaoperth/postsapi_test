const express = require('express');

const {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById    
} = require('../controllers/posts');

const validateId = require('../middleware/validateId');

const router = express.Router();

router.post('',addPost);
router.get('',getAllPost);
router.get('/:id', validateId, getPostById);
router.delete('/:id', validateId, deletePostById);
router.put('/:id', validateId, updatePostById);

module.exports = router;






