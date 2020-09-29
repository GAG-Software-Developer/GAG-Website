const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
//get Controller
const TutorialController = require('../controllers/tutorial-controller');
//route
router.get('/tutorial', TutorialController.tutorial_read);
router.post('/tutorial', TutorialController.tutorial_create);
router.put('/tutorial', TutorialController.tutorial_update);
router.delete('/tutorial', TutorialController.tutorial_delete);
module.exports = router;