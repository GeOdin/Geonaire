/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-02
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
	//nextQuestion(currentQuestion, questions, lastQuestion);
	//showQuestions(questions);
}

/////////////////////////////////
// showIntroduction(questions) //
/////////////////////////////////

// Function for showing the introduction on startGeonaire

function showIntroduction(questions) {
	$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
	$("#cartoonimage").css("text-shadow", "none");
	$("#cartoonimage").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
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
	$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
	$("#cartoonimage").css("text-shadow", "none");
	$("#cartoonimage").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'
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
	$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
	$("#cartoonimage").css("text-shadow", "none");
	$("#cartoonimage").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'
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
	$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
	$("#cartoonimage").css("text-shadow", "none");
	$("#cartoonimage").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'
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
	$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
	$("#cartoonimage").css("text-shadow", "none");
	$("#cartoonimage").html('<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">');
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
	$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
	$("#cartoonimage").css("text-shadow", "none");
	$("#cartoonimage").html('<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">');
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
	$("#cartoonimage").css("color", "white");
	$("#cartoonimage").css("text-shadow", "1px 1px #000000");
	$("#cartoonimage").html('<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">');
	$("#questiontitle").css("color", "white");
	$("#questiontitle").css("text-shadow", "1px 1px #000000");
	$("#questiontitle").html(questions[6][2]);
	$("#answer").css("color", "white");
	$("#answer").css("text-shadow", "1px 1px #000000");
	$("#answer").html(questions[6][3]);
	$("#tableofcontents-question6").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question6").addClass("tableofcontents-item tableofcontents-active");
}

//////////////////////////////
// showQuestion7(questions) //
//////////////////////////////

// Function for showing question 7

function showQuestion7(questions) {
	$("#cartoonimage").css("color", "white");
	$("#cartoonimage").css("text-shadow", "1px 1px #000000");
	$("#cartoonimage").html('<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">');
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
        $("#overview").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "82.5%");
		} else {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "75%");
		}
    });
    $("#button-cartoon").click(function() {
        $("#cartoon").toggle();
    });
   
    $("#button-toolbar").click(function() {
        $("#toolbar").toggle();
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "82.5%");
		} else {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "75%");
		}
    });
}

/////////////////////
// toggleWindows() //
/////////////////////

// Function for toggling the windows themselves

function toggleWindows() {
	$("#tableofcontents-title").click(function() {
        $("#overview").css("display", "none");
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "82.5%");
		} else {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "75%");
		}
    });
   
    $("#cartoon").click(function() {
        $("#cartoon").css("display", "none");
    });
   
    $("#toolbar").click(function() {
        $("#toolbar").css("display", "none");
		if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "100%");
		} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
			$("#content").css("left", "0%");
			$("#content").css("width", "92.5%");
		} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "82.5%");
		} else {
			$("#content").css("left", "17.5%");
			$("#content").css("width", "75%");
		}
    });
}

//////////////////////////////////////////////
// toggleQuestions(questions, lastQuestion) //
//////////////////////////////////////////////

// Function for toggling the questions

function toggleQuestions(questions, lastQuestion) {
	$("#tableofcontents-introduction").click(function() {
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
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
			$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
			$("#cartoonimage").css("text-shadow", "none");
			$("#cartoonimage").html('<img src="img/'+questions[i][1]+'.png" alt="'+questions[i][3]+'">');
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
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'
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
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'
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
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'
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
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html('<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">');
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
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html('<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">');
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
		$("#cartoonimage").css("color", "white");
		$("#cartoonimage").css("text-shadow", "1px 1px #000000");
		$("#cartoonimage").html('<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">');
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
		$("#cartoonimage").css("color", "white");
		$("#cartoonimage").css("text-shadow", "1px 1px #000000");
		$("#cartoonimage").html('<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">');
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
