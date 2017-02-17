var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function(req, res){
//     res.send('Hello Express!');
// });

var middleware = require('./middleware');

app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', function(req, res){
	res.send('Welcome to Node World. This is the Node Web module!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started on port ' + PORT +'!!!!');
});