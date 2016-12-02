/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2016-12-02
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
		"<h3>De Placeys</h3>Met onder andere 'Greet' de oma, 'Grumps' de opa,<br/>'Piet' de hardwerkende zoon, 'Karel' de sportieve kleinzoon en 'Doerak' de hond",
		"Introductie",
		'Introductie tekst <br/><br/> <form onsubmit="showQuestion1(questions);"><input type="submit" value="Begin"></form>'
	],
	[
		"cartoon-question1",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Karel viert vandaag zijn verjaardag. Bij een potje 'vertel de waarheid of doe een opdracht' geeft hij toe dat hij bang is voor katten. Even later gaat de deurbel en komt zijn buurmeisje met een pakje voor hem binnen. Niet snel daarna beweegt het deksel van het pakje vanzelf naar boven. Ineens steken er schattige kraaloogjes uit het pakje op. Karel schrikt en schiet als een kat de gordijnen in.</p>",
		"Wat is uw leeftijd?",
		'<form onsubmit="showQuestion2(questions);"><input type="text" name="age" maxlength="3" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question2",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Een wetenschapper belt Piet op en vraagt hem: 'Wat is uw nationaliteit?' Piet neemt de telefoon op in een forse regenbui en antwoord met: 'Vandaag vooral nat!'</p>",
		"Wat is uw nationaliteit?",
		dropdownNationalities
	],
	[
		"cartoon-question3",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Een jongen uit de buurt van Piet komt op skeelers de straat in met een grote postbodetas. Als hij langs het huis van Piet komt, gooit hij een pakketje naar het huis van Piet. Het pakketje blijkt echter geen post te zijn, maar een pak meel wat langzaam van de muur naar beneden glijdt. Piet stommelt naar beneden en opent de deur om te kijken wat er aan de hand is. Hij roept naar zijn vrouw: 'Schat, we hebben weer meel ontvangen'. Zijn vrouw beantwoord hem met 'H&egrave; bah!.' Vervolgens skeelert de jongen snel verder en verliest daarbij zijn pet. In de straat is te zien dat niet alleen Piet de dupe is geworden.</p>",
		"Wat is uw postcode?",
		'<form onsubmit="showQuestion4(questions);"><input type="text" name="zipcode" maxlength="6" value="1234AB" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question4",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Cartoon vraag 4</p>",
		"Wat voor spellen/games speelt u zoal en op wat voor een computer?",
		checkboxesGamecategories
	],
	[
		"cartoon-question5",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Cartoon vraag 5</p>",
		"Hoeveel tijd speelt u over het algemeen computerspellen?",
		'<form onsubmit="showQuestion6(questions);"><input type="text" name="gametime_hour" maxlength="4" class="white-space answer-input-shorttext"> uur per <select name="gametime_category" class="white-space"><option value="dag">dag</option><option value="week">week</option><option value="maand">maand</option><option value="jaar" class="white-space">jaar</option></select> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question6",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Cartoon vraag 6</p>",
		"Als u het over uw omgeving hebt, tot hoever reikt deze?",
		'<form onsubmit="showQuestion7(questions);"><input type="text" name="" class="white-space"> <br/> <input type="submit" value="Volgende"></form>'
	],
	[
		"cartoon-question7",
		"<h3>De Placeys</h3><p align='left' style='margin:1em;'>Cartoon vraag 7</p>",
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
	if (confirm("Heeft u de vragenlijst naar waarheid ingevuld?") == true) {
		window.open("Geonaire.html", "_self");
	}
}
