var express = require("express");

var app = express();

// visiting "/" should print " Welcome to my first Assignment.
app.get("/", function(req, res){
	res.send("Welcome to my first Express Assignment");
});

//route for 3 different animals and their way to talk
app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "oink",
		cow: "Moo",
		dog: "Woof Woof",
		cat: "I hate you human",
		goldfish: "..."
		
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says " + "'" + sound + "'");
});

//printing hello and blah several time
app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";
	
	for(var i = 0; i < times; i++){
		result += message + " ";
	}
	res.send(result);
});


//lastly error page for all other inquires
app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing with your life?");
});

//Listen to node port{
app.listen(3000, function(){
	console.log("NOW SERVING NODE APP");
});