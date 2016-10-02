'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    MongoClient = require('mongodb').MongoClient,
    db,
    app = express();

const connectString = 'mongodb://localhost:27017';


//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

MongoClient.connect(connectString, (err, dataBase) => {
	if(err) 
		throw err;
	console.log("Successfully connected to the database");
	db = dataBase;
});

app.get('/', (req, res, next) => {
	res.render('index');
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, () =>{
	console.log('listening on Port:3000');
});    

