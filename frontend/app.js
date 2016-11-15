var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

console.log("Express server running on " + port);
app.listen(process.env.PORT || port);
