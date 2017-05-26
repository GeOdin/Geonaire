/* GeonaireQuestions.js
 * JavaScript file om de vragen te regelen voor de Geonaire
 * Gemaakt op 2016-11-30
 * Het laatst veranderd op 2017-02-05
 * door GeOdin
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 * checkboxesGamecategories
 * dropdownNationalities
 * lastQuestion
 * currentQuestion
 * questions
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * toggleQuestions(questions, lastQuestion, user)
 * showIntroduction(questions, user)
 * showQuestion1(questions, user)
 * showQuestion2(questions, user)
 * showQuestion3(questions, user)
 * showQuestion4(questions, user)
 * showQuestion5(questions, user)
 * showQuestion6(questions, user)
 * showQuestion7(questions, user)
 * showQuestion8(questions, user)
 * showQuestion9(questions, user)
 * showQuestion10(questions, user)
 * saveDataQuestion1(questions, user)
 * saveDataQuestion2(questions, user)
 * saveDataQuestion3(questions, user)
 * saveDataQuestion4(questions, user)
 * saveDataQuestion5(questions, user)
 * saveDataQuestion6(questions, user)
 * saveDataQuestion7(questions, user)
 * saveDataQuestion8(questions, user)
 * saveDataQuestion9(questions, user)
 * saveDataQuestion10(questions, user)
 * sendQuestionnaire(user)
 * allowDrop(ev)
 * drag(ev)
 * dropFriction(ev)
 * dropPositiveLarge(ev)
 * dropPositiveMedium(ev)
 * dropPositiveSmall(ev)
 * dropNegativeSmall(ev)
 * dropNegativeMedium(ev)
 * dropNegativeLarge(ev)
 * resetFriction(user)
 * dropPlaceAttachment(ev, user)
 * resetPlaceAttachment(user)
 * sliderValue(value)
 * resetSlider()
 */

//////////////////////////////////
// var checkboxesGamecategories //
//////////////////////////////////

var checkboxesGamecategories = '<form onsubmit="showQuestion5(questions, user);"><table align="center" border="1px solid rgba(00, 00, 00, .46)"><tr style="text-align:center"><th colspan="2">Game categori&euml;n</th><th>Game computer</th></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-action" type="checkbox" name="gamecategories" value="action">Actie</td><td><input id="data-question4-gamecategories-facebook" type="checkbox" name="gamecategories" value="facebook">Facebook spellen</td><td><input id="data-question4-gamecomputers-computer" type="checkbox" name="gamecomputer" value="computer">PC/ Mac</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-actionadventure" type="checkbox" name="gamecategories" value="action_adventure">Actie-avontuur</td><td><input id="data-question4-gamecategories-mobilegame" type="checkbox" name="gamecategories" value="mobilegame">Mobiele telefoon spellen</td><td><input id="data-question4-gamecomputers-console" type="checkbox" name="gamecomputer" value="console">Console</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-adventure" type="checkbox" name="gamecategories" value="adventure">Avontuur</td><td><input id="data-question4-gamecategories-augmentedreality" type="checkbox" name="gamecategories" value="augmentedreality">Augmented reality/ toegevoegde realiteit</td><td><input id="data-question4-gamecomputers-handheld" type="checkbox" name="gamecomputer" value="handheld">Handheld</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-roleplay" type="checkbox" name="gamecategories" value="roleplay">RPG/ rollenspel</td><td><input id="data-question4-gamecategories-seriousgame" type="checkbox" name="gamecategories" value="seriousgame">Educationele/ serious games</td><td><input id="data-question4-gamecomputers-mobilephone" type="checkbox" name="gamecomputer" value="mobilephone">Mobiel</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-simulation" type="checkbox" name="gamecategories" value="simulation">Simulatie</td><td></td><td><input id="data-question4-gamecomputers-ipad" type="checkbox" name="gamecomputer" value="ipad">iPad</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-strategy" type="checkbox" name="gamecategories" value="strategy">Strategie</td></tr><tr style="text-align:left"><td><input id="data-question4-gamecategories-sports" type="checkbox" name="gamecategories" value="sports">Sport</td></tr></table><br/><input type="submit" value="Volgende"></form>';

///////////////////////////////
// var dropdownNationalities //
///////////////////////////////

var dropdownNationalities = '<form onsubmit="showQuestion3(questions, user);"><select id="data-question2" name="nationality" class="white-space"><option value="">Kies uw nationaliteit...</option><option value="afghaans">Afghaans</option><option value="albanees">Albanees</option><option value="algerijns">Algerijns</option><option value="amerikaans">Amerikaans</option><option value="angolees">Angolees</option><option value="argentijns">Argentijns</option><option value="australisch">Australisch</option><option value="belgisch">Belgisch</option><option value="bengalees">Bengalees</option><option value="boliviaans">Boliviaans</option><option value="botswaans">Botswaans</option><option value="braziliaans">Braziliaans</option><option value="brits">Brits</option><option value="britsch_engels">Brits/ Engels</option><option value="brits_noord_iers">Brits/ Noord-Iers</option><option value="brits_schots">Brits/ Schots</option><option value="bulgaars">Bulgaars</option><option value="cambodjaans">Cambodjaans</option><option value="canadees">Canadees</option><option value="chileens">Chileens</option><option value="chinees">Chinees</option><option value="colombiaans">Colombiaans</option><option value="congolees">Congolees</option><option value="cubaans">Cubaans</option><option value="cypriotisch">Cypriotisch</option><option value="deens">Deens</option><option value="duits">Duits</option><option value="ecuadoraans">Ecuadoraans</option><option value="egyptisch">Egyptisch</option><option value="estlands">Estlands</option><option value="ethiopisch">Ethiopisch</option><option value="fijisch">Fijisch</option><option value="filipijns">Filipijns</option><option value="fins">Fins</option><option value="frans">Frans</option><option value="georgisch">Georgisch</option><option value="ghanees">Ghanees</option><option value="grieks">Grieks</option><option value="guatemalteeks">Guatemalteeks</option><option value="hongaars">Hongaars</option><option value="iers">Iers</option><option value="ijslands">IJslands</option><option value="indiaas">Indiaas</option><option value="indonesisch">Indonesisch</option><option value="iraaks">Iraaks</option><option value="iraans">Iraans</option><option value="israelisch">Isra&euml;lisch</option><option value="italiaans">Italiaans</option><option value="ivoriaans">Ivoriaans</option><option value="jamaicaans">Jamacaains</option><option value="japans">Japans</option><option value="jemenitisch">Jemenitisch</option><option value="jordaans">Jordaans</option><option value="kazachs">Kazachs</option><option value="keniaans">Keniaans</option><option value="koeweits">Koeweits</option><option value="kroatisch">Kroatisch</option><option value="laotiaans">Laotiaans</option><option value="lets">Lets</option><option value="libanees">Libanees</option><option value="liberiaans">Liberiaans</option><option value="litouws">Litouws</option><option value="malaggisch">Malaggisch</option><option value="maleisisch">Maleisisch</option><option value="marokkaans">Marokkaans</option><option value="mexicaans">Mexicaans</option><option value="mongools">Mongools</option><option value="mozambikaans">Mozambikaans</option><option value="myanmarees">Myanmarees</option><option value="namibisch">Namibisch</option><option value="nederlands">Nederlands</option><option value="nepalees">Nepalees</option><option value="nieuw_zeelands">Nieuw-Zeelands</option><option value="nigerees">Nigerees</option><option value="noord_koreaans">Noord-Koreaans</option><option value="noors">Noors</option><option value="oegandees">Oegandees</option><option value="oekraiens">Oekra&iuml;ens</option><option value="oostenrijks">Oostenrijks</option><option value="palestijns">Palestijns</option><option value="pakistaans">Pakistaans</option><option value="paraguayaans">Paraguayaans</option><option value="peruviaans">Peruviaans</option><option value="pools">Pools</option><option value="portugees">Portugees</option><option value="roemeens">Roemeens</option><option value="russisch">Russisch</option><option value="saoedi_arabisch">Saoedi-Arabisch</option><option value="servisch">Servisch</option><option value="singaporees">Singaporees</option><option value="sloveens">Sloveens</option><option value="slowaaks">Slowaaks</option><option value="soedanees">Soedanees</option><option value="somalisch">Somalisch</option><option value="spaans">Spaans</option><option value="sri_lankaans">Sri Lankaans</option><option value="syrisch">Syrisch</option><option value="taiwanees">Taiwanees</option><option value="tanziaans">Tanziaans</option><option value="thais">Thais</option><option value="tsjech">Tsjech</option><option value="tunesisch">Tunesisch</option><option value="turks">Turks</option><option value="uruguayaans">Uruguayaans</option><option value="venezolaans">Venezolaans</option><option value="vietnamees">Vietnamees</option><option value="wels">Wels</option><option value="wit_russisch">Wit-Russisch</option><option value="zambiaan">Zambiaan</option><option value="zimbabwaan">Zimbabwaan</option><option value="zuid_afrikaans">Zuid-Afrikaans</option><option value="zuid_koreaans">Zuid-Koreaans</option><option value="zweeds">Zweeds</option><option value="zwitsers">Zwitsers</option></select> <br/> <input type="submit" value="Volgende"></form>';

//////////////////////
// var lastQuestion //
//////////////////////

var lastQuestion = 7;

////////////////////////
// var curentQuestion //
////////////////////////

var currentQuestion = 0;

///////////////////
// var questions //
///////////////////

var questions = [
	[
		"cartoon-introduction",
		"<p style='text-align:center;'>Met onder andere 'Greet' de oma, 'Grumps' de opa, 'Doerak' de hond,<br/>'Piet' de hardwerkende zoon,<br/>'Steven' de sportieve kleinzoon en 'Charlotte' de computerliefhebster</p>", // Pechvogel Piet
		"Introductie",
		'<p>Beste deelnemer,<br/><br/> Ik ben Madeleine van Winkel en ik doe onderzoek naar de relatie tussen het spelen van computerspellen en perceptie van de omgeving aan de <u title="(Wageningen University &amp; Research)">WUR</u>. <br/> Ik zou graag uw medewerking vragen voor het beantwoorden van een aantal vragen. De vragenlijst bevat 10 vragen en zal ongeveer 10 minuten in beslag nemen.<br/><br/> Uitleg over de vragenlijst:<br/> Onder de vragen staat steeds een knop waarmee u naar de volgende vraag kunt. <br/> Met de knoppen links kunt u wisselen tussen de verschillende vragen. <br/> Met de knoppen beneden kunt u de vragen (links), de cartoon (boven) en de tekenbalk (rechts) laten verdwijnen en weer verschijnen.<br/> Sommige woorden zijn <u title="Een voorbeeld.">onderstreept</u>. Door met uw muis over deze woorden te bewegen, kunt u meer uitleg krijgen over de desbetreffende woorden. <br/><br/> Voor uw vermaak is er boven een cartoon toegevoegd in de vorm van een klein verhaaltje. Door de vragenlijst heen volgen we hier de avonturen van de familie "de Placeys". <br/> Hopelijk beleeft u net zoveel plezier met de Placeys als ik met ze heb beleefd. <br/> <div id="button-form-introduction-div"><button id="form-button-introduction" onclick="showQuestion1(questions, user);">Begin</button></div></p>',
		''
	],
	[
		"cartoon-question1",
		"<p align='left' style='margin:1em;'>Steven viert vandaag zijn verjaardag. Bij een potje 'vertel de waarheid of doe een opdracht' geeft hij toe dat hij bang is voor katten. Even later gaat de deurbel en komt zijn buurmeisje met een pakje voor hem binnen. Niet snel daarna beweegt het deksel van het pakje vanzelf naar boven. Ineens steken er schattige kraaloogjes uit het pakje op. Steven schrikt en schiet als een kat de gordijnen in.</p>",
		"Wat is uw leeftijd?",
		'<form onsubmit="showQuestion2(questions, user);"><input id="data-question1" type="text" name="age" maxlength="3" class="white-space answer-input-shorttext" style="width:2em;" placeholder="24"> jaar <br/> <input id="form-button-question1" type="submit" value="Volgende"></form>',
		''
	],
	[
		"cartoon-question2",
		"<p align='left' style='margin:1em;'>Een wetenschapper belt Piet op en vraagt hem: 'Wat is uw nationaliteit?' Piet neemt de telefoon op in een forse regenbui en antwoord met: 'Vandaag vooral nat!'</p>",
		"Wat is uw nationaliteit?",
		dropdownNationalities,
		''
	],
	[
		"cartoon-question3",
		"<p align='left' style='margin:1em;'>Een jongen uit de buurt van Piet komt op skeelers de straat in met een grote postbodetas. Als hij langs het huis van Piet komt, gooit hij een pakketje naar het huis van Piet. Het pakketje blijkt echter geen post te zijn, maar een pak meel wat langzaam van de muur naar beneden glijdt. Piet stommelt naar beneden en opent de deur om te kijken wat er aan de hand is. Hij roept naar zijn vrouw: 'Schat, we hebben weer meel ontvangen'. Zijn vrouw beantwoordt hem met 'H&egrave; bah!.' Vervolgens skeelert de jongen snel verder en verliest daarbij zijn pet. In de straat is te zien dat niet alleen Piet de dupe is geworden.</p>",
		"Wat is uw postcode?",
		'<form onsubmit="showQuestion4(questions, user);">Bijvoorbeeld: 1234AB <br/> <br/> <input id="data-question3" placeholder="6708PB" type="text" name="zipcode" maxlength="6" class="white-space answer-input-shorttext"> <br/> <input type="submit" value="Volgende"></form>',
		''
	],
	[
		"cartoon-question4",
		"<p style='text-align:center;'>Charlotte.<br/>Overdag is zij een studente,<br/>maar 's avonds, als haar computer aangaat, redt zij de levens van velen.</p>",
		"Wat voor spellen/games speelt u zoal en op wat voor een computer?",
		checkboxesGamecategories,
		''
	],
	[
		"cartoon-question5",
		"<p align='left' style='margin:1em;'>Dit weekend houdt Charlotte een LAN-party voor haar 3 vrienden. Ze zitten allemaal gekluisterd aan hun beeldscherm, zich wanend in een andere wereld. Opeens begint het getik op het toetsenbord van een van de vrienden wel erg enthousiast te worden. 'Romia, schone jonkvrouwe, zijt gij het een genoegen met mij en twee andere companen te genieten van een delicatesse, maagdelijk (wit) en vol liefde gekleurd (rood)?' Even later zegt Charlotte hardop: 'Als je wilt dat ik een pizza met mozarella en tomaat in de oven stop, mag je het ook gewoon zeggen. Je bent ook zo'n player!'</p>",
		"Hoeveel tijd speelt u over het algemeen computerspellen?",
		'<form onsubmit="showQuestion6(questions, user);"><input id="data-question5-gametime-hours" type="text" name="gametime_hour" maxlength="4" class="white-space answer-input-shorttext" placeholder="2"> uur per <select id="data-question5-gametime-categories" name="gametime_category" class="white-space"><option value="dag">dag</option><option value="week">week</option><option value="maand">maand</option><option value="jaar" class="white-space">jaar</option></select> <br/> <input type="submit" value="Volgende"></form>',
		''
	],
	[
		"cartoon-question6",
		"<p align='left' style='margin:1em;'>Opa Grumps is vandaag een beetje in een warrige bui. Hij loopt de buurtsuper 'De Vriendelijke Bloemkool' in. Na enigszins zoeken tussen verscheidene schappen, komt hij er niet uit en komt een van de werknemers hem helpen. Werknemer: 'Wat zoekt u, meneer?' Grumps: 'Ik ben op zoek naar de <u title='Een gemeenschap is onder andere een groep mensen die bij elkaar hoort, iets met elkaar deelt.'>gemeenschap</u>.' De werknemer kijkt enigszins verbaasd. Vervolgens kijkt Grumps verder de schappen in en zegt: 'Waar kan ik anders de gemeenschapsgoederen vinden?'</p>",
		"Als u het over uw leefomgeving hebt, tot hoever reikt deze?",
		'<form onsubmit="showQuestion7(questions, user);"> Door op een optie van de tekenbalk te (dubbel)klikken, kunt u een vorm tekenen die uw leefomgeving representeert. <br/><br/> <input type="submit" value="Volgende"></form>',
		'<div id="toolbar-title"> Tekenen </div> <ul id="toolbar-buttons"> <li id="toolbar-createcircle" class="toolbar-item" onclick="createCircle(user)"> Teken een <u title="Teken een cirkel.&#013;&#010;Je kunt de cirkel verslepen door erop te klikken of op het middelste bolletje te klikken en met de muis te slepen.&#013;&#010;Je kunt de cirkel met de muis aanpassen door op de buitenste bolletjes te klikken en met de muis te slepen.">cirkel</u></li> <li id="toolbar-createrectangle" class="toolbar-item" onclick="createRectangle(user)"> Teken een <u title="Teken een rechthoek.&#013;&#010;Je kunt de rechthoek verslepen door erop te klikken en met de muis te slepen.&#013;&#010;Je kunt de rechthoek met de muis aanpassen door op de buitenste bolletjes te klikken en met de muis te slepen.">rechthoek</u></li> <li id="toolbar-createpolygon" class="toolbar-item" onclick="createPolygon(user)"> Teken een <u title="Teken een alternatieve vorm.&#013;&#010;Je kunt de alternatieve vorm verslepen door op erop te klikken en met de muis te slepen.&#013;&#010;Je kunt de vorm met de muis aanpassen door op de buitenste bolletjes te klikken en met de muis te slepen.&#013;&#010;Door op de meer transparante bolletjes te klikken en te slepen, komen er meer mogelijkheden bij.&#013;&#010;Door twee witte bolletjes op elkaar te leggen, wordt het aantal bolletjes kleiner.">alternatieve vorm</u></li> <li id="toolbar-clearmap" class="toolbar-item" onclick="clearMap(user)"><u title="Verwijder de tekening."> Verwijder</u> de tekening</li> </ul>'
	],
	[
		"cartoon-question7",
		"<p align='left' style='margin:1em;'>Vandaag loopt Steven met zijn grootvader Grumps door de stad. Ze lopen door het park, maar komen tot stilstand door een nieuwe parkeergarage in aanbouw. Grumps geraakt in een melancholische bui en gaat op zijn rollator zitten: 'Ik voel me geparkeerd...' Waarop Steven antwoord: 'Ik parkeer niet graag, ik loop liever!'</p>",
		"Stel: er gaan veranderingen plaatsvinden in uw stad.",
		'<form onsubmit="showQuestion8(questions, user);">Waar zou u deze ingrepen goedkeuren? <br/><br/> Let op de Noordpijl. U kunt aangeven hoever en in welke richting van uw woning de verandering kan plaatsvinden. <br/> De schaal kunt u onderaan de pagina vinden en geldt vanaf het huisje, zowel horizontaal als verticaal. <br/> Het is een logaritmische schaal, wat betekent dat de eerste blokjes rondom het huisje staan voor de eerste 10m, vervolgens 100m, tot 100km. <br/> Om het verschil tussen links en rechts aan te geven, heb ik gebruik gemaakt van - (links) en + (rechts) in de schaal. <br/> Sleep de gekleurde blokjes (rechts) naar een blokje in de tekening (links) die overeenkomt met uw mening. <br/> Onderaan de tekenbalk staat een knop waarmee u de blokjes weer kunt resetten. <br/><br/> <table background="img/question7-house-north-arrow.png" align="center"> <tr> <td id="td1" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td2" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td3" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td4" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td5" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td6" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td7" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td8" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td9" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td10" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td11" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td12" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td13" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td14" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td15" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td16" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td17" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td18" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td19" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td20" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td21" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td22" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td23" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td24" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td25" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td26" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td27" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td28" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td29" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td30" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td31" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td32" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td33" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td34" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td35" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td36" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td37" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td38" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td39" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td40" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td41" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td42" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td43" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td44" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td45" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td46" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td47" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td48" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td49" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td50" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td51" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td52" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td53" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td54" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td55" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td56" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td57" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td58" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td59" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td60" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td61" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td62" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td63" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td64" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td65" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td66" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td67" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td68" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td69" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td70" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td71" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td72" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td73" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td74" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td75" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td76" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td77" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td78" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td79" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td80" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td81" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td82" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td83" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td84" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td85" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td86" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td87" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td88" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td89" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td90" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> <tr> <td id="td91" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td92" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td93" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td94" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td95" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td96" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td97" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td98" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td99" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> <td id="td100" class="td-friction" ondrop="dropFriction(event)" ondragover="allowDrop(event)"> </td> </tr> </table> <br/> <div id="scalebar"> <div id="scale-100000m" class="scalebar-item scalebar-black"> -<br/>100km </div> <div id="scale-10000m" class="scalebar-item scalebar-white"> -<br/>10km </div> <div id="scale-1000m" class="scalebar-item scalebar-black"> -<br/>1km </div> <div id="scale-100m" class="scalebar-item scalebar-white"> -<br/>100m </div> <div id="scale-10m" class="scalebar-item scalebar-black"> -<br/>10m </div> <div id="scale+10m" class="scalebar-item scalebar-black"> +<br/>10m </div> <div id="scale+100m" class="scalebar-item scalebar-white"> +<br/>100m </div> <div id="scale+1000m" class="scalebar-item scalebar-black"> +<br/>1km </div> <div id="scale+10000m" class="scalebar-item scalebar-white"> +<br/>10km </div> <div id="scale+100000m" class="scalebar-item scalebar-black"> +<br/>100km </div> </div> <br/> <input type="submit" value="Volgende"></form>',
		'<div id="toolbar-title"> Tekenen </div> <div id="toolbar-positive-drag" class="toolbar-drag"> <div id="toolbar-friction-positive-large" class="toolbar-friction" ondrop="dropPositiveLarge(event)" ondragover="allowDrop(event)"> Een nieuw natuurgebied (groot) <div id="friction-positive-large" draggable="true" ondragstart="drag(event)"></div> </div> <div id="toolbar-friction-positive-medium" class="toolbar-friction" ondrop="dropPositiveMedium(event)" ondragover="allowDrop(event)"> Een nieuw stadspark (midden) <div id="friction-positive-medium" draggable="true" ondragstart="drag(event)"></div> </div> <div id="toolbar-friction-positive-small" class="toolbar-friction" ondrop="dropPositiveSmall(event)" ondragover="allowDrop(event)"> Een nieuwe boom/ struik langs de weg (klein) <!-- bijvoorbeeld voor het opvangen van fijnstof http://edepot.wur.nl/120270 --> <div id="friction-positive-small" draggable="true" ondragstart="drag(event)"></div> </div> </div> <div id="toolbar-negative-drag" class="toolbar-drag"> <div id="toolbar-friction-negative-small" class="toolbar-friction" ondrop="dropNegativeSmall(event)" ondragover="allowDrop(event)"> Het weghalen van een boom/ struik langs de weg (klein) <div id="friction-negative-small" draggable="true" ondragstart="drag(event)"></div> </div> <div id="toolbar-friction-negative-medium" class="toolbar-friction" ondrop="dropNegativeMedium(event)" ondragover="allowDrop(event)"> Een nieuwe parkeerplaats (midden) <div id="friction-negative-medium" draggable="true" ondragstart="drag(event)"> </div> </div> <div id="toolbar-friction-negative-large" class="toolbar-friction" ondrop="dropNegativeLarge(event)" ondragover="allowDrop(event)"> Een nieuwe luchthaven (groot) <div id="friction-negative-large" draggable="true" ondragstart="drag(event)"> </div> </div> </div> <div id="toolbar-title-reset">Reset de tekening</div> <div id="toolbar-reset" class="toolbar-friction"> <div id="reset-button-friction" onclick="resetFriction(user)"> Reset </div> </div>'
	],
	[
		"cartoon-question8",
		"<p align='left' style='margin:1em;'>Vandaag kwam Steven een aardig meisje tegen tijdens zijn dagelijkse wandeling. Ze droeg een Wageningen universiteitstrui, een schoudertas die duidelijk van duurzaam materiaal gemaakt was en geitewollen sokken. Hij vroeg haar waar ze vandaan kwam en kreeg een volmondig 'Wageningen!' terug. Wageningen maakte duidelijk onderdeel uit van haar identiteit.</p>",
		"Waarom woont u in uw stad?",
		'<form onsubmit="showQuestion9(questions, user);">Sleep de eigenschappen (rechts) naar de bijbehorende prioriteit (links). <br/> De eigenschappen die het belangrijkst voor u zijn, staan het dichtst bij u (gele cirkel) <br/> en de eigenschappen die u minder belangrijk vind staan verder van u af (paarse cirkel). <br/> Druk op \'Reset\' om overnieuw te beginnen. <br/> <div id="place-attachment"> <div id="place-attachment-drop"> <div id="place-attachment-drop5" ondrop="dropPlaceAttachment(event, user)" ondragover="allowDrop(event)"> Prioriteit 5 <div id="place-attachment-drop4" ondrop="dropPlaceAttachment(event, user)" ondragover="allowDrop(event)"> Prioriteit 4 <div id="place-attachment-drop3" ondrop="dropPlaceAttachment(event, user)" ondragover="allowDrop(event)"> Prioriteit 3 <div id="place-attachment-drop2" ondrop="dropPlaceAttachment(event, user)" ondragover="allowDrop(event)"> Prioriteit 2 <div id="place-attachment-drop1" ondrop="dropPlaceAttachment(event, user)" ondragover="allowDrop(event)"> Prioriteit 1 <div id="place-attachment-you"> U </div> </div> </div> </div> </div> </div> </div> <div id="place-attachment-drag"> <div id="place-attachment-drag-title"> <b>Eigenschappen</b> <div id="place-attachment-drag-item-wrapper"> <div id="place-attachment-drag-place-identity" class="place-attachment-drag-item" draggable="true" ondragstart="drag(event)"> Identiteit </div> <div id="place-attachment-drag-place-dependency" class="place-attachment-drag-item" draggable="true" ondragstart="drag(event)"> <u title="De mogelijkheden die de stad biedt. &#013;&#010; Denk hierbij bijvoorbeeld aan ergens wonen omdat het dichtbij uw werk is, &#013;&#010; of omdat het dicht bij een groot winkelcentrum/ ziekenhuis/ sportcentrum is.">Werk/ opties</u> </div> <div id="place-attachment-drag-nature-bonding" class="place-attachment-drag-item" draggable="true" ondragstart="drag(event)"> Natuur </div> <div id="place-attachment-drag-family-bonding" class="place-attachment-drag-item" draggable="true" ondragstart="drag(event)"> Familie </div> <div id="place-attachment-drag-friend-bonding" class="place-attachment-drag-item" draggable="true" ondragstart="drag(event)"> Vrienden </div> </div> </div> <div id="place-attachment-drag-reset" onclick="resetPlaceAttachment(user)"> Reset </div> <br/> <input type="submit" value="Volgende"> <br/><br/> </div> </div></form>',
		''
	],
	[
		"cartoon-question9",
		"<p align='left' style='margin:1em;'>Piet was recentelijk verhuisd en maakt een wandeling door het park, op afwachten van een telefoontje van de makelaar. Niet lang daarna belt de makelaar en vraagt hem wat hij van zijn buurt vindt. Piet antwoord met 'Natuurlijk!'. Diezelfde middag had hij iemand aan de telefoon die ook 'Natuurlijk' antwoordde op zijn vraag, hoewel die verhuisd was naar een hoge flat. Zij vond de geraniums in haar bloemenbak al onder natuur verstaan. </p>",
		"Wat is het minimale wat u onder natuur verstaat?",
		'<p style="text-align:center"> Verschuif de schuifbalk van links naar rechts voor de opties, de huidige optie staat boven de schuifbalk weergegeven. <br/>  Er zijn zeven opties, van \'Een plant in de vensterbank\' (links) tot \'Een onbewoond eiland\' (rechts). <br/> Verschuif de schuifbalk zoveel mogelijk naar links, waarbij de optie nog net overeenkomt met uw mening wat u (minimaal) onder natuur vindt verstaan. </p> <div id="slider-wrapper"> <form onsubmit="showQuestion10(questions, user);"> <div id="slider-legend"> </div> <input id="slider" type="range" min=1 max=7 value="resetSlider()" oninput="sliderValue(this.value)"> <br/> <br/> <input type="submit" value="Volgende"></form></div>',
		''
	],
	[
		"cartoon-question10",
		"<p align='left' style='margin:1em;'>Piet is klaar met wandelen en werkt de rest van de zaterdagmiddag in zijn tuin. Het gras aan de overkant van de straat lijkt groener. Zijn buurman vraagt hem: 'Piet, snap jij waarom het altijd groener is aan de overkant?' Piet: 'Nee.' Wat zij niet weten, was dat er aan de overkant van de straat een buurtactiviteit 'Groene Vingers' gaande was, waarbij bankjes met afgebladderde verf weer overnieuw geverfd werden.</p>",
		"Hoe betrokken bent u bij uw leefomgeving?",
		'<form onsubmit="sendQuestionnaire(questions, user);"> Kent u het bestemmingsplan van uw leefomgeving? <br/> <input id="involvement_bestemmingsplan_yes" type="radio" name="involvement_bestemmingsplan" value="yes"> Ja <br/> <input id="involvement_bestemmingsplan_no" type="radio" name="involvement_bestemmingsplan" value="no"> Nee <br/> <br/> Heeft u weleens deelgenomen aan <u title="Hierbij kunt u denken aan deelname aan openbare gesprekken over uw leefomgeving.">publieke participatie</u> in uw leefomgeving? <br/> <input id="involvement_participation_yes" type="radio" name="involvement_participation" value="yes"> Ja <br/> <input id="involvement_participation_no" type="radio" name="involvement_participation" value="no"> Nee <br/> <br/> <input type="submit" value="Verstuur"></form>',
		''
	],
	[
		"CartoonSrc",
		"CartoonAlt",
		"VraagNummer",
		'Antwoord',
		'ToolbarText'
	]
];

////////////////////////////////////////////////////
// toggleQuestions(questions, lastQuestion, user) //
////////////////////////////////////////////////////

// Function for toggling the questions

function toggleQuestions(questions, lastQuestion, user) {
	$("#tableofcontents-introduction").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
		// Remove the #map from view
		$("#map").css("display", "none");

		// Set the introduction as the current question
		currentQuestion = 0;
		user.currentQuestion = 0;

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[0][2]);

		// Show the answer
		$("#answer").html(questions[0][3]);

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
/*
	for (i = 1; i < lastQuestion; i++) {
		$("#tableofcontents-question"+i).click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		}
		
			// Remove the #map from view
			$("#map").css("display", "none");

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

			// Show #toolbar-createmarker
			$("#toolbar-createmarker").css("display", "block");

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
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
		// Remove the #map from view
		$("#map").css("display", "none");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 1 as the current question
		currentQuestion = 1;
		user.currentQuestion = 1;

		// Show the cartoon
		$("#header-title-text").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[1][2]);

		// Show the answer
		$("#answer").html(questions[1][3]);

		// Show the user age as value of #data-question1
		document.getElementById("data-question1").value = user.age;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question2").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
		// Remove the #map from view
		$("#map").css("display", "none");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 2 as the current question
		currentQuestion = 2;
		user.currentQuestion = 2;

		// Show the cartoon
		$("#header-title-text").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[2][2]);

		// Show the answer
		$("#answer").html(questions[2][3]);

		// Show the user nationality as value of #data-question2
		document.getElementById("data-question2").value = user.nationality;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question3").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
		// Remove the #map from view
		$("#map").css("display", "none");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 3 as the current question
		currentQuestion = 3;
		user.currentQuestion = 3;

		// Show the cartoon
		$("#header-title-text").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[3][2]);

		// Show the answer
		$("#answer").html(questions[3][3]);

		// Show the user zipcode as value of #data-question3
		document.getElementById("data-question3").value = user.zipcode;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question4").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
		// Remove the #map from view
		$("#map").css("display", "none");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 4 as the current question
		currentQuestion = 4;
		user.currentQuestion = 4;

		// Show the cartoon
		$("#header-title-text").html(questions[4][1]); // '<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[4][2]);

		// Show the answer
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

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question5").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
		// Remove the #map from view
		$("#map").css("display", "none");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 5 as the current question
		currentQuestion = 5;
		user.currentQuestion = 5;

		// Show the cartoon
		$("#header-title-text").html(questions[5][1]); // '<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[5][2]);

		// Show the answer
		$("#answer").html(questions[5][3]);

		// Show the user.gametimehours as value of #data-question5-gametime-hours
		document.getElementById("data-question5-gametime-hours").value = user.gametimehours;
		// Show the user.gametimecategories as value of #data-question5-gametime-categories
		document.getElementById("data-question5-gametime-categories").value = user.gametimecategories;

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question6").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}
		
		// Show the #map
		// Show the data of question 6
		if (user.livingenvironmentproperties[1][0] == "circle") { // && currentQuestion != 6
			// Show the #map
			$("#map").css("display", "block");
			// Show the circle
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createcircle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createcircle").addClass("toolbar-item toolbar-active");
			//return user;
		} else if (user.livingenvironmentproperties[1][0] == "rectangle") {
			// Show the #map
			$("#map").css("display", "block");
			// Show the rectangle
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createrectangle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createrectangle").addClass("toolbar-item toolbar-active");
			//return user;
		} else if (user.livingenvironmentproperties[1][0] == "polygon") {
			// Show the #map
			$("#map").css("display", "block");
			// Show the polygon
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createpolygon as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createpolygon").addClass("toolbar-item toolbar-active");
			//return user;
		} else {
			// Remove the .toolbar-active
			$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
			drawMap(user);
		}

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 6 as the current question
		currentQuestion = 6;
		user.currentQuestion = 6;

		// Show the cartoon
		$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[6][2]);

		// Show the answer
		$("#answer").html(questions[6][3]);

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Show the overview, the cartoon and the toolbar footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question7").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}
		
		// Don't show the #map
		$("#map").css("display", "none");

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 7 as the current question
		currentQuestion = 7;
		user.currentQuestion = 7;

		// Show the cartoon
		$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[7][2]);

		// Show the answer
		$("#answer").html(questions[7][3]);

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);
		// Show the positive and negative friction on the table, if they are already filled in
		if (user.frictionpositivelarge != "") {
			document.getElementById(user.frictionpositivelarge).appendChild(document.getElementById("friction-positive-large"));
		}
		if (user.frictionpositivemedium != "") {
			document.getElementById(user.frictionpositivemedium).appendChild(document.getElementById("friction-positive-medium"));
		}
		if (user.frictionpositivesmall != "") {
			document.getElementById(user.frictionpositivesmall).appendChild(document.getElementById("friction-positive-small"));
		}
		if (user.frictionnegativesmall != "") {
			document.getElementById(user.frictionnegativesmall).appendChild(document.getElementById("friction-negative-small"));
		}
		if (user.frictionnegativemedium != "") {
			document.getElementById(user.frictionnegativemedium).appendChild(document.getElementById("friction-negative-medium"));
		}
		if (user.frictionnegativelarge != "") {
			document.getElementById(user.frictionnegativelarge).appendChild(document.getElementById("friction-negative-large"));
		}

		// Return the user object
		return user;
	});
	$("#tableofcontents-question8").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}
		
		// Don't show the #map
		$("#map").css("display", "none");

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 8 as the current question
		currentQuestion = 8;
		user.currentQuestion = 8;

		// Show the cartoon
		$("#header-title-text").html(questions[8][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[8][2]);

		// Show the answer
		$("#answer").html(questions[8][3]);
		if (user.priority1 != "") {
			document.getElementById("place-attachment-drop1").appendChild(document.getElementById(user.priority1));
		}
		if (user.priority2 != "") {
			document.getElementById("place-attachment-drop2").appendChild(document.getElementById(user.priority2));
		}
		if (user.priority3 != "") {
			document.getElementById("place-attachment-drop3").appendChild(document.getElementById(user.priority3));
		}
		if (user.priority4 != "") {
			document.getElementById("place-attachment-drop4").appendChild(document.getElementById(user.priority4));
		}
		if (user.priority5 != "") {
			document.getElementById("place-attachment-drop5").appendChild(document.getElementById(user.priority5));
		}

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question9").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}
		
		// Don't show the #map
		$("#map").css("display", "none");

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 9 as the current question
		currentQuestion = 9;
		user.currentQuestion = 9;

		// Show the cartoon
		$("#header-title-text").html(questions[9][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[9][2]);

		// Show the answer
		$("#answer").html(questions[9][3]);
		resetSlider();
		if (user.minimum_nature != "") {
			if (user.minimum_nature == "Een plant in de vensterbank") {
				document.getElementById("slider").value = 1;
			} else if (user.minimum_nature == "De bomen in de straat") {
				document.getElementById("slider").value = 2;
			} else if (user.minimum_nature == "Een moestuin") {
				document.getElementById("slider").value = 3;
			} else if (user.minimum_nature == "De kinderboerderij of het stadspark") {
				document.getElementById("slider").value = 4;
			} else if (user.minimum_nature == "Een natuurgebied in Nederland") {
				document.getElementById("slider").value = 5;
			} else if (user.minimum_nature == "Een groot natuurgebied in het buitenland") {
				document.getElementById("slider").value = 6;
			} else if (user.minimum_nature == "Een onbewoond eiland") {
				document.getElementById("slider").value = 7;
			}
			document.getElementById("slider-legend").innerHTML = user.minimum_nature;
		}

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
	$("#tableofcontents-question10").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			saveDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			saveDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			saveDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			saveDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			saveDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			saveDataQuestion6(questions, user); */
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			saveDataQuestion7(questions, user);
		// Question 8
		} else if ($("#questiontitle").html() == questions[8][2]) {
			saveDataQuestion8(questions, user);
		// Question 9
		} else if ($("#questiontitle").html() == questions[9][2]) {
			saveDataQuestion9(questions, user);
		// Question 10
		} else if ($("#questiontitle").html() == questions[10][2]) {
			saveDataQuestion10(questions, user);
		}
		
		// Don't show the #map
		$("#map").css("display", "none");

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Set question 10 as the current question
		currentQuestion = 10;
		user.currentQuestion = 10;

		// Show the cartoon
		$("#header-title-text").html(questions[10][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'

		// Show the question
		$("#questiontitle").html(questions[10][2]);

		// Show the answer
		$("#answer").html(questions[10][3]);
		if (user.involvement_bestemmingsplan == "yes") {
			document.getElementById("involvement_bestemmingsplan_yes").checked = true;
		} else if (user.involvement_bestemmingsplan == "no") {
			document.getElementById("involvement_bestemmingsplan_no").checked = true;
		}
		if (user.involvement_participation == "yes") {
			document.getElementById("involvement_participation_yes").checked = true;
		} else if (user.involvement_participation == "no") {
			document.getElementById("involvement_participation_no").checked = true;
		}

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");

		// Show the overview and cartoon footer buttons
		showFooterButtons(user);

		// Return the user object
		return user;
	});
}

///////////////////////////////////////
// showIntroduction(questions, user) //
///////////////////////////////////////

// Function for showing the introduction on startGeonaire

function showIntroduction(questions, user) {

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set the introduction as the current question
	currentQuestion = 0;
	user.currentQuestion = 0;

	// Show the new question
	$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'
	$("#questiontitle").html(questions[0][2]);
	$("#answer").html(questions[0][3]);
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-introduction").addClass("tableofcontents-item tableofcontents-active");
	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion1(questions, user) //
////////////////////////////////////

// Function for showing question 1

function showQuestion1(questions, user) {

	if (document.getElementById("form-button-introduction").innerHTML == "Begin") {
		// Show positive feedback on the button
		document.getElementById("form-button-introduction").innerHTML = "Wat leuk dat u meedoet!";
		// Set question 1 as the current question
		user.currentQuestion = 1;
	} else if (document.getElementById("form-button-introduction").innerHTML == "Wat leuk dat u meedoet!") {
		// Reset the scrollbars to the top
		$("*").scrollTop(0);
		// Set question 1 as the current question
		currentQuestion = 1;
		user.currentQuestion = 1;
		// Reset the button
		document.getElementById("form-button-introduction").innerHTML = "Begin";

		// Show the new question
		$("#header-title-text").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'
		$("#questiontitle").html(questions[1][2]);
		$("#answer").html(questions[1][3]);
		$("#tableofcontents-question1").css("display", "block");
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$("#tableofcontents-question1").addClass("tableofcontents-item tableofcontents-active");
	}

	// Set question 1 as the current question
	user.currentQuestion = 1;
	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion2(questions, user) //
////////////////////////////////////

// Function for showing question 2

function showQuestion2(questions, user) {

	// Save the data from question 1 and add it to the user object
	saveDataQuestion1(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 2 as the current question
	currentQuestion = 2;
	user.currentQuestion = 2;

	// Show the new question
	$("#header-title-text").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'
	$("#questiontitle").html(questions[2][2]);
	$("#answer").html(questions[2][3]);
	document.getElementById("data-question2").value = user.nationality;
	$("#tableofcontents-question2").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question2").addClass("tableofcontents-item tableofcontents-active");
	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion3(questions, user) //
////////////////////////////////////

// Function for showing question 3

function showQuestion3(questions, user) {

	// Save the data from question 2 and add it to the user object
	saveDataQuestion2(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 3 as the current question
	currentQuestion = 3;
	user.currentQuestion = 3;

	// Show the new question
	$("#header-title-text").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'
	$("#questiontitle").html(questions[3][2]);
	$("#answer").html(questions[3][3]);
	document.getElementById("data-question3").value = user.zipcode;
	$("#tableofcontents-question3").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question3").addClass("tableofcontents-item tableofcontents-active");
	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion4(questions, user) //
////////////////////////////////////

// Function for showing question 4

function showQuestion4(questions, user) {

	// Save the data from question 3 and add it to the user object
	saveDataQuestion3(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 4 as the current question
	currentQuestion = 4;
	user.currentQuestion = 4;

	// Show the new question
	$("#header-title-text").html(questions[4][1]); // '<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">'
	$("#questiontitle").html(questions[4][2]);
	$("#answer").html(questions[4][3]);
	$("#tableofcontents-question4").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question4").addClass("tableofcontents-item tableofcontents-active");
	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion5(questions, user) //
////////////////////////////////////

// Function for showing question 5

function showQuestion5(questions, user) {

	// Save the data from question 4 and add it to the user object
	saveDataQuestion4(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 5 as the current question
	currentQuestion = 5;
	user.currentQuestion = 5;

	// Show the new question
	$("#header-title-text").html(questions[5][1]); // '<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">'
	$("#questiontitle").html(questions[5][2]);
	$("#answer").html(questions[5][3]);
	$("#tableofcontents-question5").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question5").addClass("tableofcontents-item tableofcontents-active");
	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion6(questions, user) //
////////////////////////////////////

// Function for showing question 6

function showQuestion6(questions, user) {

	// Save the data from question 5 and add it to the user object
	saveDataQuestion5(questions, user);

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 6 as the current question
	currentQuestion = 6;
	user.currentQuestion = 6;

	// Show the new question
	$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'
	$("#questiontitle").html(questions[6][2]);
	$("#answer").html(questions[6][3]);
	$("#tableofcontents-question6").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question6").addClass("tableofcontents-item tableofcontents-active");

	// Draw the map if user.livingenvironment = ""
	if (user.livingenvironment == "" || user.livingenvironmentamount == 0) {
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
			// Show the rectangle
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createrectangle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createrectangle").addClass("toolbar-item toolbar-active");
			//return user;
		} else if (user.livingenvironmentproperties[1][0] == "polygon") {
			// Show the polygon
			user.livingenvironment.setMap(user.map);
			// Set #toolbar-createpolygon as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons #toolbar-createpolygon").addClass("toolbar-item toolbar-active");
			//return user;
		}
	}

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}
	// Don't show #toolbar-createmarker
	$("#toolbar-createmarker").css("display", "none");

	// Reset the width of #content
	if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
		$(".question-answer").css("left", "0%");
		$(".question-answer").css("width", "100%");
	} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
		$(".question-answer").css("left", "0%");
		$(".question-answer").css("width", "92.5%");
	} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
		$(".question-answer").css("left", "17.5%");
		$(".question-answer").css("width", "82.5%");
	} else {
		$(".question-answer").css("left", "17.5%");
		$(".question-answer").css("width", "75%");
	}
	// Show the overview, the cartoon and the toolbar footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion7(questions, user) //
////////////////////////////////////

// Function for showing question 7

function showQuestion7(questions, user) {

	// Save the data from question 6 and add it to the user object
	saveDataQuestion6(questions, user);

	// Remove the #map from view
	$("#map").css("display", "none");

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 7 as the current question
	currentQuestion = 7;
	user.currentQuestion = 7;

	// Show the new question
	$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
	$("#questiontitle").html(questions[7][2]);
	$("#answer").html(questions[7][3]);
	// if (user.frictionpositivelarge == "td") {
	// 	document.getElementById("td" + 1).appendChild(document.getElementById("friction-positive-large"));
	// }  // user.frictionpositivelarge.slice(2, str.length)
	// for (i=1; i=100; i++) {
	// 	if (user.frictionpositivelarge == "td" + i) {
	// 		document.getElementById("td" + 1).appendChild(document.getElementById("friction-positive-large"));
	// 	}
	// }
	// for (i=1; i=100; i++) {
	// 	if ("td" + i.toString() == user['friction-positive-large']) {
	// 		document.getElementById("td" + i.toString()).appendChild(user['friction-positive-large']);
	// 	} else if ("td" + i.toString() == user['friction-positive-medium']) {
	// 		document.getElementById("td" + i.toString()).appendChild(user['friction-positive-medium']);
	// 	} else if ("td" + i.toString() == user['friction-positive-small']) {
	// 		document.getElementById("td" + i.toString()).appendChild(user['friction-positive-small']);
	// 	} else if ("td" + i.toString() == user['friction-negative-small']) {
	// 		document.getElementById("td" + i.toString()).appendChild(user['friction-negative-small']);
	// 	} else if ("td" + i.toString() == user['friction-negative-medium']) {
	// 		document.getElementById("td" + i.toString()).appendChild(user['friction-negative-medium']);
	// 	} else if ("td" + i.toString() == user['friction-negative-large']) {
	// 		document.getElementById("td" + i.toString()).appendChild(user['friction-negative-large']);
	// 	}
	// }
	$("#tableofcontents-question7").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question7").addClass("tableofcontents-item tableofcontents-active");

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}

	// Reset the width of #content
	if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() == "none") {
		$(".question-answer").css("left", "0%");
		$(".question-answer").css("width", "100%");
	} else if ($("#overview").css("display").toLowerCase() == "none" && $("#toolbar").css("display").toLowerCase() != "none") {
		$(".question-answer").css("left", "0%");
		$(".question-answer").css("width", "92.5%");
	} else if ($("#overview").css("display").toLowerCase() != "none" && $("#toolbar").css("display").toLowerCase() == "none") {
		$(".question-answer").css("left", "17.5%");
		$(".question-answer").css("width", "82.5%");
	} else {
		$(".question-answer").css("left", "17.5%");
		$(".question-answer").css("width", "75%");
	}

	// Show the overview and cartoon footer buttons
	showFooterButtons(user);
	// Show the positive and negative friction on the table, if they are already filled in
	if (user.frictionpositivelarge != "") {
		document.getElementById(user.frictionpositivelarge).appendChild(document.getElementById("friction-positive-large"));
	}
	if (user.frictionpositivemedium != "") {
		document.getElementById(user.frictionpositivemedium).appendChild(document.getElementById("friction-positive-medium"));
	}
	if (user.frictionpositivesmall != "") {
		document.getElementById(user.frictionpositivesmall).appendChild(document.getElementById("friction-positive-small"));
	}
	if (user.frictionnegativesmall != "") {
		document.getElementById(user.frictionnegativesmall).appendChild(document.getElementById("friction-negative-small"));
	}
	if (user.frictionnegativemedium != "") {
		document.getElementById(user.frictionnegativemedium).appendChild(document.getElementById("friction-negative-medium"));
	}
	if (user.frictionnegativelarge != "") {
		document.getElementById(user.frictionnegativelarge).appendChild(document.getElementById("friction-negative-large"));
	}

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion8(questions, user) //
////////////////////////////////////

// Function for showing question 8

function showQuestion8(questions, user) {

	// Save the data from question 7 and add it to the user object
	//saveDataQuestion7(questions, user);

	// Remove the #map from view
	$("#map").css("display", "none");

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 8 as the current question
	currentQuestion = 8;
	user.currentQuestion = 8;

	// Show the new question
	$("#header-title-text").html(questions[8][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
	$("#questiontitle").html(questions[8][2]);
	$("#answer").html(questions[8][3]);
	if (user.priority1 != "") {
		document.getElementById("place-attachment-drop1").appendChild(document.getElementById(user.priority1));
	}
	if (user.priority2 != "") {
		document.getElementById("place-attachment-drop2").appendChild(document.getElementById(user.priority2));
	}
	if (user.priority3 != "") {
		document.getElementById("place-attachment-drop3").appendChild(document.getElementById(user.priority3));
	}
	if (user.priority4 != "") {
		document.getElementById("place-attachment-drop4").appendChild(document.getElementById(user.priority4));
	}
	if (user.priority5 != "") {
		document.getElementById("place-attachment-drop5").appendChild(document.getElementById(user.priority5));
	}
	$("#tableofcontents-question8").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question8").addClass("tableofcontents-item tableofcontents-active");

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}
	$("#tableofcontents-question8").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question8").addClass("tableofcontents-item tableofcontents-active");

	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////
// showQuestion9(questions, user) //
////////////////////////////////////

// Function for showing question 9

function showQuestion9(questions, user) {

	// Save the data from question 8 and add it to the user object
	//saveDataQuestion8(questions, user);

	// Remove the #map from view
	$("#map").css("display", "none");

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 9 as the current question
	currentQuestion = 9;
	user.currentQuestion = 9;

	// Show the new question
	$("#header-title-text").html(questions[9][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
	$("#questiontitle").html(questions[9][2]);
	$("#answer").html(questions[9][3]);
	resetSlider();
	if (user.minimum_nature != "") {
		if (user.minimum_nature == "Een plant in de vensterbank") {
			document.getElementById("slider").value = 1;
		} else if (user.minimum_nature == "De bomen in de straat") {
			document.getElementById("slider").value = 2;
		} else if (user.minimum_nature == "Een moestuin") {
			document.getElementById("slider").value = 3;
		} else if (user.minimum_nature == "De kinderboerderij of het stadspark") {
			document.getElementById("slider").value = 4;
		} else if (user.minimum_nature == "Een natuurgebied in Nederland") {
			document.getElementById("slider").value = 5;
		} else if (user.minimum_nature == "Een groot natuurgebied in het buitenland") {
			document.getElementById("slider").value = 6;
		} else if (user.minimum_nature == "Een onbewoond eiland") {
			document.getElementById("slider").value = 7;
		}
		document.getElementById("slider-legend").innerHTML = user.minimum_nature;
	}
	$("#tableofcontents-question9").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question9").addClass("tableofcontents-item tableofcontents-active");

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}
	$("#tableofcontents-question9").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question9").addClass("tableofcontents-item tableofcontents-active");

	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

/////////////////////////////////////
// showQuestion10(questions, user) //
/////////////////////////////////////

// Function for showing question 10

function showQuestion10(questions, user) {

	if(user.currentQuestion == 9) {
		// Save the data from question 9 and add it to the user object
		saveDataQuestion9(questions, user);
	}

	// Remove the #map from view
	$("#map").css("display", "none");

	// Reset the scrollbars to the top
	$("*").scrollTop(0);

	// Set question 10 as the current question
	currentQuestion = 10;
	user.currentQuestion = 10;

	// Show the new question
	$("#header-title-text").html(questions[10][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'
	$("#questiontitle").html(questions[10][2]);
	$("#answer").html(questions[10][3]);
	if (user.involvement_bestemmingsplan == "yes") {
		document.getElementById("involvement_bestemmingsplan_yes").checked = true;
	} else if (user.involvement_bestemmingsplan == "no") {
		document.getElementById("involvement_bestemmingsplan_no").checked = true;
	}
	if (user.involvement_participation == "yes") {
		document.getElementById("involvement_participation_yes").checked = true;
	} else if (user.involvement_participation == "no") {
		document.getElementById("involvement_participation_no").checked = true;
	}
	$("#tableofcontents-question10").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question10").addClass("tableofcontents-item tableofcontents-active");

	// Show #toolbar
	if ($("#toolbar").css("display").toLowerCase() == "none") {
		$("#toolbar").css("display", "inline-block");
	}
	$("#tableofcontents-question10").css("display", "block");
	$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
	$("#tableofcontents-question10").addClass("tableofcontents-item tableofcontents-active");

	// Show the overview and cartoon footer buttons
	showFooterButtons(user);

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion1(questions, user) //
////////////////////////////////////////

// Function to save the data from question 1 and add it to the user object

function saveDataQuestion1(questions, user) {

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

function saveDataQuestion2(questions, user) {

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

function saveDataQuestion3(questions, user) {
	// Set the variables
	var zipcode = document.getElementById("data-question3").value;

	// Save the data from question 3 and add it to the user object
	if (user.zipcode != zipcode) {
		zipcode = document.getElementById("data-question3").value;
		user.zipcode = zipcode;
		addZipcodeProperties(user);

		// Reset question 6
		// Set the user.livingenvironmentamount to 0
		user.livingenvironmentamount = 0;
		// Set the living environment properties to default
		user.livingenvironmentproperties = [
			["type", "lat", "lon", "rad", "north", "south", "east", "west"],
			["type", "lat", "lon", "rad", "north", "south", "east", "west"]
		];
		user.livingenvironment = "";
	} else {
		user.zipcode = zipcode;
		addZipcodeProperties(user);
	}

	// Return the user object
	return user;
}

////////////////////////////////////////
// saveDataQuestion4(questions, user) //
////////////////////////////////////////

// Function to save the data from question 4 and add it to the user object

function saveDataQuestion4(questions, user) {

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

function saveDataQuestion5(questions, user) {

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

function saveDataQuestion6(questions, user) {

	// Save the data from question 6 and add it to the user object
	if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {

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

		// Save the area if it's a polygon
		} else if (user.livingenvironmentproperties[1][0] == "polygon") {
			// Add 1 to user.livingenvironmentamount to make sure that the user can only create 1 living environment area
			user.livingenvironmentamount = 1;
			// Set the living environment properties for polygon
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["polygon", "lat", "lon", "rad", "south", "east", "west"]
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

////////////////////////////////////////
// saveDataQuestion7(questions, user) //
////////////////////////////////////////

// Function to save the data from question 7 and add it to the user object

function saveDataQuestion7(questions, user) {
}

////////////////////////////////////////
// saveDataQuestion8(questions, user) //
////////////////////////////////////////

// Function to save the data from question 8 and add it to the user object

function saveDataQuestion8(questions, user) {
}

////////////////////////////////////////
// saveDataQuestion9(questions, user) //
////////////////////////////////////////

// Function to save the data from question 9 and add it to the user object

function saveDataQuestion9(questions, user) {
	if (document.getElementById("slider").value == 1) {
		user.minimum_nature = "Een plant in de vensterbank";
	} else if (document.getElementById("slider").value == 2) {
		user.minimum_nature = "De bomen in de straat";
	} else if (document.getElementById("slider").value == 3) {
		user.minimum_nature = "Een moestuin";
	} else if (document.getElementById("slider").value == 4) {
		user.minimum_nature = "De kinderboerderij of het stadspark";
	} else if (document.getElementById("slider").value == 5) {
		user.minimum_nature = "Een natuurgebied in Nederland";
	} else if (document.getElementById("slider").value == 6) {
		user.minimum_nature = "Een groot natuurgebied in het buitenland";
	} else if (document.getElementById("slider").value == 7) {
		user.minimum_nature = "Een onbewoond eiland";
	}

	// Return user
	return user;
}

////////////////////////////////////////
// saveDataQuestion10(questions, user) //
////////////////////////////////////////

// Function to save the data from question 10 and add it to the user object

function saveDataQuestion10(questions, user) {

	// Save the data about the user's involvement with the 'Bestemmingsplan' in his living environment
	if (document.getElementById("involvement_bestemmingsplan_yes").checked) {
		user.involvement_bestemmingsplan = "yes";
	} else if (document.getElementById("involvement_bestemmingsplan_no").checked) {
		user.involvement_bestemmingsplan = "no";
	}

	// Save the data about the user's involvement with public participation in his living environment
	if (document.getElementById("involvement_participation_yes").checked) {
		user.involvement_participation = "yes";
	} else if (document.getElementById("involvement_participation_no").checked) {
		user.involvement_participation = "no";
	}

	// Return the user object
	return user;
}

/////////////////////////////
// sendQuestionnaire(user) //
/////////////////////////////

// Function that handles sending the information of the user to the server/database

function sendQuestionnaire(questions, user) {

	// Save the data from question 10 and add it to the user object
	saveDataQuestion10(questions, user);

	if (confirm("Heeft u de vragenlijst naar waarheid ingevuld? ") == true) {
		// Add current time to user object
		// Show a thank you to the user
		// Add the data to the database
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		} else { // code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		// xmlhttp.onreadystatechange=function() {
	        // 		if (this.readyState==4 && this.status==200) {
		//   		document.getElementById("txtHint").innerHTML=this.responseText;
		// 	}
		// }
		age = user.age;
		nationality = user.nationality;
		zipcode = user.zipcode;
		game_category_genre_action = 1;
		game_category_genre_action_adventure = 1;
		game_category_genre_adventure = 1;
		game_category_genre_facebook = 1;
		game_category_genre_mobilephone = 1;
		game_category_genre_roleplaying = 1;
		game_category_genre_seriousgame = 1;
		game_category_genre_simulation = 1;
		game_category_genre_strategy = 1;
		game_category_genre_sport = 1;
		game_category_story_fiction = 1;
		game_category_story_nonfiction = 1;
		game_category_computer_console = 1;
		game_category_computer_handheld = 1;
		game_category_computer_ipad = 1;
		game_category_computer_mobilephone = 1;
		game_category_computer_pcmac = 1;
		game_category_view_2d = 1;
		game_category_view_3d = 1;
		game_category_view_firstperson = 1;
		game_category_view_thirdperson = 1;
		game_category_view_augmentedreality = 1;
		game_category_view_virtualreality = 1;
		game_time_hours = 5;
		game_time_category = 'days';
		living_environment_type = user.livingenvironmentproperties[1][0];
		living_environment_size = 1235.34;
		living_environment_area = 'POLYGON((13.215179443359373 52.588032137196755,13.42803955078125 52.592620721000365,13.454132080078125 52.46897854656702,13.347015380859375 52.45893824522763,13.215179443359373 52.588032137196755))';
		living_environment_circlecenterlat = 0.123;
		living_environment_circlecenterlon = 0.234;
		living_environment_circlecenterradius = 2.1;
                // alert(user.frictionpositivelargex);  //works
		friction_positive_large_x = 1;
                // alert(friction_positive_large_x);  //works
		friction_positive_large_y = user.frictionpositivelargey;
                // alert(user.frictionpositivelargey); // works
		friction_positive_medium_x = 2;
                // alert(user.frictionpositivemediumx);  // works
		friction_positive_medium_y = 2;
                // alert(user.frictionpositivemediumy); // works
		friction_positive_small_x = 100;
		friction_positive_small_y = 100;
		friction_negative_small_x = 100;
		friction_negative_small_y = 100;
		friction_negative_medium_x = 10;
		friction_negative_medium_y = 10;
		friction_negative_large_x = 1;
		friction_negative_large_y = user.frictionnegativelargey;
		place_attachment_priority1 = 'Place identity';
		place_attachment_priority2 = 'Friend bonding';
		place_attachment_priority3 = 'Nature bonding';
		place_attachment_priority4 = 'Place dependency';
		place_attachment_priority5 = 'Family bonding';
		nature_minimum = 'vegetable garden';
		involvement_omgevingswet = 1;
		involvement_participation = 1;
		email = 'mikkie@gmail.com';
		send_result_to_user = 1;
		is_result_send = 1;
	        current_datetime = new Date().toISOString().slice(0, 19).replace('T', ' ');
		xmlhttp.open("POST","insert_data_geonaire.php?age="+age+"&nationality="+nationality+"&zipcode="+zipcode+"&game_category_genre_action="+game_category_genre_action+"&game_category_genre_action_adventure="+game_category_genre_action_adventure+"&game_category_genre_adventure="+game_category_genre_adventure+"&game_category_genre_facebook="+game_category_genre_facebook+"&game_category_genre_mobilephone="+game_category_genre_mobilephone+"&game_category_genre_roleplaying="+game_category_genre_roleplaying+"&game_category_genre_seriousgame="+game_category_genre_seriousgame+"&game_category_genre_simulation="+game_category_genre_simulation+"&game_category_genre_sport="+game_category_genre_sport+"&game_category_genre_strategy="+game_category_genre_strategy+"&game_category_story_fiction="+game_category_story_fiction+"&game_category_story_nonfiction="+game_category_story_nonfiction+"&game_category_computer_console="+game_category_computer_console+"&game_category_computer_handheld="+game_category_computer_handheld+"&game_category_computer_ipad="+game_category_computer_ipad+"&game_category_computer_mobilephone="+game_category_computer_mobilephone+"&game_category_computer_pcmac="+game_category_computer_pcmac+"&game_category_view_2d="+game_category_view_2d+"&game_category_view_3d="+game_category_view_3d+"&game_category_view_firstperson="+game_category_view_firstperson+"&game_category_view_thirdperson="+game_category_view_thirdperson+"&game_category_view_augmentedreality="+game_category_view_augmentedreality+"&game_category_view_virtualreality="+game_category_view_virtualreality+"&game_time_hours="+game_time_hours+"&game_time_category="+game_time_category+"&living_environment_type="+living_environment_type+"&living_environment_size="+living_environment_size+"&living_environment_area="+living_environment_area+"&living_environment_circlecenterlat="+living_environment_circlecenterlat+"&living_environment_circlecenterlon="+living_environment_circlecenterlon+"&living_environment_circlecenterradius="+living_environment_circlecenterradius+"&friction_positive_large_x="+friction_positive_large_x+"&friction_positive_large_y="+friction_positive_large_y+"&friction_positive_medium_x="+friction_positive_medium_x+"&friction_positive_medium_y="+friction_positive_medium_y+"&friction_positive_small_x="+friction_positive_small_x+"&friction_positive_small_y="+friction_positive_small_y+"&friction_negative_small_x="+friction_negative_small_x+"&friction_negative_small_y="+friction_negative_small_y+"&friction_negative_medium_x="+friction_negative_medium_x+"&friction_negative_medium_y="+friction_negative_medium_y+"&friction_negative_large_x="+friction_negative_large_x+"&friction_negative_large_y="+friction_negative_large_y+"&place_attachment_priority1="+place_attachment_priority1+"&place_attachment_priority2="+place_attachment_priority2+"&place_attachment_priority3="+place_attachment_priority3+"&place_attachment_priority4="+place_attachment_priority4+"&place_attachment_priority5="+place_attachment_priority5+"&nature_minimum="+nature_minimum+"&involvement_omgevingswet="+involvement_omgevingswet+"&involvement_participation="+involvement_participation+"&email="+email+"&send_result_to_user="+send_result_to_user+"&is_result_send="+is_result_send+"&current_datetime="+current_datetime,true);
		xmlhttp.send();
		window.open("Geonaire.html", "_self");
		// return false;
	} else {
       // Show question 10 again
       showQuestion10(questions, user);
    }
}

///////////////////
// allowDrop(ev) //
///////////////////

// Function to allow drop events

function allowDrop(ev) {
	ev.preventDefault();
}

//////////////
// drag(ev) //
//////////////

// Function to drag events

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

//////////////////////
// dropFriction(ev) //
//////////////////////

// Function that handles dropping friction for question7

function dropFriction(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	switch(ev.target.id) {
		case("td1"):
			x = -100000;
			y = 100000;
		case("td2"):
			x = -10000;
			y = 100000;
		case("td3"):
			x = -1000;
			y = 100000;
		case("td4"):
			x = -100;
			y = 100000;
		case("td5"):
			x = -10;
			y = 100000;
		case("td6"):
			x = 10;
			y = 100000;
		case("td7"):
			x = 100;
			y = 100000;
		case("td8"):
			x = 1000;
			y = 100000;
		case("td9"):
			x = 10000;
			y = 100000;
		case("td10"):
			x = 100000;
			y = 100000;
		case("td11"):
		case("td12"):
		case("td13"):
		case("td14"):
		case("td15"):
		case("td16"):
		case("td17"):
		case("td18"):
		case("td19"):
		case("td20"):
		case("td21"):
		case("td22"):
		case("td23"):
		case("td24"):
		case("td25"):
		case("td26"):
		case("td27"):
		case("td28"):
		case("td29"):
		case("td30"):
		case("td31"):
		case("td32"):
		case("td33"):
		case("td34"):
		case("td35"):
		case("td36"):
		case("td37"):
		case("td38"):
		case("td39"):
		case("td40"):
		case("td41"):
		case("td42"):
		case("td43"):
		case("td44"):
		case("td45"):
		case("td46"):
		case("td47"):
		case("td48"):
		case("td49"):
		case("td50"):
		case("td51"):
		case("td52"):
		case("td53"):
		case("td54"):
		case("td55"):
		case("td56"):
		case("td57"):
		case("td58"):
		case("td59"):
		case("td60"):
		case("td61"):
		case("td62"):
		case("td63"):
		case("td64"):
		case("td65"):
		case("td66"):
		case("td67"):
		case("td68"):
		case("td69"):
		case("td70"):
		case("td71"):
		case("td72"):
		case("td73"):
		case("td74"):
		case("td75"):
		case("td76"):
		case("td77"):
		case("td78"):
		case("td79"):
		case("td80"):
		case("td81"):
		case("td82"):
		case("td83"):
		case("td84"):
		case("td85"):
		case("td86"):
		case("td87"):
		case("td88"):
		case("td89"):
		case("td90"):
		case("td91"):
		case("td92"):
		case("td93"):
		case("td94"):
		case("td95"):
		case("td96"):
		case("td97"):
		case("td98"):
		case("td99"):
		case("td100"):
			x = 100000;
			y = 100000;
			if (data == "friction-positive-large") {
				user.frictionpositivelarge = ev.target.id;
				user.frictionpositivelargex = x;
				user.frictionpositivelargey = y;
			} else if (data == "friction-positive-medium") {
				user.frictionpositivemedium = ev.target.id;
			} else if (data == "friction-positive-small") {
				user.frictionpositivesmall = ev.target.id;
			} else if (data == "friction-negative-small") {
				user.frictionnegativesmall = ev.target.id;
			} else if (data == "friction-negative-medium") {
				user.frictionnegativemedium = ev.target.id;
			}  else if (data == "friction-negative-large") {
				user.frictionnegativelarge = ev.target.id;
				user.frictionnegativelargex = x;
				user.frictionnegativelargey = y;
			}
			ev.target.appendChild(document.getElementById(data));
			break;
	}
}

///////////////////////////
// dropPositiveLarge(ev) //
///////////////////////////

// Function to drop positive large friction

function dropPositiveLarge(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.dataTransfer.getData("text") == "friction-positive-large") { 
		ev.target.appendChild(document.getElementById(data));
	}
}

////////////////////////////
// dropPositiveMedium(ev) //
////////////////////////////

// Function to drop positive medium friction

function dropPositiveMedium(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.dataTransfer.getData("text") == "friction-positive-medium") { 
		ev.target.appendChild(document.getElementById(data));
	}
}

///////////////////////////
// dropPositiveSmall(ev) //
///////////////////////////

// Function to drop positive small friction

function dropPositiveSmall(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.dataTransfer.getData("text") == "friction-positive-small") { 
		ev.target.appendChild(document.getElementById(data));
	}
}

///////////////////////////
// dropNegativeSmall(ev) //
///////////////////////////

// Function to drop negative small

function dropNegativeSmall(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.dataTransfer.getData("text") == "friction-negative-small") { 
		ev.target.appendChild(document.getElementById(data));
	}
}

////////////////////////////
// dropNegativeMedium(ev) //
////////////////////////////

// Function to drop negative medium

function dropNegativeMedium(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.dataTransfer.getData("text") == "friction-negative-medium") { 
		ev.target.appendChild(document.getElementById(data));
	}
}

///////////////////////////
// dropNegativeLarge(ev) //
///////////////////////////

// Function to drop negative large

function dropNegativeLarge(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.dataTransfer.getData("text") == "friction-negative-large") { 
		ev.target.appendChild(document.getElementById(data));
	}
}

/////////////////////////
// resetFriction(user) //
/////////////////////////

// Function to reset friction

function resetFriction(user) {
	document.getElementById("toolbar-friction-positive-large").append(document.getElementById("friction-positive-large"));
	document.getElementById("toolbar-friction-positive-medium").append(document.getElementById("friction-positive-medium"));
	document.getElementById("toolbar-friction-positive-small").append(document.getElementById("friction-positive-small"));
	document.getElementById("toolbar-friction-negative-small").append(document.getElementById("friction-negative-small"));
	document.getElementById("toolbar-friction-negative-medium").append(document.getElementById("friction-negative-medium"));
	document.getElementById("toolbar-friction-negative-large").append(document.getElementById("friction-negative-large"));
	// Reset the user's friction
	user.frictionpositivelarge = "";
	user.frictionpositivemedium = "";
	user.frictionpositivesmall = "";
	user.frictionnegativesmall = "";
	user.frictionnegativemedium = "";
	user.frictionnegativelarge = "";
}

/////////////////////////////
// dropPlaceAttachment(ev) //
/////////////////////////////

// Function to handle dropping events for question 8

function dropPlaceAttachment(ev, user) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	if (ev.target.id == "place-attachment-drop1") {
		ev.target.appendChild(document.getElementById(data));
		user.priority1 = data;
	} else if (ev.target.id == "place-attachment-drop2") {
		ev.target.appendChild(document.getElementById(data));
		user.priority2 = data;
	} else if (ev.target.id == "place-attachment-drop3") {
		ev.target.appendChild(document.getElementById(data));
		user.priority3 = data;
	} else if (ev.target.id == "place-attachment-drop4") {
		ev.target.appendChild(document.getElementById(data));
		user.priority4 = data;
	} else if (ev.target.id == "place-attachment-drop5") {
		ev.target.appendChild(document.getElementById(data));
		user.priority5 = data;
	}
}

////////////////////////////////
// resetPlaceAttachment(user) //
////////////////////////////////

// Function to reset question 8

function resetPlaceAttachment(user) {
	// Reset place identity
	document.getElementById("place-attachment-drag-item-wrapper").append(document.getElementById("place-attachment-drag-place-identity"));
	// Reset place dependency
	document.getElementById("place-attachment-drag-item-wrapper").append(document.getElementById("place-attachment-drag-place-dependency"));
	// Reset nature bonding
	document.getElementById("place-attachment-drag-item-wrapper").append(document.getElementById("place-attachment-drag-nature-bonding"));
	// Reset family bonding
	document.getElementById("place-attachment-drag-item-wrapper").append(document.getElementById("place-attachment-drag-family-bonding"));
	// Reset friend bonding
	document.getElementById("place-attachment-drag-item-wrapper").append(document.getElementById("place-attachment-drag-friend-bonding"));
	// Reset the user's priorities
	user.priority1 = "";
	user.priority2 = "";
	user.priority3 = "";
	user.priority4 = "";
	user.priority5 = "";
}

////////////////////////
// sliderValue(value) //
////////////////////////

// Function that handles what the slider-legend should show

function sliderValue(value) {
	if (value == 1) {
		document.getElementById("slider-legend").innerHTML = "Een plant in de vensterbank";
	} else if (value == 2) {
		document.getElementById("slider-legend").innerHTML = "De bomen in de straat";
	} else if (value == 3) {
		document.getElementById("slider-legend").innerHTML = "Een moestuin";
	} else if (value == 4) {
		document.getElementById("slider-legend").innerHTML = "De kinderboerderij of het stadspark";
	} else if (value == 5) {
		document.getElementById("slider-legend").innerHTML = "Een natuurgebied in Nederland";
	} else if (value == 6) {
		document.getElementById("slider-legend").innerHTML = "Een groot natuurgebied in het buitenland";
	} else if (value == 7) {
		document.getElementById("slider-legend").innerHTML = "Een onbewoond eiland";
	}
}

///////////////////
// resetSlider() //
///////////////////

// Function that resets the slider to it's minimum value

function resetSlider() {
	document.getElementById("slider").value = 1;
	document.getElementById("slider-legend").innerHTML = "Een plant in de vensterbank";
}
