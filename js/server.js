var express = require('express');
var bodyParser = require('body-parser')
var request = require('request');
var app = express();

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json())

app.listen(8090, function(){
	console.log('node server started using express!');

});

app.get('/', function(req, res){
	res.send('Hello! node here...');
});

app.get('/greetings/:name', function(req, res){
	res.send('Hello '+req.params.name);
});

app.get('/greetings/ejs/:name', function(req, res){
	res.render('hello.ejs', {name: req.params.name});
});

app.get('/welcome', function(req, res){
	res.render('welcome');
});

app.post('/details', function(req, res){
	console.log(req.body);
	res.send('recieved');
});

app.get("/site/:name", function(req, res){
	request("http://"+req.params.name, function(error, response, body){
		console.log(response);
	});
	res.send('done');
});

app.get("/sample-json", function(req, res){
	res.send('{"name":"amandeep", "age":38}');

});
app.get("/get-sample-json", function(req, res){
	request("http://localhost:8090/sample-json", function(error, response, body){
		var jsonObj = JSON.parse(body);
		console.log(jsonObj);
		res.send(jsonObj['name']);
	});
});

app.get("/params-query-example/:param", function(req, res){
	res.send('You entered param - '+req.params.param+' and query - '+req.query.query);
});