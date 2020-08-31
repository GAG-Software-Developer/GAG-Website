const mongoose = require('mongoose');
//// Contoh default value
// const postingSchema = mongoose.Schema({
//     title_posting: { type: String, required: true , default: 'aktif'}
// });
const userSchema = mongoose.Schema({
    fullname_user: { type: String, required: true },
    email_user: { type: String, required: true },
    password_user: { type: String, required: true },
    photo_user: { type: String, required: true },
    github_user: { type: String, required: true },
    description_user: { type: String, required: true },
    skill_set_user: { type: [String], required: true },
    academic_user: { type: [{
        university_name: {type: String, required: true},
        enrollment_year: { type: String, required: true },
        course: { type: String, required: true }
    }], required: true },
    experience_user: { type: [{
        company_name: {type: String, required: true},
        year_of_work: { type: String, required: true },
        role: { type: String, required: true }
    }], required: true }

});
//// export untuk model 
module.exports = mongoose.model('user', userSchema);

