var express = require('express');
var app = express();
var mongoose = require('mongoose');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var port = process.env.PORT||3000;
var setupController = require('./controller/setController');
const apiController = require('./controller/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/NODENODE');

// setupController(app);
apiController(app);
app.listen(port,()=>{
    console.log('listening to 3000');
})