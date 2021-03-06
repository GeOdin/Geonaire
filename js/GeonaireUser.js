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
	var age = "";
	var nationality = "";
	var zipcode = "";  // 6708PB
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
		["seriousgame", "no"]
	];
	var user_game_stories = [
		["gamestories", "yes_or_no"],
		["fiction", "no"],
		["nonfiction", "no"]
	];
	var user_game_perspectives = [
		["gameperspectives", "yes_or_no"],
		["2d", "no"],
		["3d", "no"],
		["firstperson", "no"],
		["thirdperson", "no"],
		["augmentedreality", "no"],
		["virtualreality", "no"]
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
    var living_environment_wkt = "";
	var friction_positive_large = "";
	var friction_positive_large_x = 10;
	var friction_positive_large_y = 10;
	var friction_positive_medium = "";
	var friction_positive_medium_x = 10;
	var friction_positive_medium_y = 10;
	var friction_positive_small = "";
	var friction_positive_small_x = 10;
	var friction_positive_small_y = 10;
	var friction_negative_small = "";
	var friction_negative_small_x = 10;
	var friction_negative_small_y = 10;
	var friction_negative_medium = "";
	var friction_negative_medium_x = 10;
	var friction_negative_medium_y = 10;
	var friction_negative_large = "";
	var friction_negative_large_x = 10;
	var friction_negative_large_y = 10;
	var priority_1 = "";
	var priority_2 = "";
	var priority_3 = "";
	var priority_4 = "";
	var priority_5 = "";
	var minimum_nature = "";
	var involvement_bestemmingsplan = "";
	var involvement_participation = "";
	var send_truth = "no";
	var email = "";
	var send_email = "no";

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
	// Add the game story of the user
	this.gamestories = user_game_stories;
	// Add the game perspective of the user
	this.gameperspectives = user_game_perspectives;
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
        // Add the living environment of the user in WKT
        this.livingenvironmentWKT = living_environment_wkt;
	
	// Add the friction of the user
	this.frictionpositivelarge = friction_positive_large;
	this.frictionpositivelargex = friction_positive_large_x;
	this.frictionpositivelargey = friction_positive_large_y;
	this.frictionpositivemedium = friction_positive_medium;
	this.frictionpositivemediumx = friction_positive_medium_x;
	this.frictionpositivemediumy = friction_positive_medium_y;
	this.frictionpositivesmall = friction_positive_small;
	this.frictionpositivesmallx = friction_positive_small_x;
	this.frictionpositivesmally = friction_positive_small_y;
	this.frictionnegativesmall = friction_negative_small;
	this.frictionnegativesmallx = friction_negative_small_x;
	this.frictionnegativesmally = friction_negative_small_y;
	this.frictionnegativemedium = friction_positive_medium;
	this.frictionnegativemediumx = friction_positive_medium_x;
	this.frictionnegativemediumy = friction_positive_medium_y;
	this.frictionnegativelarge = friction_negative_large;
	this.frictionnegativelargex = friction_negative_large_x;
	this.frictionnegativelargey = friction_negative_large_y;

	// Add the priorities of the user
	this.priority1 = priority_1;
	this.priority2 = priority_2;
	this.priority3 = priority_3;
	this.priority4 = priority_4;
	this.priority5 = priority_5;

	// Add the user's minimum value of nature
	this.minimum_nature = minimum_nature;

	// Add the involvement of the user
	this.involvement_bestemmingsplan = involvement_bestemmingsplan;
	this.involvement_participation = involvement_participation;

    // Add the email of the user, including if the user wants an email about the results and whether he has said the truth in the questionnaire
    this.send_truth = send_truth;
    this.email = email;
    this.send_email = send_email;
}
