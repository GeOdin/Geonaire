/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2016-11-30
 * door GeOdin
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 * 
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * nextQuestion(currentQuestion)
 */

// qeustions prepend;
// questions, nextquestion, verandert in send na laatste vraag
// for-loop itereert door het aantal vragen (staat van tevoren vast)

//var currentQuestion;
///////////////////////////////////
// nextQuestion(currentQuestion) //
///////////////////////////////////

// Function to switch to the next questions

function nextQuestion(currentQuestion) {
	// Set the variables
	var lastQuestion = 7;

	// Prepend the next question before #tableofcontents-nextquestion
	$("#tableofcontents-nextquestion").click(function() {
		// Check whether the current question is not the last question of the questionnaire
		if (currentQuestion < lastQuestion) {
			// Add 1 to var currentQuestion
			currentQuestion++;

			// Prepend button next question
			$(this).before('<li id="tableofcontents-question'+currentQuestion+'" class="tableofcontents-item"> Vraag '+currentQuestion+' </li>');
			
			// Change the button to send after the 7th question
			if (currentQuestion == lastQuestion) {
				$(this).html("Verstuur");
				$(this).click(function() {
					// Ask user if he filled in the questionnaire according to truth, if yes -> send, if no -> back to questionnaire
				});
			}
		}
    });
}
