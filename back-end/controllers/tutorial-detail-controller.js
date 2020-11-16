const tutorial_model = require('../models/tutorial-model');
const tutorial_model_detail = require('../models/tutorial-detail-model');

exports.tutorial_detail_create = async (request, response) => {

    const tutorial = await new tutorial_model_detail({
        tutorial_id: request.body.tutorial_id,
        overview: request.body.overview,
        tutorial_detail: request.body.tutorial_detail
    });
    posting.save().then(
        () => {
            response.status(201).json({
                message: "Created",
                data: tutorial
            })
        }
    ).catch(
        (error) => {
            response.status(400).json({
                error: error
            })
        }
    );
};
exports.tutorial_detail_read = async (request, response) => {
    const id_tutorial = request.query.id;
    const tutorial_description = await tutorial_model_detail.findOne({ tutorial_id: id_tutorial });
    const tutorial_detail = await tutorial_model.findById(id_tutorial);
    //console.log(read_tutorial);
    if (posting_description.length > 0 && posting_detail.length > 0) {
        response.status(200).json({
            "message": "data is found",
            "tutorial_description": tutorial_description,
            "tutorial_detail": tutorial_detail
        });
    }
    else {
        response.send({
            "message": 400
        })
    }
};
exports.tutorial_detail_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await tutorial_model.findByIdAndUpdate(id, { "owner_tutorial": "cah" });
    tutorial_model.findByIdAndUpdate(user_id, {
        $set: {
            tutorial_id: request.body.tutorial_id,
            tutorial_detail: request.body.tutorial_detail
        }
    }).then(
        () => {
            response.status(200).json({
                message: "Updated"
            })
        }
    ).catch(
        (error) => {
            response.status(400).json({
                error: error
            })
        }
    );
};
exports.tutorial_detail_delete = async (request, response) => {
    const user_id = request.body.user_id;
    tutorial_model.findByIdAndDelete({ _id: user_id }).then(
        () => {
            response.status(200).json({
                message: "Deleted"
            })
        }
    ).catch(
        (error) => {
            response.status(400).json({
                error: error
            })
        }
    );
};