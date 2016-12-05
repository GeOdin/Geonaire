/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-05
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
 * showIntroduction(questions)
 * showQuestion1(questions)
 * showQuestion2(questions)
 * showQuestion3(questions)
 * showQuestion4(questions)
 * showQuestion5(questions)
 * showQuestion6(questions)
 * showQuestion7(questions)
 * toggleButtons()
 * toggleWindows()
 * toggleQuestions(questions, lastQuestion)
 */

/////////////////////
// startGeonaire() //
/////////////////////

// Function for starting the Geonaire

function startGeonaire() {
	// Set the starting variables
	var currentQuestion = 1;
	
	// Make some windows toggable with buttons or by clicking on them
	toggleButtons();
	toggleWindows();
	toggleQuestions(questions, lastQuestion);
	showIntroduction(questions);
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

/////////////////////////////////
// showIntroduction(questions) //
/////////////////////////////////

// Function for showing the introduction on startGeonaire

function showIntroduction(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "none");
	$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[0][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[0][3]);
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-introduction").addClass("tableofcontents-item tableofcontents-active");
}

//////////////////////////////
// showQuestion1(questions) //
//////////////////////////////

// Function for showing question 1

function showQuestion1(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "none");
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
}

//////////////////////////////
// showQuestion2(questions) //
//////////////////////////////

// Function for showing question 2

function showQuestion2(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "none");
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
}

//////////////////////////////
// showQuestion3(questions) //
//////////////////////////////

// Function for showing question 3

function showQuestion3(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "none");
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
}

//////////////////////////////
// showQuestion4(questions) //
//////////////////////////////

// Function for showing question 4

function showQuestion4(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "none");
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
}

//////////////////////////////
// showQuestion5(questions) //
//////////////////////////////

// Function for showing question 5

function showQuestion5(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "none");
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
}

//////////////////////////////
// showQuestion6(questions) //
//////////////////////////////

// Function for showing question 6

function showQuestion6(questions) {
	$("*").scrollTop(0);
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
}

//////////////////////////////
// showQuestion7(questions) //
//////////////////////////////

// Function for showing question 7

function showQuestion7(questions) {
	$("*").scrollTop(0);
	$("#map").css("display", "block");
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

//////////////////////////////////////////////
// toggleQuestions(questions, lastQuestion) //
//////////////////////////////////////////////

// Function for toggling the questions

function toggleQuestions(questions, lastQuestion) {
	$("#tableofcontents-introduction").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "none");
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
	});
/*
	for (i = 1; i < lastQuestion; i++) {
		$("#tableofcontents-question"+i).click(function() {
			$("*").scrollTop(0);
			$("#map").css("display", "none");
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
		});
	}
 */
	$("#tableofcontents-question1").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "none");
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
	});
	$("#tableofcontents-question2").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "none");
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
	});
	$("#tableofcontents-question3").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "none");
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
	});
	$("#tableofcontents-question4").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "none");
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
	});
	$("#tableofcontents-question5").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "none");
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
	});
	$("#tableofcontents-question6").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "block");
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
	});
	$("#tableofcontents-question7").click(function() {
		$("*").scrollTop(0);
		$("#map").css("display", "block");
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
	});
}
