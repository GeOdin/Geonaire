/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2016-12-01
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
		"Introductie",
		"cartoon-introduction",
		"Introductie tekst"
	],
	[
		"Wat is uw leeftijd?",
		"cartoon-question1",
		"Antwoord vraag 1"
	],
	[
		"Wat is uw nationaliteit?",
		"cartoon-question2",
		"Antwoord vraag 2"
	],
	[
		"Wat zijn de 4 cijfers van uw postcode?",
		"cartoon-question3",
		"Antwoord vraag 3"
	],
	[
		"Wat voor spellen/games speelt u zoal en op welk medium?",
		"cartoon-question4",
		"Antwoord vraag 4"
	],
	[
		"Hoeveel tijd speelt u over het algemeen computerspellen?",
		"cartoon-question5",
		"Antwoord vraag 5"
	],
	[
		"Als u het over uw omgeving hebt, tot hoever reikt deze?",
		"cartoon-question6",
		"Antwoord vraag 6"
	],
	[
		"Stel de gemeente zou een windmolen willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden?",
		"cartoon-question7",
		"Antwoord vraag 7"
	],
	[
		"vraagNummer",
		"CartoonName",
		"Antwoord"
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
