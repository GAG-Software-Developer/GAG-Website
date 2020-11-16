const tutorialModel = require('../models/tutorial-model');
const tutorial_model = require('../models/tutorial-model');

exports.tutorial_create = async (request, response) => {
    const getDate = new Date();
    const posting = await new tutorial_model({
        title_tutorial: request.body.title_tutorial,
        image_tutorial: request.body.image_tutorial,
        created_at: getDate,
        writer_id_tutorial: request.body.writer_id_tutorial,
        writer_name_tutorial: request.body.writer_name_tutorial,
        attribute_tutorial: request.body.attribute_tutorial
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
    )
};
exports.tutorial_read = async (request, response) => {
    //id_owner Ivan = 5f4c9eb7c715f9b7f943fe92
    //id_owner Galih = 5f4ca3ff5f92f5babcd55c65

    //Find project based on the owner id and Send the result back
    tutorial_model.find().then(
        (result) => {
            response.status(200).json({
                message: "data is found",
                data: result
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
exports.tutorial_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    tutorial_model.findByIdAndUpdate(user_id, {
        $set: {
            title_posting: request.body.title_posting,
            image_posting: request.body.image_posting,
            quote_posting: request.body.quote_posting,
            type_posting: request.body.type_posting,
            year_of_posting: request.body.year_of_posting,
            owner_id_posting: request.body.owner_id_posting,
            owner_name_posting: request.body.owner_name_posting,
            attribute: request.body.attribute,
            link_posting: request.body.link_posting
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
exports.tutorial_delete = async (request, response) => {
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