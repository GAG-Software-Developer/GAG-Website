const posting_model = require('../models/posting-model');

exports.posting_create = async (request, response) => {
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

    const posting = await new posting_model({
        title_posting: request.body.title_posting,
        image_posting: request.body.image_posting,
        quote_posting: request.body.quote_posting,
        type_posting: request.body.type_posting,
        //year_of_posting: request.body.year_of_posting,
        owner_id_posting: request.body.owner_id_posting,
        owner_name_posting: request.body.owner_name_posting,
        attribute: request.body.attribute,
        link_posting: request.body.link_posting
    });
    posting.save();
    response.send(posting);
};
exports.posting_read = async (request, response) => {
    //id_owner Ivan = 5f4c9eb7c715f9b7f943fe92
    //id_owner Galih = 5f4ca3ff5f92f5babcd55c65

    //Get owner if from get parameter
    const id_owner = request.query.id;
    //Find project based on the owner id
    const read_posting = await posting_model.find({ owner_id_posting: id_owner })
    //const read_posting = await posting_model.find()
    //Send the result back
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
};
exports.posting_update = async (request, response) => {
    const user_id = request.body.user_id;
    //await posting_model.findByIdAndUpdate(id, { "owner_posting": "cah" });
    await posting_model.findByIdAndUpdate(user_id, {
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
exports.posting_delete = async (request, response) => {
    const user_id = request.body.user_id;
    await posting_model.findByIdAndDelete({ _id: user_id });
    response.send('deleted!');
};