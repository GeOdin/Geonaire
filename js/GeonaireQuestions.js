/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2016-12-01
 * door GeOdin
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 * checkboxesGamecategories
 * dropdownNationalities
 * lastQuestion
 * questions
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * sendQuestionnaire()
 * showQuestion() (currently not active)
 * nextQuestion(currentQuestion, questions, lastQuestion) (currently not active)
 */

//////////////////////////////////
// var checkboxesGamecategories //
//////////////////////////////////

var checkboxesGamecategories = '<form onsubmit="showQuestion5(questions);"><table align="center" border="1px solid rgba(00, 00, 00, .46)"><tr style="text-align:center"><th colspan="2">Game categori&euml;n</th><th>Game computer</th></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="action">Actie</td><td><input type="checkbox" name="gamecategory" value="facebook">Facebook spellen</td><td><input type="checkbox" name="gamecomputer" value="computer">PC/ Mac</td></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="action_adventure">Actie-avontuur</td><td><input type="checkbox" name="gamecategory" value="mobile">Mobiele telefoon spellen</td><td><input type="checkbox" name="gamecomputer" value="console">Console</td></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="adventure">Avontuur</td><td><input type="checkbox" name="gamecategory" value="augmentedreality">Augmented reality/ toegevoegde realiteit</td><td><input type="checkbox" name="gamecomputer" value="handheld">Handheld</td></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="rpg">RPG</td><td><input type="checkbox" name="gamecategory" value="seriousgame">Educationele/ serious games</td><td><input type="checkbox" name="gamecomputer" value="mobile">Mobiel</td></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="simulation">Simulatie</td><td></td><td><input type="checkbox" name="gamecomputer" value="ipad">iPad</td></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="strategy">Strategie</td></tr><tr style="text-align:left"><td><input type="checkbox" name="gamecategory" value="sports">Sport</td></tr></table><br/><input type="submit" value="Volgende"></form>';

///////////////////////////////
// var dropdownNationalities //
///////////////////////////////

var dropdownNationalities = '<form onsubmit="showQuestion3(questions);"><select name="nationality" class="white-space"><option value="nederland">Nederland</option><option value="afghanistan">Afghanistan</option><option value="albanie">Albanie</option><option value="algarije">Algarije</option><option value="andorra">Andorra</option><option value="angola">Angola</option><option value="antigue_en_barbuda">Antigue en Barbuda</option><option value="argentinie" class="white-space">Argentinie</option></select> <br/> <input type="submit" value="Volgende"></form>';

//////////////////////
// var lastQuestion //
//////////////////////

var lastQuestion = 7;

///////////////////
// var questions //
///////////////////

var questions = [
	[
		"cartoon-introduction",
		"Cartoon Introductie",
		"Introductie",
		'Introductie tekst <br/><br/> <form onsubmit="showQuestion1(questions);"><input type="submit" value="Begin"></form>'
	],
	[
		"cartoon-question1",
		"Cartoon vraag 1",
		"Wat is uw leeftijd?",
		'<form onsubmit="showQuestion2(questions);"><input type="text" name="age" maxlength="3" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question2",
		"Cartoon vraag 2",
		"Wat is uw nationaliteit?",
		dropdownNationalities
	],
	[
		"cartoon-question3",
		"Cartoon vraag 3",
		"Wat is uw postcode?",
		'<form onsubmit="showQuestion4(questions);"><input type="text" name="zipcode" maxlength="6" value="1234AB" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question4",
		"Cartoon vraag 4",
		"Wat voor spellen/games speelt u zoal en op wat voor een computer?",
		checkboxesGamecategories
	],
	[
		"cartoon-question5",
		"Cartoon vraag 5",
		"Hoeveel tijd speelt u over het algemeen computerspellen?",
		'<form onsubmit="showQuestion6(questions);"><input type="text" name="gametime_hour" maxlength="4" class="white-space answer-input-shorttext"> uur per <select name="gametime_category" class="white-space"><option value="dag">dag</option><option value="week">week</option><option value="maand">maand</option><option value="jaar" class="white-space">jaar</option></select> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question6",
		"Cartoon vraag 6",
		"Als u het over uw omgeving hebt, tot hoever reikt deze?",
		'<form onsubmit="showQuestion7(questions);"><input type="text" name="" class="white-space"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question7",
		"Cartoon vraag 7",
		"Stel de gemeente zou een windmolen willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden?",
		'<form onsubmit="sendQuestionnaire()"><input type="text" name="" class="white-space"> <br/> <input type="submit" value="Verstuur"></form>'
	],
	[
		"CartoonSrc",
		"CartoonAlt",
		"vraagNummer",
		"Antwoord"
	]
];

/////////////////////////
// sendQuestionnaire() //
/////////////////////////

// Function that handles sending the information of the user to the server/database

function sendQuestionnaire() {
	alert("Heeft u de vragenlijst naar waarheid ingevuld?");
}

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
