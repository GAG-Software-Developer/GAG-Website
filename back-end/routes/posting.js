const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const PostingController = require('../controllers/posting-controller');
//route
router.get('/posting/:id', PostingController.posting_read);
router.post('/posting', PostingController.posting_create);
router.put('/posting/:id', PostingController.posting_update);
router.delete('/posting/:id', PostingController.posting_delete);
module.exports = router;