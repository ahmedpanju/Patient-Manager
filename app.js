var express = require('express');
var app = express();
var port = process.env.PORT || 8080 
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

require('./routes.js')(app); 

app.listen(port, function() {
    console.log("App is running on port " + port);
});