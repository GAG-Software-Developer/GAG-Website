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
    if (posting.save()) {
        response.send(posting);
    } else {
        response.send("Failed");
    }


};
exports.tutorial_read = async (request, response) => {
    //id_owner Ivan = 5f4c9eb7c715f9b7f943fe92
    //id_owner Galih = 5f4ca3ff5f92f5babcd55c65

    //Get owner if from get parameter
    const id_writer = request.query.id;
    //Find project based on the owner id
    const read_tutorial = await tutorial_model.find({ writer_id_tutorial: id_writer })
    //const read_posting = await posting_model.find()
    //Send the result back
    response.send(read_tutorial);

};
exports.tutorial_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    await tutorial_model.findByIdAndUpdate(user_id, {
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
    });
    response.send('Updated!');
};
exports.tutorial_delete = async (request, response) => {
    const user_id = request.body.user_id;
    await tutorial_model.findByIdAndDelete({ _id: user_id });
    response.send('deleted!');
};