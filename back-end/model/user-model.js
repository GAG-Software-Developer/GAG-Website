const mongoose = require('mongoose');
//// Contoh default value
// const postingSchema = mongoose.Schema({
//     title_posting: { type: String, required: true , default: 'aktif'}
// });
const postingSchema = mongoose.Schema({
    name_user: { type: String, required: true },
    email_user: { type: String, required: true },
    password_user: { type: String, required: true }
});
//// export untuk model 
module.exports = mongoose.model('user', postingSchema);

