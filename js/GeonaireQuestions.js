/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2016-11-30
 * door GeOdin
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 * questions
 * lastQuestion
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * showQuestion() (currently not active)
 * nextQuestion(currentQuestion, questions, lastQuestion) (currently not active)
 */

///////////////////
// var questions //
///////////////////

var questions = [
	[
		"vraagNummer",
		"Cartoon",
		"Antwoord"
	],
	[
		"Vraag 1",
		"Cartoon vraag 1",
		"Antwoord vraag 1"
	],
	[
		"Vraag 2",
		"Cartoon vraag 2",
		"Antwoord vraag 2"
	],
	[
		"Vraag 3",
		"Cartoon vraag 3",
		"Antwoord vraag 3"
	],
	[
		"Vraag 4",
		"Cartoon vraag 4",
		"Antwoord vraag 4"
	],
	[
		"Vraag 5",
		"Cartoon vraag 5",
		"Antwoord vraag 5"
	],
	[
		"Vraag 6",
		"Cartoon vraag 6",
		"Antwoord vraag 6"
	],
	[
		"Vraag 7",
		"Cartoon vraag 7",
		"Antwoord vraag 7"
	]
];

//////////////////////
// var lastQuestion //
//////////////////////

var lastQuestion = 7;

/////////////////////
// showQuestions() //
/////////////////////

// Function to show the question

/*function showQuestions(questions) {
	// Show the cartoon, question and answer for the according question
	$("#tableofcontents-question1").click(function() {
		$("#cartoonimage").html(questions[1][1]);
    });
	$("#tableofcontents-question2").click(function() {
		$("#cartoonimage").html(questions[2][1]);
    });
 */
/*
	// Show the cartoon, question and answer for the according question
	$("#tableofcontents-question1").click(function() {
		// Change the cartoon
		$("#cartoonimage").html(questions[1][1]);
		// Change the question
		$("#questiontitle").html(questions[1][0]);
		// Change the answer
		$("#answer").html(questions[1][2]);
		// Change the .tableofcontents-active to #tableofcontents-question1
		$(".tableofcontents-item").removeClass("tableofcontents-active");
		$("#tableofcontents-question1").addClass("tableofcontents-active");
    });
	$("#tableofcontents-question2").click(function() {
		// Change the cartoon
		$("#cartoonimage").html(questions[2][1]);
		// Change the question
		$("#questiontitle").html(questions[2][0]);
		// Change the answer
		$("#answer").html(questions[2][2]);
		// Change the .tableofcontents-active to #tableofcontents-question2
    });
	$("#tableofcontents-question3").click(function() {
		// Change the cartoon
		$("#cartoonimage").html(questions[3][1]);
		// Change the question
		$("#questiontitle").html(questions[3][0]);
		// Change the answer
		$("#answer").html(questions[3][2]);
		// Change the .tableofcontents-active to #tableofcontents-question2
    });
 */
/*
}
*/

///////////////////////////////////
// nextQuestion(currentQuestion) //
///////////////////////////////////

// Function to switch to the next questions

/*
function nextQuestion(currentQuestion, questions, lastQuestion) {
	// Prepend the next question before #tableofcontents-nextquestion
	$("#tableofcontents-nextquestion").click(function() {
		// Check whether the current question is not the last question of the questionnaire
		if (currentQuestion < lastQuestion) {
			// Add 1 to var currentQuestion
			currentQuestion++;

			// Remove tableofcontents-active class from all tableofcontent-item elements
			$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
			// Prepend button next question and show it as active
			$(this).before('<li id="tableofcontents-question'+currentQuestion+'" class="tableofcontents-item tableofcontents-active"> Vraag '+currentQuestion+' </li>');
			// Change the cartoon
			$("#cartoonimage").html(questions[currentQuestion][1]);
			// Change the question
			$("#questiontitle").html(questions[currentQuestion][0]);
			// Change the answer
			$("#answer").html(questions[currentQuestion][2]);
			
			// Change the button from "Volgende vraag" to "Verstuur" after the 7th question
			if (currentQuestion == lastQuestion) {
				$(this).html("Verstuur");
				$(this).css("background", "rgba(00, 00, 00, .23)");
				$(this).click(function() {
					// Ask user if he filled in the questionnaire according to truth, if yes -> send to server, if no -> back to questionnaire
				});
			}
		}
    });
}
 */
