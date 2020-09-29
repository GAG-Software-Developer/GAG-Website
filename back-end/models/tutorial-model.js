const mongoose = require('mongoose');

const tutorialSchema = mongoose.Schema({
    title_tutorial: { type: String, required: true },
    image_tutorial: { type: String, required: true },
    created_at: { type: Date, required: true },
    writer_id_tutorial: { type: String, required: true },
    writer_name_tutorial: { type: String, required: true },
    attribute_tutorial: { type: [String], required: true }
});
//// export untuk model 
module.exports = mongoose.model('tutorial', tutorialSchema);

