const DB_URL = 'mongodb://localhost:27017/tasklistapp';
const mongoose = require('mongoose');

mongoose.connect(DB_URL, (err, result) => {
    if(err) {
        console.log("Error");
        throw err;
    }
    console.log("DataBase Connected !!");
});
