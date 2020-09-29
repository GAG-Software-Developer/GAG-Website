const mongoose = require('mongoose');

const tutorialDetailSchema = mongoose.Schema({
    tutorial_id: { type: String, required: true },
    overview: { type: String, required: true },
    tutorial_detail: {
        type: [{
            title_detail: { type: String, required: true },
            details: {
                type: [{
                    type_detail: {
                        type: String,
                        required: true
                    },
                    text_detail: {
                        type: String,
                        required: true
                    }
                }],
                required: true
            }
        }]
    }
});
//// export untuk model 
module.exports = mongoose.model('tutorial-detail', tutorialDetailSchema);

