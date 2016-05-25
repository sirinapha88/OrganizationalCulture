var express 		= require("Express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	path  			= require("path"),
	knex 			= require("../db/knex"),
	cookieParser  	= require("cookie-parser"),
	request 		= require("request");

app.get("/", function(req,res){

});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {console.log("Listening on localhost:", PORT)});