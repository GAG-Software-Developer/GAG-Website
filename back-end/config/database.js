//konfigurasi untuk mengoneksikan server ke database
const mongoose = require('mongoose');
const config = require('config');
const database = config.get('urlMongoDB');
const connectDB = async () => {
    try {
        await mongoose.connect(database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB is Connected!!!');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};
//untuk export koneksi database ke file yang membutuhkan
module.exports = connectDB;