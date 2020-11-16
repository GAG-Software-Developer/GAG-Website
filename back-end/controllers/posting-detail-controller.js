const posting_model = require('../models/posting-model');
const posting_model_detail = require('../models/posting-detail-model');

exports.posting_detail_create = async (request, response) => {
    const posting = await new posting_model_detail({
        posting_id: request.body.posting_id,
        overview: request.body.overview,
        posting_detail: request.body.posting_detail
    });
    posting.save().then(
        () => {
            response.status(201).json({
                message: "Created",
                data: posting
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
exports.posting_detail_read = async (request, response) => {
    const id_posting = request.query.id_posting;
    const posting_description = await posting_model_detail.find({ posting_id: id_posting });
    const posting_detail = await posting_model.findById(id_posting);
    //console.log(read_posting);
    if (posting_description.length > 0 && posting_detail.length > 0) {
        response.status(200).json({
            "message": "data is found",
            "posting_description": posting_description,
            "posting_detail": posting_detail
        });
    }
    else {
        response.send({
            "message": 400
        })
    }
};
exports.posting_detail_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    posting_model.findByIdAndUpdate(user_id, {
        $set: {
            posting_id: request.body.posting_id,
            posting_detail: request.body.posting_detail
        }
    }).then(
        (result) => {
            response.status(200).json({
                message: "data ditemukan",
                data: result
            })
        }
    ).catch(
        (error) => [
            response.status(400).json({
                error: error
            })
        ]
    );
};
exports.posting_detail_delete = async (request, response) => {
    const user_id = request.body.user_id;
    posting_model.findByIdAndDelete({ _id: user_id }).then(
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