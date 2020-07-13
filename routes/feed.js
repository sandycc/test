const express = require('express');
const feedController = require('../controller/feed')
const router = express.Router();
router.get('/posts', feedController.getPosts);
router.post('/posts', feedController.createPosts);
router.delete('/posts',feedController.deletePosts);
module.exports= router;