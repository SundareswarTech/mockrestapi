// Requiring express in our server
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.use(express.json())

// Defining get request at '/' route
app.get('/', function(req, res) {
res.json({
	"red": 120,
	"blue":250,
	"green":300
});
});

// Defining get request at '/multiple' route
app.get('/multiple', function(req, res) {
res.json({
	"results": [{
		"red": 10,
		"blue": 20,
		"green": 30
	}, {
		"red": 20,
		"blue": 30,
		"green": 50
	}]
});
});

// Defining get request at '/array' route
app.get('/array', function(req, res) {
res.json([{
	number: 1,
	name: 'John',
	gender: 'male'
	},
	{
	number: 2,
	name: 'Ashley',
	gender: 'female'
	}
]);
});

// Setting the server to listen at port 3000
app.listen(3001, function(req, res) {
console.log("Server is running at port 3000");
});
