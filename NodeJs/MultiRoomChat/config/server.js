// express import
var express = require('express');

// express import
var consign = require('consign');

// express import
var bodyParser = require('body-parser');

// express import
var expressValidator = require('express-validator');

// setting variables of 'view engine' and 'views' of express
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// config the middleware express.static
app.use(express.static('./app/public'));

// config the middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// config the middleware expressValidator
app.use(expressValidator());

//config consign directory

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exporting the module.
module.exports = app;