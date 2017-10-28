var express = require('express');

var app = express();

app.listen(8090, function(){
	console.log('node server started using express!');

});

app.get('/', function(req, res){
	res.send('Hello! node here...');
});