const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/database');
connectDB();
app.use(cors());
//running server pada port yang tersedia contoh 4000/8000
app.listen(8000, () => {
    console.log('the server is listening on port 8000!!!');
});
//body parser untuk body bisa ke convert dan terbaca (request.body.name)
app.use(express.json({
    extended: false
}))
app.get('/test', (request, response) => {
    console.log('heyy you are connected now!');
    response.send('okey');
});
//import route
app.use('/posting', require('./routes/posting'));
app.use('/posting-detail', require('./routes/posting-detail'));
app.use('/user', require('./routes/user'));
app.use('/api', require('./routes/tutorial'));
app.use('/api', require('./routes/tutorial-detail'));