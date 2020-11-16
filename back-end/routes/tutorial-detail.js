const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const TutorialDetailController = require('../controllers/tutorial-detail-controller');
//route
router.post('/tutorial-detail/:id', TutorialDetailController.tutorial_detail_create);
router.get('/tutorial-detail', TutorialDetailController.tutorial_detail_read);
router.put('/tutorial-detail/:id', TutorialDetailController.tutorial_detail_update);
router.delete('/tutorial-detail/:id', TutorialDetailController.tutorial_detail_delete);
module.exports = router;