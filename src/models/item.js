const mongoose = require('mongoose');


var itemSchema = new mongoose.Schema({
    task: {
        type: String,
        required: 'This field is required.'
    },
    status: {
        type: String
    }
 
});

mongoose.model('Items', itemSchema);
