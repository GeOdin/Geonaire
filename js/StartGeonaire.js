/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2017-02-05
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
 * showFooterButtons(user);
 * toggleButtons(user)
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
	toggleButtons(user);
	toggleQuestions(questions, lastQuestion, user);
	showIntroduction(questions, user);
	createCircle(user);
	createRectangle(user);
	createPolygon(user);
	clearMap(user);

	// Return the user object
	return user;
}

/////////////////////////////
// showFooterButtons(user) //
/////////////////////////////

// Function to show the proper footer buttons

function showFooterButtons(user) {
	switch(user.currentQuestion) {
		case 6:
		case 7:
			$("#button-overview").css("left", "20%");
			$("#button-cartoon").css("left", "40%");
			$("#button-toolbar").css("display", "block");
			$("#button-toolbar").css("left", "60%");
			$("#toolbar").css("display", "block");
			if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
				$(".question-answer").css("left", "0%");
				$(".question-answer").css("width", "100%");
			} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
				$(".question-answer").css("left", "0%");
				$(".question-answer").css("width", "85%");
			} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
				$(".question-answer").css("left", "10%");
				$(".question-answer").css("width", "90%");
			} else {
				$(".question-answer").css("left", "10%");
				$(".question-answer").css("width", "75%");
			}
			document.getElementById("toolbar").innerHTML = questions[user.currentQuestion][4];
			break;
		default:
			$("#button-overview").css("left", "30%");
			$("#button-cartoon").css("left", "50%");
			$("#button-toolbar").css("display", "none");
			$("#toolbar").css("display", "none");
			if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
				$(".question-answer").css("left", "0%");
				$(".question-answer").css("width", "100%");
			} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
				$(".question-answer").css("left", "0%");
				$(".question-answer").css("width", "85%");
			} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
				$(".question-answer").css("left", "10%");
				$(".question-answer").css("width", "90%");
			} else {
				$(".question-answer").css("left", "10%");
				$(".question-answer").css("width", "75%");
			}
	}
	return user;
}

/////////////////////////
// toggleButtons(user) //
/////////////////////////

// Function for toggling menus with the footer buttons

function toggleButtons(user) {
	// Toggle the overview menu
	$("#button-overview").click(function() {
		$("*").scrollTop(0);
        $("#overview").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".question-answer").css("left", "0%");
			$(".question-answer").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$(".question-answer").css("left", "0%");
			$(".question-answer").css("width", "85%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".question-answer").css("left", "10%");
			$(".question-answer").css("width", "90%");
		} else {
			$(".question-answer").css("left", "10%");
			$(".question-answer").css("width", "75%");
		}
    });

	// Toggle the header
    $("#button-cartoon").click(function() {
		$("*").scrollTop(0);
        $("#header").toggle();
		if ($("#header").css("display").toLowerCase() != "none") {
			$(".question-answer").css("top", "17.25vh");
			$(".question-answer").css("height", "75.25vh");
			$("#map").css("height", "50vh");
			$("#overview").css("top", "17.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("top", "17.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "block") {
			$(".question-answer").css("top", "17.25vh");
			$(".question-answer").css("height", "75.25vh");
			$("#map").css("height", "50vh");
			$("#overview").css("top", "17.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("top", "17.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "none") {
			$(".question-answer").css("top", "0vh");
			$(".question-answer").css("height", "92.5vh");
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
			$(".question-answer").css("left", "0%");
			$(".question-answer").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$(".question-answer").css("left", "0%");
			$(".question-answer").css("width", "85%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$(".question-answer").css("left", "10%");
			$(".question-answer").css("width", "90%");
		} else {
			$(".question-answer").css("left", "10%");
			$(".question-answer").css("width", "75%");
		}
    });
}
