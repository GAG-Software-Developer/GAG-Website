const tutorial_model = require('../models/tutorial-model');
const tutorial_model_detail = require('../models/tutorial-detail-model');
const { Model } = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const { text, request } = require('express');

exports.tutorial_detail_create = async (request, response) => {

    const tutorial = await new tutorial_model_detail({
        tutorial_id: request.body.tutorial_id,
        overview: request.body.overview,
        tutorial_detail: request.body.tutorial_detail
    });
    tutorial.save();
    response.send(tutorial);
};
exports.tutorial_detail_read = async (request, response) => {
    const id_tutorial = request.query.id;
    const tutorial_description = await tutorial_model_detail.findOne({ tutorial_id: id_tutorial });
    const tutorial_detail = await tutorial_model.findById(id_tutorial);
    //console.log(read_tutorial);

    response.send({
        "tutorial_description": tutorial_description,
        "tutorial_detail": tutorial_detail
    });

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
exports.tutorial_detail_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await tutorial_model.findByIdAndUpdate(id, { "owner_tutorial": "cah" });
    await tutorial_model.findByIdAndUpdate(user_id, {
        $set: {
            tutorial_id: request.body.tutorial_id,
            tutorial_detail: request.body.tutorial_detail
        }
    });
    response.send('Updated!');
};
exports.tutorial_detail_delete = async (request, response) => {
    const user_id = request.body.user_id;
    await tutorial_model.findByIdAndDelete({ _id: user_id });
    response.send('deleted!');
};