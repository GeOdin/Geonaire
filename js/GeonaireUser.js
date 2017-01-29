/* GeonaireUser.js
 * JavaScript file om de user input te verwerken voor de Geonaire
 * Gemaakt op 2016-12-04
 * Het laatst veranderd op 2016-12-24
 * door GeOdin
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 * user
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * createUser()
 */

//////////////
// var user //
//////////////

var user;

//////////////////
// createUser() //
//////////////////

// Function to create the user object

function createUser() {
	// Set the variables
	var current_question = 0;
	var age = 0;
	var nationality; "Nederland";
	var zipcode = "6708PB";
	var zipcode_city = "";
	var zipcode_lat = "";
	var zipcode_lon = "";
	var user_game_categories = [
		["gamecategory", "yes_or_no"],
		["action", "no"],
		["actionadventure", "no"],
		["adventure", "no"],
		["roleplay", "no"],
		["simulation", "no"],
		["strategy", "no"],
		["sports", "no"],
		["facebook", "no"],
		["mobilegame", "no"],
		["augmentedreality", "no"],
		["seriousgame", "no"]
	];
	var user_game_computers = [
		["gamecomputer", "yes_or_no"],
		["computer", "no"],
		["console", "no"],
		["handheld", "no"],
		["mobilephone", "no"],
		["ipad", "no"]
	];
	var gametime_hours = 0;
	var gametime_categories = "hours";
	var map = "map";
	var living_environment_amount = 0;
	var living_environment_properties = [
		["type", "lat", "lon", "rad", "north", "south", "east", "west"],
		["type", "lat", "lon", "rad", "north", "south", "east", "west"]
	];
	var living_environment = "";
	var friction = "";
	var minimum_nature = "";
	var involvement_bestemmingsplan = "";
	var involvement_participation = "";

	// Add the current question to the user object
	this.currentQuestion = current_question;

	// Add the age of the user
	this.age = age;
	
	// Add the nationality of the user
	this.nationality = nationality;
	
	// Add the zipcode of the user
	this.zipcode = zipcode;
	this.zipcodecity = zipcode_city;
	this.zipcodelat = zipcode_lat;
	this.zipcodelon = zipcode_lon;
	
	// Add the game categories of the user
	this.gamecategories = user_game_categories;
	
	// Add the game computers of the user
	this.gamecomputers = user_game_computers;
	
	// Add the game time hours of the user
	this.gametimehours = gametime_hours;
	
	// Add the game time category of the user
	this.gametimecategories = gametime_categories;

	// Add the map
	this.map = map;

	// Add the amount of living environments (to make sure there is not more than 1)
	this.livingenvironmentamount = living_environment_amount;
	// Add the type of living environments
	this.livingenvironmentproperties = living_environment_properties;
	// Add the living environment of the user
	this.livingenvironment = living_environment;
	
	// Add the friction of the user
	this.friction = friction;

	// Add the user's minimum value of nature
	this.minimum_nature = minimum_nature;

	// Add the involvement of the user
	this.involvement_bestemmingsplan = involvement_bestemmingsplan;
	this.involvement_participation = involvement_participation;
}
