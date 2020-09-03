const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const PostingDetailController = require('../controllers/posting-detail-controller');
router.post('/posting-create', PostingDetailController.posting_detail_create);
router.get('/posting-read', PostingDetailController.posting_detail_read);
router.post('/posting-update', PostingDetailController.posting_detail_update);
router.post('/posting-delete', PostingDetailController.posting_detail_delete);
module.exports = router;