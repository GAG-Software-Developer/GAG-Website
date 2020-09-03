const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const PostingController = require('../controllers/posting-controller');
//route
router.post('/posting-create', PostingController.posting_create);
router.get('/posting-read', PostingController.posting_get_all);
router.post('/posting-update', PostingController.posting_update);
router.post('/posting-delete', PostingController.posting_delete);
module.exports = router;