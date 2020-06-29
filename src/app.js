const http = require('http');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});