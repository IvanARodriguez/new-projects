var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
 	mongoose 		= require("mongoose");

mongoose.connect('mongodb://localhost/yelp_camp', 
				 {
					useUnifiedTopology: true,
					useNewUrlParser: true,
					useCreateIndex: true})
					.then(() => console.log('DB connected!')).catch(err => {
    				console.log(`DB Connection Error: ${err.message}`);
  				});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


// Purposely create a campground...
/*Campground.create(
		{
			name: "Dominican Bird", 
		 	image: "https://i.pinimg.com/474x/52/d7/fe/52d7fec1d2bf3c6689316b98ceefe962.jpg",
			description: "This is one of the most beautiful mountains in the dominican republic where you can go camping, no bathroom, no water, Beautifull granite"
		}, function(err, campground){
			if(err){
				console.log(err);
			} else {
				console.log("Newly Created Campground: ");
				console.log(campground);
			}
		});*/
	
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

//INDEX: Shows all the campgrounds!========================================
app.get("/campgrounds", function(req, res){
	//GET ALL CAMPRGROUND FROM DB
	Campground.find({}, (err, allCampgrounds)=>{
		if (err){
			console.log("There has been an error!")
		} else {
			res.render("index", {campgrounds: allCampgrounds});
		}
	});
});

//CREATE: Add a new campground to the database!===========================
app.post("/campgrounds", (req, res) => {
	//get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
// create a new campground and save to the database...
	Campground.create(newCampground, (err, newlyCreated)=>{
		if(err){
			cosnole.log(err);
		} else {
			//redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	}); 
});

//NEW: shows the form to create new campgrounds ========================
app.get("/campgrounds/new", (req, res) => {
	res.render("new.ejs");
});

//SHOW extra info about one dog ==================================
app.get("/campgrounds/:id", (req, res)=>{
	//find the campground provided
	Campground.findById(req.params.id, (err, foundCampground)=>{
		if(err){
			console.log(err);
		} else {
				// RENDER SHOW TEMPLATE WITH THAT ID
				res.render("show", {campground: foundCampground});
		}
	});
	req.params.id

});




app.listen(3000, function(){
	console.log("YelpCamp server has started!")
});