/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-06
 * door GeOdin
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 *
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * startGeonaire()
 * drawMap()
 * showIntroduction(questions, user)
 * showQuestion1(questions, user)
 * showQuestion2(questions, user)
 * showQuestion3(questions, user)
 * showQuestion4(questions, user)
 * showQuestion5(questions, user)
 * showQuestion6(questions, user)
 * showQuestion7(questions, user)
 * toggleButtons()
 * toggleWindows()
 * toggleQuestions(questions, lastQuestion, user)
 */

/////////////////////
// startGeonaire() //
/////////////////////

// Function for starting the Geonaire

function startGeonaire() {
	// Set the starting variables
/*
	// Set the currentQuestion to 1
	var currentQuestion = 1;
 */
	// Create the user object
	user = new createUser();
	
	// Make some windows toggable with buttons or by clicking on them
	toggleButtons();
	toggleWindows();
	toggleQuestions(questions, lastQuestion, user);
	showIntroduction(questions, user);
	return user;
}

///////////////
// drawMap() //
///////////////

// Function to draw the map

function drawMap() {
	// Set the variables
	var zoomLevel = 14;
	var lat = 51.974151;
	var lon = 5.664084;

	// Create and draw the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: zoomLevel,
		center: new google.maps.LatLng(lat, lon),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	// Show the map
	$("#map").css("display", "block");

	// Adjust #header to go down a little bit for the GoogleMaps buttons in the top-left corner
/*
	$("#header").css("top", "8.5vh");
	$("#header").css("height", "8.75vh");
 */
/*
	if ($("#header").css("top") == "0vh" && $("#header").css("height") == "17.25vh") {
		$("#header").css("top", "5.5vh");
		$("#header").css("height", "11.75vh");
	}
 */
}

///////////////////////////////////////
// showIntroduction(questions, user) //
///////////////////////////////////////

// Function for showing the introduction on startGeonaire

function showIntroduction(questions, user) {

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[0][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[0][3]);
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-introduction").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion1(questions, user) //
////////////////////////////////////

// Function for showing question 1

function showQuestion1(questions, user) {

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[1][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[1][3]);
	$("#tableofcontents-question1").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question1").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion2(questions, user) //
////////////////////////////////////

// Function for showing question 2

function showQuestion2(questions, user) {

	// Save the data from question 1 and ad it to the user object
	var age = $("#data-question1").val();
	user.age = age;

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[2][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[2][3]);
	$("#tableofcontents-question2").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question2").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion3(questions, user) //
////////////////////////////////////

// Function for showing question 3

function showQuestion3(questions, user) {

	// Save the data from question 2 and ad it to the user object
	var nationality = $("#data-question2").val();
	user.nationality = nationality;

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[3][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[3][3]);
	$("#tableofcontents-question3").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question3").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion4(questions, user) //
////////////////////////////////////

// Function for showing question 4

function showQuestion4(questions, user) {

	// Save the data from question 3 and ad it to the user object
	var zipcode = $("#data-question3").val();
	user.zipcode = zipcode;

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[4][1]); // '<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[4][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[4][3]);
	$("#tableofcontents-question4").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question4").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion5(questions, user) //
////////////////////////////////////

// Function for showing question 5

function showQuestion5(questions, user) {

	// Set the variables
	var game_categories = [
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
	var game_computers = [
		["gamecomputer", "yes_or_no"],
		["computer", "no"],
		["console", "no"],
		["handheld", "no"],
		["mobilephone", "no"],
		["ipad", "no"]
	];
	// Save the data from question 4 and ad it to the user object
	// Save the different game categories to the user object
	if ($('#data-question4-gamecategories-action').is(':checked')) {
		game_categories[1][1] = "yes";
	} else {
		game_categories[1][1] = "no";
	}
	//alert(game_categories[1][0]+game_categories[1][1]);
/*
	game_categories[2][1] = $("#data-question3").val(); // action-adventure // #data-question4-gamecategories-actionadventure
	game_categories[3][1] = $("#data-question3").val(); // adventure // #data-question4-gamecategories-adventure
	game_categories[4][1] = $("#data-question3").val(); // roleplay // #data-question4-gamecategories-roleplay
	game_categories[5][1] = $("#data-question3").val(); // simulation // #data-question4-gamecategories-simulation
	game_categories[6][1] = $("#data-question3").val(); // strategy // #data-question4-gamecategories-strategy
	game_categories[7][1] = $("#data-question3").val(); // sports // #data-question4-gamecategories-sports
	game_categories[8][1] = $("#data-question3").val(); // facebook // #data-question4-gamecategories-facebook
	game_categories[9][1] = $("#data-question3").val(); // mobilegame // #data-question4-gamecategories-mobilegame
	game_categories[10][1] = $("#data-question3").val(); // augmentedreality // #data-question4-gamecategories-augmentedreality
	game_categories[11][1] = $("#data-question3").val(); // seriousgame // #data-question4-gamecategories-seriousgame
	user.gamecategories = game_categories;
	// Save the different game computers to the user object
	game_computer[1][1] = $("#data-question3").val(); // computer // #data-question4-gamecomputers-computer
	game_computer[2][1] = $("#data-question3").val(); // console // #data-question4-gamecomputers-console
	game_computer[3][1] = $("#data-question3").val(); // handheld // #data-question4-gamecomputers-handheld
	game_computer[4][1] = $("#data-question3").val(); // mobilephone // #data-question4-gamecomputers-mobilephone
	game_computer[5][1] = $("#data-question3").val(); // ipad // #data-question4-gamecomputers-ipad
	user.gamecomputers = game_computers;
	//alert(user.nationality);
 */

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[5][1]); // '<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[5][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[5][3]);
	$("#tableofcontents-question5").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question5").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion6(questions, user) //
////////////////////////////////////

// Function for showing question 6

function showQuestion6(questions, user) {

	// Save the data from question 5 and ad it to the user object
/*
	var nationality = $("#data-question2").val();
	user.nationality = nationality;
	//alert(user.nationality);
 */

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'
//	$("#header-title-logo").css("background", "rgba(00, 00, 00, .36)");
	$("#questiontitle").css("color", "white");
	$("#questiontitle").css("text-shadow", "1px 1px #000000");
	$("#questiontitle").html(questions[6][2]);
	$("#answer").css("color", "white");
	$("#answer").css("text-shadow", "1px 1px #000000");
	$("#answer").html(questions[6][3]);
	$("#tableofcontents-question6").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question6").addClass("tableofcontents-item tableofcontents-active");

	// Draw the map
	drawMap();

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}

	// Reset the width of #content
	if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
		$(".content").css("left", "0%");
		$(".content").css("width", "100%");
	} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
		$(".content").css("left", "0%");
		$(".content").css("width", "92.5%");
	} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
		$(".content").css("left", "17.5%");
		$(".content").css("width", "82.5%");
	} else {
		$(".content").css("left", "17.5%");
		$(".content").css("width", "75%");
	}

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion7(questions, user) //
////////////////////////////////////

// Function for showing question 7

function showQuestion7(questions, user) {

	// Save the data from question 6 and ad it to the user object
/*
	var nationality = $("#data-question2").val();
	user.nationality = nationality;
	//alert(user.nationality);
 */

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
	$("#questiontitle").css("color", "white");
	$("#questiontitle").css("text-shadow", "1px 1px #000000");
	$("#questiontitle").html(questions[7][2]);
	$("#answer").css("color", "white");
	$("#answer").css("text-shadow", "1px 1px #000000");
	$("#answer").html(questions[7][3]);
	$("#tableofcontents-question7").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question7").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

/////////////////////
// toggleButtons() //
/////////////////////

// Function for toggling menus with the footer buttons

function toggleButtons() {
	$("#button-overview").click(function() {
		$("*").scrollTop(0);
        $("#overview").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "82.5%");
		} else {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "75%");
		}
    });
	
    $("#button-cartoon").click(function() {
		$("*").scrollTop(0);
        $("#header").toggle();
		if ($("#header").css("display").toLowerCase() == "fixed") {
			$(".main").css("top", "17.25vh");
			$(".main").css("height", "75.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "block") {
			$(".main").css("top", "17.25vh");
			$(".main").css("height", "75.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "none") {
			$(".main").css("top", "0vh");
			$(".main").css("height", "92.5vh");
			$("#overview").css("height", "92.5vh");
			$("#toolbar").css("height", "92.5vh");
		}
    });
   
    $("#button-toolbar").click(function() {
		$("*").scrollTop(0);
        $("#toolbar").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "82.5%");
		} else {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "75%");
		}
    });
}

/////////////////////
// toggleWindows() //
/////////////////////

// Function for toggling the windows themselves

function toggleWindows() {
	$("#tableofcontents-title").click(function() {
		$("*").scrollTop(0);
        $("#overview").css("display", "none");
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "82.5%");
		} else {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "75%");
		}
    });
   
    $("#toolbar").click(function() {
		$("*").scrollTop(0);
        $("#toolbar").css("display", "none");
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$(".content").css("left", "0%");
			$(".content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "82.5%");
		} else {
			$(".content").css("left", "17.5%");
			$(".content").css("width", "75%");
		}
    });
}

////////////////////////////////////////////////////
// toggleQuestions(questions, lastQuestion, user) //
////////////////////////////////////////////////////

// Function for toggling the questions

function toggleQuestions(questions, lastQuestion, user) {
	$("#tableofcontents-introduction").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[0][2]);
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[0][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
/*
	for (i = 1; i < lastQuestion; i++) {
		$("#tableofcontents-question"+i).click(function() {
			$("*").scrollTop(0);
			$("#header-title-text").html(questions[i][1]); // '<img src="img/'+questions[i][0]+'.png" alt="'+questions[i][1]+'">'
			$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
			$("#questiontitle").css("text-shadow", "none");
			$("#questiontitle").html(questions[i][0]);
			$("#answer").css("color", "rgba(00, 00, 00, .46)");
			$("#answer").css("text-shadow", "none");
			$("#answer").html(questions[i][2]);
			$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
			$(this).removeClass("tableofcontents-item");
			$(this).addClass("tableofcontents-item tableofcontents-active");
			return user;
		});
	}
 */
	$("#tableofcontents-question1").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[1][2]);
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[1][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
	$("#tableofcontents-question2").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[2][2]);
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[2][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
	$("#tableofcontents-question3").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[3][2]);
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[3][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
	$("#tableofcontents-question4").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[4][1]); // '<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">'
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[4][2]);
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[4][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
	$("#tableofcontents-question5").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[5][1]); // '<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">'
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[5][2]);
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[5][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
	$("#tableofcontents-question6").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'
		$("#questiontitle").css("color", "white");
		$("#questiontitle").css("text-shadow", "1px 1px #000000");
		$("#questiontitle").html(questions[6][2]);
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html(questions[6][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		return user;
	});
	$("#tableofcontents-question7").click(function() {
		$("*").scrollTop(0);
		$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
		$("#questiontitle").css("color", "white");
		$("#questiontitle").css("text-shadow", "1px 1px #000000");
		$("#questiontitle").html(questions[7][2]);
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html(questions[7][3]);
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");
		return user;
	});
}
