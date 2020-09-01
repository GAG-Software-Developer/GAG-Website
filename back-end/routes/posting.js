const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
//get Controller
const ProdukController = require('../controllers/posting-controller');

router.post('/posting-create', ProdukController.posting_create);
router.get('/posting-read', ProdukController.posting_get_all);
router.post('/posting-update', ProdukController.posting_update);
router.post('/posting-delete', ProdukController.posting_delete);
module.exports = router;