var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

	var campgrounds = [
		{name: "Salmon Creek", image: "https://i.pinimg.com/474x/df/c8/07/dfc807faa7bd0bd0ebe1e689dde6c21e.jpg"},
		{name: "Dominican Bird", image: "https://i.pinimg.com/474x/52/d7/fe/52d7fec1d2bf3c6689316b98ceefe962.jpg"},
		{name: "Puerco Prieto", image: "https://i.pinimg.com/474x/43/79/65/437965c90f9bed88bdcac5f70d9007e8.jpg"},
		{name: "Salmon Creek", image: "https://i.pinimg.com/474x/df/c8/07/dfc807faa7bd0bd0ebe1e689dde6c21e.jpg"},
		{name: "Dominican Bird", image: "https://i.pinimg.com/474x/52/d7/fe/52d7fec1d2bf3c6689316b98ceefe962.jpg"},
		{name: "Puerco Prieto", image: "https://i.pinimg.com/474x/43/79/65/437965c90f9bed88bdcac5f70d9007e8.jpg"},
		{name: "Salmon Creek", image: "https://i.pinimg.com/474x/df/c8/07/dfc807faa7bd0bd0ebe1e689dde6c21e.jpg"},
		{name: "Dominican Bird", image: "https://i.pinimg.com/474x/52/d7/fe/52d7fec1d2bf3c6689316b98ceefe962.jpg"},
		{name: "Puerco Prieto", image: "https://i.pinimg.com/474x/43/79/65/437965c90f9bed88bdcac5f70d9007e8.jpg"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){

	
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
	//get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
//redirect back to campground page
	res.redirect("/campgrounds")
	});

app.get("/campgrounds/new", (req, res) => {
	res.render("new.ejs");
});






app.listen(3000, function(){
	console.log("YelpCamp server has started!")
});