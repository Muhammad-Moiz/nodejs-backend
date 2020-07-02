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

app.use(cors());

userSeed();
var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());
  
app.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);

});

app.use('/item', itemController);

app.use('/user', userController);