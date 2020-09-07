const posting_model = require('../models/posting-model');
const posting_model_detail = require('../models/posting-detail-model');
const { Model } = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const { text, request } = require('express');

exports.posting_detail_create = async (request, response) => {
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
    // const posting_id = request.body.posting_id;
    // const read_posting = await posting_model.findOne({ _id: posting_id });
    const posting = await new posting_model_detail({
        posting_id: request.body.posting_id,
        overview: request.body.overview,
        posting_detail: request.body.posting_detail
    });
    posting.save();
    response.send(posting);
};
exports.posting_detail_read = async (request, response) => {
    const id_posting = request.query.id_posting;
    const read_posting_detail = await posting_model_detail.find({ posting_id: id_posting });
    //console.log(read_posting);

    response.send(read_posting_detail);

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
};
exports.posting_detail_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    await posting_model.findByIdAndUpdate(user_id, {
        $set: {
            posting_id: request.body.posting_id,
            posting_detail: request.body.posting_detail
        }
    });
    response.send('Updated!');
};
exports.posting_detail_delete = async (request, response) => {
    const user_id = request.body.user_id;
    await posting_model.findByIdAndDelete({ _id: user_id });
    response.send('deleted!');
};