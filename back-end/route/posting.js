const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
const posting_model = require('../model/posting-model');
const { Model } = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
router.post('/posting-create', (request, response) => {
    const token = request.header('x-auth-token');
    if (!token) {
        response.status(401).json({
            message: 'no token, authorization denied'
        });
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //response.send(decoded);
        const posting = new posting_model({
            title_posting: request.body.title_posting,
            owner_posting: request.body.owner_posting,
            description_posting: request.body.description_posting,
            total_view_posting: request.body.total_view_posting
        });
        posting.save();
        response.send(posting);
    } catch (error) {
        response.status(401).json({
            message: 'no token, authorization denied'
        });
    }

});
router.get('/posting-read', async (request, response) => {
    //const read_posting = await posting_model.find({});
    //generate jwtoken
    const payload = {
        user: {
            id: "qw123"
        }
    }
    jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
    }, (err, token) => {
        if (err) throw err
        response.json({
            token
        });
    });
    //response.send(read_posting);
});
router.post('/posting-update', async (request, response) => {
    const id = "5f2956623a0db641cc4a556e";
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    await posting_model.findByIdAndUpdate(id, { $set: { "owner_posting": "son" } });
    response.send('success');
});
router.post('/posting-delete', async (request, response) => {
    const id = "5f2a2134e96b75448c9ba7ea";
    await posting_model.findByIdAndDelete({ _id: id });
    response.send('deleted');
    //response.send('ini delete');
});
module.exports = router;