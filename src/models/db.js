const mongoose = require('mongoose');

 
 
const CONNECTION_URI ="mongodb+srv://muhammad-moiz:moiz786110@fyp-49lay.mongodb.net/mydb?retryWrites=true&w=majority" || 'mongodb://localhost:27017/mydb';

mongoose.connect( CONNECTION_URI , { useNewUrlParser: true }, (err) => {
    if (!err) { 
        console.log('MongoDB Connection Succeeded.');
    }
    else { console.log('Error in DB connection : ' + err) }
});


require('./item');
require('./user');

