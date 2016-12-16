/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2016-12-16
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
 * showIntroduction(questions, user)
 * showQuestion1(questions, user)
 * showQuestion2(questions, user)
 * showQuestion3(questions, user)
 * showQuestion4(questions, user)
 * showQuestion5(questions, user)
 * showQuestion6(questions, user)
 * showQuestion7(questions, user)
 * savaDataQuestion1(questions, user)
 * savaDataQuestion2(questions, user)
 * savaDataQuestion3(questions, user)
 * savaDataQuestion4(questions, user)
 * savaDataQuestion5(questions, user)
 * saveDataQuestion6(questions, user)
 * sendQuestionnaire(user)
 */

//////////////////////////////////
// var checkboxesGamecategories //
//////////////////////////////////

var checkboxesGamecategories = '<form onsubmit="showQuestion5(questions, user);"><table align="center" border="1px solid rgba(00, 00, 00, .46)"><tr style="text-align:center"><th colspan="2">Game categori&euml;n</th><th>Game computer</th></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-action" type="checkbox" name="gamecategories" value="action">Actie</td><td><input id="data-question4-gamecategories-facebook" type="checkbox" name="gamecategories" value="facebook">Facebook spellen</td><td><input id="data-question4-gamecomputers-computer" type="checkbox" name="gamecomputer" value="computer">PC/ Mac</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-actionadventure" type="checkbox" name="gamecategories" value="action_adventure">Actie-avontuur</td><td><input id="data-question4-gamecategories-mobilegame" type="checkbox" name="gamecategories" value="mobilegame">Mobiele telefoon spellen</td><td><input id="data-question4-gamecomputers-console" type="checkbox" name="gamecomputer" value="console">Console</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-adventure" type="checkbox" name="gamecategories" value="adventure">Avontuur</td><td><input id="data-question4-gamecategories-augmentedreality" type="checkbox" name="gamecategories" value="augmentedreality">Augmented reality/ toegevoegde realiteit</td><td><input id="data-question4-gamecomputers-handheld" type="checkbox" name="gamecomputer" value="handheld">Handheld</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-roleplay" type="checkbox" name="gamecategories" value="roleplay">RPG/ rollenspel</td><td><input id="data-question4-gamecategories-seriousgame" type="checkbox" name="gamecategories" value="seriousgame">Educationele/ serious games</td><td><input id="data-question4-gamecomputers-mobilephone" type="checkbox" name="gamecomputer" value="mobilephone">Mobiel</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-simulation" type="checkbox" name="gamecategories" value="simulation">Simulatie</td><td></td><td><input id="data-question4-gamecomputers-ipad" type="checkbox" name="gamecomputer" value="ipad">iPad</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-strategy" type="checkbox" name="gamecategories" value="strategy">Strategie</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-sports" type="checkbox" name="gamecategories" value="sports">Sport</td></tr></table><br/><input type="submit" value="Volgende"></form>';

///////////////////////////////
// var dropdownNationalities //
///////////////////////////////

var dropdownNationalities = '<form onsubmit="showQuestion3(questions, user);"><select id="data-question2" name="nationality" class="white-space"><option value="nederland">Nederland</option><option value="afghanistan">Afghanistan</option><option value="albanie">Albanie</option><option value="algarije">Algarije</option><option value="andorra">Andorra</option><option value="angola">Angola</option><option value="antigue_en_barbuda">Antigue en Barbuda</option><option value="argentinie" class="white-space">Argentinie</option></select> <br/> <input type="submit" value="Volgende"></form>';

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
		"<p style='text-align:center;'>Met onder andere 'Greet' de oma, 'Grumps' de opa, 'Doerak' de hond,<br/>'Piet' de hardwerkende zoon, 'Steven' de sportieve kleinzoon en 'Charlotte' de computerliefhebster</p>", // Pechvogel Piet
		"Introductie",
		'<p>Beste deelnemer,<br/><br/> Ik ben Madeleine van Winkel en ik doe onderzoek naar de relatie tussen het spelen van computerspellen en perceptie van de omgeving aan de <u title="(Wageningen University &amp; Research)">WUR</u>. <br/> Ik zou graag uw medewerking vragen voor het beantwoorden van een aantal vragen. De vragenlijst bevat 9 vragen en zal ongeveer 10 minuten in beslag nemen.<br/><br/> Uitleg over de vragenlijst:<br/> Onder de vragen staat steeds een knop waarmee u naar de volgende vraag kunt. <br/> Met de knoppen links kunt u wisselen tussen de verschillende vragen. <br/> Met de knoppen beneden kunt u het overzicht (links), de cartoon (boven) en de toolbar (rechts) laten verdwijnen en weer verschijnen.<br/> Sommige woorden zijn <u title="Een voorbeeld.">onderstreept</u>. Door met uw muis over deze woorden te bewegen, kunt u meer uitleg krijgen over de desbetreffende woorden. <br/><br/> Voor uw vermaak is er boven een cartoon toegevoegd in de vorm van een klein verhaaltje. Door de vragenlijst heen volgen we hier de avonturen van de familie "de Placeys". <br/> Hopelijk beleeft u net zoveel plezier met de Placeys als ik met ze heb beleefd. <br/> <form onsubmit="showQuestion1(questions, user);"><input type="submit" value="Begin"></form></p>'
	],
	[
		"cartoon-question1",
		"<p align='left' style='margin:1em;'>Steven viert vandaag zijn verjaardag. Bij een potje 'vertel de waarheid of doe een opdracht' geeft hij toe dat hij bang is voor katten. Even later gaat de deurbel en komt zijn buurmeisje met een pakje voor hem binnen. Niet snel daarna beweegt het deksel van het pakje vanzelf naar boven. Ineens steken er schattige kraaloogjes uit het pakje op. Steven schrikt en schiet als een kat de gordijnen in.</p>",
		"Wat is uw leeftijd?",
		'<form onsubmit="showQuestion2(questions, user);"><input id="data-question1" type="text" name="age" maxlength="3" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question2",
		"<p align='left' style='margin:1em;'>Een wetenschapper belt Piet op en vraagt hem: 'Wat is uw nationaliteit?' Piet neemt de telefoon op in een forse regenbui en antwoord met: 'Vandaag vooral nat!'</p>",
		"Wat is uw nationaliteit?",
		dropdownNationalities
	],
	[
		"cartoon-question3",
		"<p align='left' style='margin:1em;'>Een jongen uit de buurt van Piet komt op skeelers de straat in met een grote postbodetas. Als hij langs het huis van Piet komt, gooit hij een pakketje naar het huis van Piet. Het pakketje blijkt echter geen post te zijn, maar een pak meel wat langzaam van de muur naar beneden glijdt. Piet stommelt naar beneden en opent de deur om te kijken wat er aan de hand is. Hij roept naar zijn vrouw: 'Schat, we hebben weer meel ontvangen'. Zijn vrouw beantwoordt hem met 'H&egrave; bah!.' Vervolgens skeelert de jongen snel verder en verliest daarbij zijn pet. In de straat is te zien dat niet alleen Piet de dupe is geworden.</p>",
		"Wat is uw postcode?",
		'<form onsubmit="showQuestion4(questions, user);"><input id="data-question3" type="text" name="zipcode" maxlength="6" value="1234AB" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question4",
		"<p style='text-align:center;'>Charlotte.<br/>Overdag is zij een studente,<br/>maar 's avonds, als haar computer aangaat, redt zij de levens van velen.</p>",
		"Wat voor spellen/games speelt u zoal en op wat voor een computer?",
		checkboxesGamecategories
	],
	[
		"cartoon-question5",
		"<p align='left' style='margin:1em;'>Dit weekend houdt Charlotte een LAN-party voor haar 3 vrienden. Ze zitten allemaal gekluisterd aan hun beeldscherm, zich wanend in een andere wereld. Opeens begint het getik op het toetsenbord van een van de vrienden wel erg enthousiast te worden. 'Romia, schone jonkvrouwe, zijt gij het een genoegen met mij en twee andere companen te genieten van een delicatesse, maagdelijk (wit) en vol liefde gekleurd (rood)?' Even later zegt Charlotte hardop: 'Als je wilt dat ik een pizza met mozarella en tomaat in de oven stop, mag je het ook gewoon zeggen. Je bent ook zo'n player!'</p>",
		"Hoeveel tijd speelt u over het algemeen computerspellen?",
		'<form onsubmit="showQuestion6(questions, user);"><input id="data-question5-gametime-hours" type="text" name="gametime_hour" maxlength="4" class="white-space answer-input-shorttext"> uur per <select id="data-question5-gametime-categories" name="gametime_category" class="white-space"><option value="dag">dag</option><option value="week">week</option><option value="maand">maand</option><option value="jaar" class="white-space">jaar</option></select> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question6",
		"<p align='left' style='margin:1em;'>Opa Grumps is vandaag een beetje in een warrige bui. Hij loopt de buurtsuper 'De Vriendelijke Bloemkool' in. Na enigszins zoeken tussen verscheidene schappen, komt hij er niet uit en komt een van de werknemers hem helpen. Werknemer: 'Wat zoekt u, meneer?' Grumps: 'Ik been op zoek naar de <u title='Een gemeenschap is onder andere een groep mensen die bij elkaar hoort, iets met elkaar deelt.'>gemeenschap</u>.' De werknemer kijkt enigszins verbaasd. Vervolgens kijkt Grumps verder de schappen in en zegt: 'Waar kan ik anders de gemeenschapsgoederen vinden?'</p>",
		"Als u het over uw leefomgeving hebt, tot hoever reikt deze?",
		'<form onsubmit="showQuestion7(questions, user);"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question7",
		"<p align='left' style='margin:1em;'>Steven en Grumps maken samen een wandelingetje door de buurt. Grumps vertelt verhalen over vroeger en merkt ineens op dat het park kleiner is dan hij zich herinnerde. Ze lopen naar de andere kant van het park om te zien wat er aan de hand is. Blijkbaar is er zonder enige aankondiging een nieuwe parkeergarage opgeleverd, volgens het te grote uithangbord genoemd 'De Nieuwe Plek'. Grumps: 'Nou, dat is toch jammer.' Steven reageert op het zien van het uithangbord met 'ik parkeer niet graag, ik loop liever.' Grumps, in een melancholische bui geraakt, antwoordt daarop met 'ik voel me geparkeerd'.</p>",
		"Stel de gemeente zou een parkeergarage willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden?",
		'<form onsubmit="sendQuestionnaire(user)"> <br/> <input type="submit" value="Verstuur"></form>'
	],
	[
		"CartoonSrc",
		"CartoonAlt",
		"vraagNummer",
		"Antwoord"
	]
];

///////////////////////////////////////
// showIntroduction(questions, user) //
///////////////////////////////////////

// Function for showing the introduction on startGeonaire

function showIntroduction(questions, user) {

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[0][2]);
	$("#answer").css("color", "rgba(00, 00, 00, .46)");
	$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#answer").html(questions[0][3]);
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-introduction").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion1(questions, user) //
////////////////////////////////////

// Function for showing question 1

function showQuestion1(questions, user) {

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
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

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion2(questions, user) //
////////////////////////////////////

// Function for showing question 2

function showQuestion2(questions, user) {

	// Save the data from question 1 and add it to the user object
	savaDataQuestion1(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
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

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion3(questions, user) //
////////////////////////////////////

// Function for showing question 3

function showQuestion3(questions, user) {

	// Save the data from question 2 and add it to the user object
	savaDataQuestion2(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
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

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion4(questions, user) //
////////////////////////////////////

// Function for showing question 4

function showQuestion4(questions, user) {

	// Save the data from question 3 and add it to the user object
	savaDataQuestion3(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
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

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion5(questions, user) //
////////////////////////////////////

// Function for showing question 5

function showQuestion5(questions, user) {

	// Save the data from question 4 and add it to the user object
	savaDataQuestion4(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
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

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion6(questions, user) //
////////////////////////////////////

// Function for showing question 6

function showQuestion6(questions, user) {

	// Save the data from question 5 and add it to the user object
	savaDataQuestion5(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[6][2]);
	$("#answer").css("color", "white");
	$("#answer").css("text-shadow", "1px 1px #000000");
	$("#answer").html(questions[6][3]);
	$("#tableofcontents-question6").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question6").addClass("tableofcontents-item tableofcontents-active");

	// Draw the map if user.livingenvironment = ""
	if (user.livingenvironment == "") {
		// Create the map
		drawMap(user);
	} else {
		// Show the #map
		$("#map").css("display", "block");
		// Show the data of question 6
		if (user.livingenvironmentproperties[1][0] == "circle") { // && currentQuestion != 6
			// Show the circle
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createcircle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createcircle").addClass("toolbar-item toolbar-active");
			//return user;
		} else if (user.livingenvironmentproperties[1][0] == "rectangle") {
			// Show the rectanglecircle
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createrectangle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createrectangle").addClass("toolbar-item toolbar-active");
			//return user;
		}
	}

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}

	// Reset the width of #content
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

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion7(questions, user) //
////////////////////////////////////

// Function for showing question 7

function showQuestion7(questions, user) {

	// Save the data from question 6 and add it to the user object
	savaDataQuestion6(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Show the new question
	$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
	$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
	$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
	$("#questiontitle").html(questions[7][2]);
	$("#answer").css("color", "white");
	$("#answer").css("text-shadow", "1px 1px #000000");
	$("#answer").html(questions[7][3]);
	$("#tableofcontents-question7").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question7").addClass("tableofcontents-item tableofcontents-active");

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion1(questions, user) //
////////////////////////////////////////

// Function to save the data from question 1 and add it to the user object

function savaDataQuestion1(questions, user) {

	// Save the data from question 1 and add it to the user object
	var age = $("#data-question1").val();
	user.age = age;

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion2(questions, user) //
////////////////////////////////////////

// Function to save the data from question 2 and add it to the user object

function savaDataQuestion2(questions, user) {

	// Save the data from question 2 and add it to the user object
	var nationality = $("#data-question2").val();
	user.nationality = nationality;

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion3(questions, user) //
////////////////////////////////////////

// Function to save the data from question 3 and add it to the user object

function savaDataQuestion3(questions, user) {

	// Save the data from question 3 and add it to the user object
	var zipcode = $("#data-question3").val();
	user.zipcode = zipcode;

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion4(questions, user) //
////////////////////////////////////////

// Function to save the data from question 4 and add it to the user object

function savaDataQuestion4(questions, user) {

	// Set the variables
	var game_categories = [
		["gamecategory", "yes_or_no"],
		["action", "no"],
		["action_adventure", "no"],
		["adventure", "no"],
		["roleplay", "no"],
		["simulation", "no"],
		["strategy", "no"],
		["sports", "no"],
		["facebook", "no"],
		["mobilegame", "no"],
		["augmentedreality", "no"],
		["seriousgame", "no"]
	];
	var game_computers = [
		["gamecomputer", "yes_or_no"],
		["computer", "no"],
		["console", "no"],
		["handheld", "no"],
		["mobilephone", "no"],
		["ipad", "no"]
	];

	// Save the data from question 4 and add it to the user object
	// Save the different game categories to the user object
	if ($("#data-question4-gamecategories-action").is(":checked")) {
		game_categories[1][1] = "yes";
	} else {
		game_categories[1][1] = "no";
	}
	if ($("#data-question4-gamecategories-actionadventure").is(":checked")) {
		game_categories[2][1] = "yes";
	} else {
		game_categories[2][1] = "no";
	}
	if ($("#data-question4-gamecategories-adventure").is(":checked")) {
		game_categories[3][1] = "yes";
	} else {
		game_categories[3][1] = "no";
	}
	if ($("#data-question4-gamecategories-roleplay").is(":checked")) {
		game_categories[4][1] = "yes";
	} else {
		game_categories[4][1] = "no";
	}
	if ($("#data-question4-gamecategories-simulation").is(":checked")) {
		game_categories[5][1] = "yes";
	} else {
		game_categories[5][1] = "no";
	}
	if ($("#data-question4-gamecategories-strategy").is(":checked")) {
		game_categories[6][1] = "yes";
	} else {
		game_categories[6][1] = "no";
	}
	if ($("#data-question4-gamecategories-sports").is(":checked")) {
		game_categories[7][1] = "yes";
	} else {
		game_categories[7][1] = "no";
	}
	if ($("#data-question4-gamecategories-facebook").is(":checked")) {
		game_categories[8][1] = "yes";
	} else {
		game_categories[8][1] = "no";
	}
	if ($("#data-question4-gamecategories-mobilegame").is(":checked")) {
		game_categories[9][1] = "yes";
	} else {
		game_categories[9][1] = "no";
	}
	if ($("#data-question4-gamecategories-augmentedreality").is(":checked")) {
		game_categories[10][1] = "yes";
	} else {
		game_categories[10][1] = "no";
	}
	if ($("#data-question4-gamecategories-seriousgame").is(":checked")) {
		game_categories[11][1] = "yes";
	} else {
		game_categories[11][1] = "no";
	}
	user.gamecategories = game_categories;

	// Save the different game computers to the user object
	if ($("#data-question4-gamecomputers-computer").is(":checked")) {
		game_computers[1][1] = "yes";
	} else {
		game_computers[1][1] = "no";
	}
	if ($("#data-question4-gamecomputers-console").is(":checked")) {
		game_computers[2][1] = "yes";
	} else {
		game_computers[2][1] = "no";
	}
	if ($("#data-question4-gamecomputers-handheld").is(":checked")) {
		game_computers[3][1] = "yes";
	} else {
		game_computers[3][1] = "no";
	}
	if ($("#data-question4-gamecomputers-mobilephone").is(":checked")) {
		game_computers[4][1] = "yes";
	} else {
		game_computers[4][1] = "no";
	}
	if ($("#data-question4-gamecomputers-ipad").is(":checked")) {
		game_computers[5][1] = "yes";
	} else {
		game_computers[5][1] = "no";
	}
	user.gamecomputers = game_computers;

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion5(questions, user) //
////////////////////////////////////////

// Function to save the data from question 5 and add it to the user object

function savaDataQuestion5(questions, user) {

	// Save the data from question 5 and add it to the user object
	var gametime_hours = $("#data-question5-gametime-hours").val();
	user.gametimehours = gametime_hours;
	var gametime_categories = $("#data-question5-gametime-categories").val();
	user.gametimecategories = gametime_categories;

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion6(questions, user) //
////////////////////////////////////////

// Function to save the data from question 6 and add it to the user object

function savaDataQuestion6(questions, user) {

	// Save the data from question 6 and add it to the user object
	if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle") {

		// Save the area if it's a circle
		if (user.livingenvironmentproperties[1][0] == "circle") {
			// Add 1 to user.livingenvironmentamount to make sure that the user can only create 1 living environment area
			user.livingenvironmentamount = 1;
			// Set the living environment properties for circle
			var lat = user.livingenvironment.getCenter().lat();
			var lon = user.livingenvironment.getCenter().lng();
			var rad = user.livingenvironment.getRadius();
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["circle", lat, lon, rad, "north", "south", "east", "west"]
			];

		// Save the area if it's a rectangle
		} else if (user.livingenvironmentproperties[1][0] == "rectangle") {
			// Add 1 to user.livingenvironmentamount to make sure that the user can only create 1 living environment area
			user.livingenvironmentamount = 1;
			// Set the living environment properties for rectangle
			var north = user.livingenvironment.getBounds().getNorthEast().lat();
			var south = user.livingenvironment.getBounds().getSouthWest().lat();
			var east = user.livingenvironment.getBounds().getNorthEast().lng();
			var west = user.livingenvironment.getBounds().getSouthWest().lng();
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["rectangle", "lat", "lon", "rad", north, south, east, west]
			];
		}

		// Delete the user.livingenvironment from #map
		user.livingenvironment.setMap(null);
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");

	// Reset the user properties related to living environment to default if there is no circle/ rectangle
	} else {
		// Set the user.livingenvironmentamount to 0
		user.livingenvironmentamount = 0;
		// Set the living environment properties to default
		user.livingenvironmentproperties = [
			["type", "lat", "lon", "rad", "north", "south", "east", "west"],
			["type", "lat", "lon", "rad", "north", "south", "east", "west"]
		];
		user.livingenvironment = "";
	}

	// Return the user object
	return user;
}

/////////////////////////////
// sendQuestionnaire(user) //
/////////////////////////////

// Function that handles sending the information of the user to the server/database

function sendQuestionnaire(user) {

/*
	// Save the data from question 7 and add it to the user object
	savaDataQuestion7(questions, user);
 */
/*
	var friction = $("#data-question7").val();
	user.friction = friction;
	//alert(user.friction);
 */
	if (confirm("Heeft u de vragenlijst naar waarheid ingevuld?") == true) {
		window.open("Geonaire.html", "_self");
	}
}
