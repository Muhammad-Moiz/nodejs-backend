require('./models/db');
const userSeed = require('./seeds/userSeed');
const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');



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