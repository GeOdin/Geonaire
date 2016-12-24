/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-24
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
 * toggleButtons()
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
	
	// Make some windows toggable with buttons or by clicking on them
	toggleButtons();
	toggleQuestions(questions, lastQuestion, user);
	showIntroduction(questions, user);
	createCircle(user);
	createRectangle(user);
	createPolygon(user);
	clearMap(user);

	// Return the user object
	return user;
}

/////////////////////
// toggleButtons() //
/////////////////////

// Function for toggling menus with the footer buttons

function toggleButtons() {
	// Toggle the overview menu
	$("#button-overview").click(function() {
		$("*").scrollTop(0);
        $("#overview").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#question-answer").css("left", "0%");
			$("#question-answer").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$("#question-answer").css("left", "0%");
			$("#question-answer").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#question-answer").css("left", "17.5%");
			$("#question-answer").css("width", "82.5%");
		} else {
			$("#question-answer").css("left", "17.5%");
			$("#question-answer").css("width", "75%");
		}
    });

	// Toggle the header
    $("#button-cartoon").click(function() {
		$("*").scrollTop(0);
        $("#header").toggle();
		if ($("#header").css("display").toLowerCase() != "none") {
			$("#question-answer").css("top", "17.25vh");
			$("#question-answer").css("height", "75.25vh");
			$("#map").css("height", "50vh");
			$("#overview").css("top", "17.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("top", "17.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "block") {
			$("#question-answer").css("top", "17.25vh");
			$("#question-answer").css("height", "75.25vh");
			$("#map").css("height", "50vh");
			$("#overview").css("top", "17.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("top", "17.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "none") {
			$("#question-answer").css("top", "0vh");
			$("#question-answer").css("height", "92.5vh");
			$("#map").css("height", "67.25vh");
			$("#overview").css("top", "0vh");
			$("#overview").css("height", "92.5vh");
			$("#toolbar").css("top", "0vh");
			$("#toolbar").css("height", "92.5vh");
		}
    });

	// Toggle the toolbar
    $("#button-toolbar").click(function() {
		$("*").scrollTop(0);
        $("#toolbar").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#question-answer").css("left", "0%");
			$("#question-answer").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$("#question-answer").css("left", "0%");
			$("#question-answer").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#question-answer").css("left", "17.5%");
			$("#question-answer").css("width", "82.5%");
		} else {
			$("#question-answer").css("left", "17.5%");
			$("#question-answer").css("width", "75%");
		}
    });
}
