const mongoose = require('mongoose');
//// Contoh default value
// const postingSchema = mongoose.Schema({
//     title_posting: { type: String, required: true , default: 'aktif'}
// });
const postingSchema = mongoose.Schema({
    posting_id: { type: String, required: true },
    overview: { type: String, required: true },
    posting_detail: {
        type: [{
            image_detail: {
                type: String,
                required: true
            },
            title_detail: {
                type: String,
                required: true
            },
            text_detail: {
                type: String,
                required: true
            }
        }]
    }
});
//// export untuk model 
module.exports = mongoose.model('posting-detail', postingSchema);

