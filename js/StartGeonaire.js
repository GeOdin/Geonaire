/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-07
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
	
	// Make some windows toggable with buttons or by clicking on them
	toggleButtons();
	toggleWindows();
	toggleQuestions(questions, lastQuestion, user);
	showIntroduction(questions, user);

	// Return the user object
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

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[0][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[0][3]);

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
/*
	for (i = 1; i < lastQuestion; i++) {
		$("#tableofcontents-question"+i).click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
		}

			// Reset the scrollbars to the top
			$("*").scrollTop(0);

			// Show the cartoon
			$("#header-title-text").html(questions[i][1]); // '<img src="img/'+questions[i][0]+'.png" alt="'+questions[i][1]+'">'

			// Show the question
			$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
			$("#questiontitle").css("text-shadow", "none");
			$("#questiontitle").html(questions[i][0]);

			// Show the answer
			$("#answer").css("color", "rgba(00, 00, 00, .46)");
			$("#answer").css("text-shadow", "none");
			$("#answer").html(questions[i][2]);

			// Change this button to the active table of contents button
			$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
			$(this).removeClass("tableofcontents-item");
			$(this).addClass("tableofcontents-item tableofcontents-active");

			// Return the user object
			return user;
		});
	}
 */
	$("#tableofcontents-question1").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[1][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[1][3]);

		// Show the user age as value of #data-question1
		document.getElementById("data-question1").value = user.age;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question2").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[2][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[2][3]);

		// Show the user nationality as value of #data-question2
		document.getElementById("data-question2").value = user.nationality;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question3").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[3][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[3][3]);

		// Show the user zipcode as value of #data-question3
		document.getElementById("data-question3").value = user.zipcode;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question4").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[4][1]); // '<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[4][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[4][3]);

		// Show the checked user.gamecategories and user.gamecomputers
		if (user.gamecategories[1][1] == "yes") {
			document.getElementById("data-question4-gamecategories-action").checked = true;
		}
		if (user.gamecategories[2][1] == "yes") {
			document.getElementById("data-question4-gamecategories-actionadventure").checked = true;
		}
		if (user.gamecategories[3][1] == "yes") {
			document.getElementById("data-question4-gamecategories-adventure").checked = true;
		}
		if (user.gamecategories[4][1] == "yes") {
			document.getElementById("data-question4-gamecategories-roleplay").checked = true;
		}
		if (user.gamecategories[5][1] == "yes") {
			document.getElementById("data-question4-gamecategories-simulation").checked = true;
		}
		if (user.gamecategories[6][1] == "yes") {
			document.getElementById("data-question4-gamecategories-strategy").checked = true;
		}
		if (user.gamecategories[7][1] == "yes") {
			document.getElementById("data-question4-gamecategories-sports").checked = true;
		}
		if (user.gamecategories[8][1] == "yes") {
			document.getElementById("data-question4-gamecategories-facebook").checked = true;
		}
		if (user.gamecategories[9][1] == "yes") {
			document.getElementById("data-question4-gamecategories-mobilegame").checked = true;
		}
		if (user.gamecategories[10][1] == "yes") {
			document.getElementById("data-question4-gamecategories-augmentedreality").checked = true;
		}
		if (user.gamecategories[11][1] == "yes") {
			document.getElementById("data-question4-gamecategories-seriousgame").checked = true;
		}
		if (user.gamecomputers[1][1] == "yes") {
			document.getElementById("data-question4-gamecomputers-computer").checked = true;
		}
		if (user.gamecomputers[2][1] == "yes") {
			document.getElementById("data-question4-gamecomputers-console").checked = true;
		}
		if (user.gamecomputers[3][1] == "yes") {
			document.getElementById("data-question4-gamecomputers-handheld").checked = true;
		}
		if (user.gamecomputers[4][1] == "yes") {
			document.getElementById("data-question4-gamecomputers-mobilephone").checked = true;
		}
		if (user.gamecomputers[5][1] == "yes") {
			document.getElementById("data-question4-gamecomputers-ipad").checked = true;
		}

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question5").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[5][1]); // '<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[5][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[5][3]);

		// Show the user.gametimehours as value of #data-question5-gametime-hours
		document.getElementById("data-question5-gametime-hours").value = user.gametimehours;
		// Show the user.gametimecategories as value of #data-question5-gametime-categories
		document.getElementById("data-question5-gametime-categories").value = user.gametimecategories;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question6").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "white");
		$("#questiontitle").css("text-shadow", "1px 1px #000000");
		$("#questiontitle").html(questions[6][2]);

		// Show the answer
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html(questions[6][3]);

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question7").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "white");
		$("#questiontitle").css("text-shadow", "1px 1px #000000");
		$("#questiontitle").html(questions[7][2]);

		// Show the answer
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html(questions[7][3]);

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");

		// Return the user object
		return user;
	});
}
