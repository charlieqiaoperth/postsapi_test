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
router.get('', validateId, getPostById);
router.delete('', validateId, deletePostById);
router.put('', validateId, updatePostById);

module.exports = router;






