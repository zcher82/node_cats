// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var index_routes = require('./routes/index_routes'); //defined variable to USE below

app.set('port', 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.use('/felines', index_routes); //app.use('/felines') because we need to tell server which module to use
app.use('/', index);




app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
