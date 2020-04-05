var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("cat", catSchema);

//Adding a new cat to the database
/*let george = new Cat({
	name: "Clement",
	age: 8,
	temperament: "Evil"
});

george.save((err, cat)=>{
	if(err){
	console.log("Upps, Something went wrong!");
	} else {
		console.log("WE JUST SAVED A CAT TO THE DATABASE: ")
		console.log(cat);
	}
});*/
/*Cat.create({
	name:"Snow white",
	age: 15,
	temperament: "Bland"
}, (err, cat)=>{
		   if(err){
			   console.log("Ups... Error again!");
			   console.log(err);
		   } else {
			   console.log(cat);
		   }
});*/

//retrieve all cats from the DB and console.log each cat
Cat.find({}, (err, cats)=>{
	if(err){
		console.log("Oh noooo, Error!");
		console.log(err);
	} else {
		console.log("All the cats.....");
		console.log(cats);
	}
});