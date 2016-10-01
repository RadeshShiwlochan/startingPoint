'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	res.render('index');
});

app.listen(3000, () =>{
	console.log('listening on Port:3000');
});    

