var express = require("express");
var app = express();
//----INCLUDE THE DIRECTORY PUBLIC FOR TEMPLATE
app.use(express.static("public"));
//----INCLUDE .EJS TO ALL DIRECTORY NAME E.J HOME.EJS
app.set("view engine", "ejs");

//---- MAIN PAGE TEMPLATE
app.get("/", function(req,res){
	res.render("home");
});

//----- FALLINLOVEWITH/:CUSTOM TEMPLATE
app.get("/fallinlovewith/:thing", function(req,res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
});

//----- CREATE A POSTS TEMPLATE
app.get("/posts", function(req, res){
	var posts = [
		{title: "post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Charlie"},
		{title: "Can you believe this pomsky?", author: "Colt"},
	];
	res.render("posts", {posts: posts});
})

//----LISTEN TO NODE PORT
app.listen(3000, function(){
	console.log("server is listening!");
});