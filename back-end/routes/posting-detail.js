const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const PostingDetailController = require('../controllers/posting-detail-controller');
//route
router.post('/posting-detail-create', PostingDetailController.posting_detail_create);
router.get('/posting-detail-read', PostingDetailController.posting_detail_read);
router.put('/posting-detail-update', PostingDetailController.posting_detail_update);
router.delete('/posting-detail-delete', PostingDetailController.posting_detail_delete);
module.exports = router;