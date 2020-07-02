const mongoose = require('mongoose');

const uri = "mongodb+srv://muhammad-moiz:moiz786110@fyp-49lay.mongodb.net/<dbname>?retryWrites=true&w=majority";

 
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';

mongoose.connect( uri , { useNewUrlParser: true }, (err) => {
    if (!err) { 
        console.log('MongoDB Connection Succeeded.');
    }
    else { console.log('Error in DB connection : ' + err) }
});

 
require('./item');
require('./user');

