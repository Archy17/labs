'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  return res.send('Hello, ES6!');
});

var server = app.listen(3000, function () {
  console.log('Running at localhost:3000');
});