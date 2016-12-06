/* GeonaireUser.js
 * JavaScript file om de user iput te verwerken voor de Geonaire
 * Gemaakt op 2016-12-04
 * Het laatst veranderd op 2016-12-06
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
	var age = 18;
	var nationality; "Nederland";
	var zipcode = "1234AB";
	var user_game_categories = [
		["gamecategory", "yes_or_no"],
		["action", "no"],
		["action_adventure", "no"],
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
	var living_environment = "";
	var friction = "";

	// Add the age of the user
	this.age = age;
	
	// Add the nationality of the user
	this.nationality = nationality;
	
	// Add the zipcode of the user
	this.zipcode = zipcode;
	
	// Add the game categories of the user
	this.gamecategories = user_game_categories;
	
	// Add the game computers of the user
	this.gamecomputers = user_game_computers;
	
	// Add the game time hours of the user
	this.gametimehours = gametime_hours;
	
	// Add the game time category of the user
	this.gametimecategories = gametime_categories;
	
	// Add the living environment of the user
	this.livingenvironment = living_environment;
	
	// Add the friction of the user
	this.friction = friction;
}
 