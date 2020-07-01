const mongoose = require('mongoose');


const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb';

mongoose.connect( CONNECTION_URI , { useNewUrlParser: true }, (err) => {
    if (!err) { 
        console.log('MongoDB Connection Succeeded.');
    }
    else { console.log('Error in DB connection : ' + err) }
});

require('./item');
require('./user');
