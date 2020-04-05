var express = require("express");

var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res){
	res.send("Goodbye!!!");
});

// "/dog" => "Meou"
app.get("/dog", function(req, res){
	console.log("SOMEONE MADE A REQUEST TO /DOG");
	res.send("Meou!!");
});

//FOR EVERY ERROR PAGE
app.get("*", function(req,res){
	res.send("YOU ARE STAR!");
});

app.listen(3000, function(){
	console.log("server has started!!!");
});
