'use strict';

const express = require('express');
var mongoose = require('mongoose');

// DB setup
mongoose.connect("mongodb://mongo:27017");

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function(req,res) {
	res.send('Hello World\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);