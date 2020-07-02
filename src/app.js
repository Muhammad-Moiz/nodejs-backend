require('./models/db');
const userSeed = require('./seeds/userSeed');
const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var cors = require('cors');

const hostname =   '0.0.0.0';
const port = process.env.PORT || 3000  ;

console.log(process.env.IP );
const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');

userSeed();
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

// allow all CORS Request
app.use(cors());// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyparser.json());
  
app.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);

});

app.use('/item', itemController);

app.use('/user', userController);