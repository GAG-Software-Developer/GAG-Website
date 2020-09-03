const mongoose = require('mongoose');
//// Contoh default value
// const postingSchema = mongoose.Schema({
//     title_posting: { type: String, required: true , default: 'aktif'}
// });
const postingSchema = mongoose.Schema({
    posting_id: { type: String, required: true },
    posting_detail: [{
        part_of_detail: {
            image_detail: {
                type: String,
                required: true
            },
            text_detail: {
                type: String,
                required: true
            }
        }
    }]
});
//// export untuk model 
module.exports = mongoose.model('posting-detail', postingSchema);

