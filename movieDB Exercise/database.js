var movie = [
    {
	 title: "Bird Box",
	 hasWashed: true,
	 rating: 5
	},
	{
	 title: "Que Leon",
	 hasWashed: false,
	 rating: 4.2
	},
	{
	 title: "XXX",
	 hasWashed: false,
	 rating: 4.8
	}
]

movie.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWashed){
	 result += "watched ";
	} else {
	result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})
// it will print the following statements

//You have watched "Bird Box" - 5 stars
//You have not seen "Que Leon" - 4.2 stars
//You have not seen "XXX" - 4.8 stars

function buildSstring(movie) {
    var result = "You have ";
	if(movie.hasWashed){
	 result += "watched ";
	} else {
	result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}
movie.forEach(function(movie){
    console.log(buildSstring(movie));
})