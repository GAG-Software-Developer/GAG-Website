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
    const { title_posting, image_posting, quote_posting, type_posting, owner_id_posting, owner_name_posting, attribute, link_posting, year_of_posting } = request.body;
    const posting = await new posting_model({
        title_posting: title_posting,
        image_posting: image_posting,
        quote_posting: quote_posting,
        type_posting: type_posting,
        year_of_posting: year_of_posting,
        owner_id_posting: owner_id_posting,
        owner_name_posting: owner_name_posting,
        attribute: attribute,
        link_posting: link_posting
    });
    //// ~~ CHECKING CONDITION 1 ~~
    posting.save().then(
        () => {
            response.status(201).json({
                message: 'Posting Saved Successfully'
            });
        }
    ).catch(
        (error) => {
            response.status(400).json({
                error: error
            });
        }
    );
    //// ~~ CHECKING CONDITION 2 ~~
    // if (posting.save()) {
    //     response.send({
    //         status: "201",
    //         message: "Posting Saved Successfully"
    //     })
    // }
    // else {
    //     response.send({
    //         status: "400",
    //         message: "Posting Saved Unsuccessfully"
    //     })
    // }
};
exports.posting_read = async (request, response) => {
    //id_owner Ivan = 5f4c9eb7c715f9b7f943fe92
    //id_owner Galih = 5f4ca3ff5f92f5babcd55c65

    //// ~~ GET OWNER IF FROM GET PARAMETER ~~
    const id_owner = request.params.id;
    //// ~~ FIND PROJECT BASED ON THE OWNER ID ~~
    //// ~~ CHECKING CONDITION 1 FOR SEND THE RESULT BACK ~~
    posting_model.find({ owner_id_posting: id_owner }).then(
        (result) => {
            response.status(200).json({
                message: "data is found",
                data: result
            });
        }
    ).catch(
        (error) => {
            response.status(404).json({
                error: error
            });
        }
    );
    //// ~~ CHECKING CONDITION 2 FOR SEND THE RESULT BACK ~~
    // if (read_posting.length > 0) {
    //     response.send({
    //         status: '200',
    //         message: 'posting is found',
    //         data: read_posting
    //     });
    // }
    // else {
    //     response.send({
    //         status: '200',
    //         message: 'Posting List not Found'
    //     });
    // }

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

//POST  - posting 
//PUT   - posting
//GET   - posting
//DELETE   - posting

exports.posting_update = async (request, response) => {
    const posting_id = request.params.id;
    const { title_posting, quote_posting, type_posting, owner_id_posting, owner_name_posting, attribute, link_posting } = request.body;
    const posting = await new posting_model({
        title_posting: title_posting,
        quote_posting: quote_posting,
        type_posting: type_posting,
        owner_id_posting: owner_id_posting,
        owner_name_posting: owner_name_posting,
        attribute: attribute,
        link_posting: link_posting
    });
    posting_model.updateOne({ _id: posting_id }, posting).then(
        () => {
            response.status(201).json({
                message: 'Posting Updated'
            });
        }
    ).catch(
        (error) => {
            response.status(400).json({
                error: error
            });
        }
    );
    // await posting_model.findByIdAndUpdate(user_id, {
    //     $set: {
    //         title_posting: request.body.title_posting,
    //         image_posting: request.body.image_posting,
    //         quote_posting: request.body.quote_posting,
    //         type_posting: request.body.type_posting,
    //         year_of_posting: request.body.year_of_posting,
    //         owner_id_posting: request.body.owner_id_posting,
    //         owner_name_posting: request.body.owner_name_posting,
    //         attribute: request.body.attribute,
    //         link_posting: request.body.link_posting
    //     }
    // });
    // response.send('Updated!');
};
exports.posting_delete = async (request, response) => {
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