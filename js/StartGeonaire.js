/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-01
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
	//nextQuestion(currentQuestion, questions, lastQuestion);
	//showQuestions(questions);
}

/////////////////////
// toggleButtons() //
/////////////////////

// Function for toggling menus with the footer buttons

function toggleButtons() {
	$("#button-overview").click(function() {
        $("#overview").toggle();
    });
   
    $("#button-cartoon").click(function() {
        $("#cartoon").toggle();
    });
   
    $("#button-toolbar").click(function() {
        $("#toolbar").toggle();
    });
}

/////////////////////
// toggleWindows() //
/////////////////////

// Function for toggling the windows themselves

function toggleWindows() {
	$("#tableofcontents-title").click(function() {
        $("#overview").toggle();
    });
   
    $("#cartoon").click(function() {
        $("#cartoon").toggle();
    });
   
    $("#toolbar").click(function() {
        $("#toolbar").toggle();
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
		$("#cartoonimage").html('<img src="img/'+questions[0][1]+'.png">');
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html("Introductie");
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html("Introductie tekst");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
/*
	for (i = 1; i < lastQuestion; i++) {
		$("#tableofcontents-question"+i).click(function() {
			$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
			$("#cartoonimage").css("text-shadow", "none");
			$("#cartoonimage").html('<img src="img/'+questions[i][1]+'.png">');
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
		$("#cartoonimage").html('<img src="img/'+questions[1][1]+'.png">');
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html("Wat is uw leeftijd?");
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html("Antwoord vraag 1");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
	$("#tableofcontents-question2").click(function() {
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html('<img src="img/'+questions[2][1]+'.png">');
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html("Wat is uw nationaliteit?");
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html("Antwoord vraag 2");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
	$("#tableofcontents-question3").click(function() {
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html('<img src="img/'+questions[3][1]+'.png">');
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html("Wat zijn de 4 cijfers van uw postcode?");
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html("Antwoord vraag 3");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
	$("#tableofcontents-question4").click(function() {
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html('<img src="img/'+questions[4][1]+'.png">');
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html("Wat voor spellen/games speelt u zoal en op welk medium?");
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html("Antwoord vraag 4");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
	$("#tableofcontents-question5").click(function() {
		$("#cartoonimage").css("color", "rgba(00, 00, 00, .46)");
		$("#cartoonimage").css("text-shadow", "none");
		$("#cartoonimage").html('<img src="img/'+questions[5][1]+'.png">');
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html("Hoeveel tijd speelt u over het algemeen computerspellen?");
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html("Antwoord vraag 5");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
	$("#tableofcontents-question6").click(function() {
		$("#cartoonimage").css("color", "white");
		$("#cartoonimage").css("text-shadow", "1px 1px #000000");
		$("#cartoonimage").html('<img src="img/'+questions[6][1]+'.png">');
		$("#questiontitle").css("color", "white");
		$("#questiontitle").css("text-shadow", "1px 1px #000000");
		$("#questiontitle").html("Als u het over uw omgeving hebt, tot hoever reikt deze?");
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html("Antwoord vraag 6");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
	});
	$("#tableofcontents-question7").click(function() {
		$("#cartoonimage").css("color", "white");
		$("#cartoonimage").css("text-shadow", "1px 1px #000000");
		$("#cartoonimage").html('<img src="img/'+questions[7][1]+'.png">');
		$("#questiontitle").css("color", "white");
		$("#questiontitle").css("text-shadow", "1px 1px #000000");
		$("#questiontitle").html("Stel de gemeente zou een windmolen willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden?");
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html("Antwoord vraag 7");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");
	});
}
