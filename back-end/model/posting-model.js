const mongoose = require('mongoose');
//// Contoh default value
// const postingSchema = mongoose.Schema({
//     title_posting: { type: String, required: true , default: 'aktif'}
// });
const postingSchema = mongoose.Schema({
    title_posting: { type: String, required: true },
    owner_posting: { type: String, required: true },
    description_posting: { type: String, required: true },
    total_view_posting: { type: Number, required: true }
});
//// export untuk model 
module.exports = mongoose.model('posting', postingSchema);