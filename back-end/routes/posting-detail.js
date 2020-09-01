const express = require('express');
const { request, response, Router, json } = require('express');
const router = express.Router();
const posting_model = require('../models/posting-model');
const posting_model_detail = require('../model/posting-detail-model');
const { Model } = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
router.post('/posting-create', (request, response) => {
    //// ~~ INPUT WITH TOKEN ~~
    // const token = request.header('x-auth-token');
    // if (!token) {
    //     response.status(401).json({
    //         message: 'no token, authorization denied'
    //     });
    // }
    // try {
    //     const decoded = jwt.verify(token, config.get('jwtSecret'));
    //     //response.send(decoded);
    //     const posting = new posting_model({
    //         title_posting: request.body.title_posting,
    //         owner_posting: request.body.owner_posting,
    //         description_posting: request.body.description_posting,
    //         total_view_posting: request.body.total_view_posting
    //     });
    //     posting.save();
    //     response.send(posting);
    // } catch (error) {
    //     response.status(401).json({
    //         message: 'no token, authorization denied'
    //     });
    // 
    ////~~ INPUT NO TOKEN ~~
    //const array_posting = [request.body.attribute];
    const posting_id = request.body.posting_id;
    const read_posting = posting_model.findOne({ _id: posting_id });
    const posting = new posting_model_detail({
        title_posting: request.body.title_posting,
        image_posting: request.body.image_posting,
        quote_posting: request.body.quote_posting,
        //year_of_posting: request.body.year_of_posting,
        owner_id_posting: request.body.owner_id_posting,
        owner_name_posting: request.body.owner_name_posting,
        attribute: request.body.attribute
    });
    posting.save();
    response.send(posting);
});
router.get('/posting-read', async (request, response) => {
    const read_posting = await posting_model.find({});
    //console.log(read_posting);
    response.send(read_posting);

    ////GENERATE jwtoken
    // const payload = {
    //     user: {
    //         id: "qw123"
    //     }
    // }
    // jwt.sign(payload, config.get('jwtSecret'), {
    //     expiresIn: 360000
    // }, (err, token) => {
    //     if (err) throw err
    //     response.json({
    //         token
    //     });
    // });
});
router.post('/posting-update', async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    await posting_model.findByIdAndUpdate(user_id, {
        $set: {
            title_posting: request.body.title_posting,
            image_posting: request.body.image_posting,
            quote_posting: request.body.quote_posting,
            //year_of_posting: request.body.year_of_posting,
            owner_id_posting: request.body.owner_id_posting,
            owner_name_posting: request.body.owner_name_posting,
            attribute: request.body.attribut
        }
    });
    response.send('Updated!');
});
router.post('/posting-delete', async (request, response) => {
    const user_id = request.body.user_id;
    await posting_model.findByIdAndDelete({ _id: user_id });
    response.send('deleted!');
});
module.exports = router;