var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var database = require('./config/secrets.js');

mongoose.connect(database.url);

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

require('./routes')(app, router);

app.listen(port);
console.log('Server running on port ' + port);
