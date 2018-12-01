'use strict'

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const db = require('./config/db');

mongoose.Promise = global.Promise;
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public')); 

require('./app/routes')(app); 

app.listen(port,()=>{
	console.log('Ready to Rage on port ' + port); 		
});	

module.exports = app; 