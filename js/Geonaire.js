/* Geonaire.js
 * JavaScript file voor de Geonaire
 * Gemaakt op 2016-11-24
 * Het laatst veranderd op 2016-12-05
 * door GeOdin
 *
 *===================================
 * Dingen die gedaan moeten worden: *
 *===================================
 * Algemeen
 * index.html
 * stylesheet.css
 * * momenteel geen dingen die nog gedaan moeten worden
 * Geonaire.html
 * Geonaire.css
 * Geonaire.js
 * * momenteel geen dingen die nog gedaan moeten worden
 * StartGeonaire.js
 * GeonaireQuestions.js
 *
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 *
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * main()
 */

//////////////
// Algemeen //
//////////////

/*
 ============
 * Algemeen *
 ============
 * Planning:
 * * 21-27 november: vragen verzinnen (literatuur als onderbouwing van vragen, net als met oorspronkelijke vragenlijst)
 * * * (v) site online -> geonaire.website.tk
 * * * * wel nog website linken aan nieuw e-mailadres speciaal voor deze website (geonaire2016@gmail.com)
 * * 28 november - 4 december: uitwerken, lay-out, programmeren, cartoons/comics tekenen (vector waar mogelijk -> Adobe Illustrator), website online zetten, link maken met database/server (vragen of er tekentablets zijn op de uni voor vector tekeningen? (Ron/Wim/Lars) en of er gebruik gemaakt kan worden van een server/database van de uni)
 * * * 4 december
 * * * * StartGeonaire.js -> drawMap()
 * * * * * pas de z-index aan voor de verscheidenen divs, zodat de goede boven de #map liggen
 * * * * * verander de width van #cartoonimage #questiontitle en #answer naar niet bestaand, dit zijn de enige divs van #content die een z-index hoger dan #map moeten hebben
 * * * * * use zipcode from questions and CSV-file -> http://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript
 * * * * GeonaireUser.js -> user Object
 * * * * (v) #cartoonimage -> write down cartoons as placeholders
 * * * * laat ook zien of de footer-buttons actief zijn met een .active
 * * * Algemeen:
 * * * * de cartoons invoeren (mogelijk worden deze tijdelijk weergegeven als woordgrappen als placeholders voor de cartoons) (zie code in StartGeonaire functie show...(questions) achter $("#cartoonimage").html(.. voor de code voor de plaatjes)
 * * * * * verander het in de functies showQuestion(...) en toggleQuestions(...)
 * * * * ingevoerde data opslaan tijdens het invoeren van de vragenlijst
 * * * * link met de server
 * * * * improve color -> https://material.google.com/style/color.html#color-color-palette (indigo)
 * * * * verander de font-sizes naar % in plaats van em(?)
 * * * Introductie:
 * * * * hier komt een kleine introductie over de vragenlijst
 * * * Vraag 2:
 * * * * uitgebreidere lijst van nationaliteiten
 * * * Vraag 6/7
 * * * * dit zijn momenteel nog placeholder vragen
 * * * * toolbar functioneel maken
 * * * Laatste vraag
 * * * * het versturen van de data naar de server in plaats van het vernieuwen van de pagina
 * * * * add new #content upon completing the questionnaire; versturen heeft momenteel tot gevolg dat je naar het beginscherm gaat
 * var dropdownNationalities en var checkboxesGamecategories eventueel nog invoegen als argument voor de verschillende functies
 * Zorg dat alles in het Nederlands is voor de doelgroep
 * Doelgroep: 18+ Nederlanders
 * U of jij voor de vragen? (Je is meer spreektaal en daardoor wss beter, toegankelijker)
 * Drafts maken van mogelijke visualisaties
 * Link maken met database
 * Na afloop vragen of de vragenlijst naar waarheid is ingevuld (omdat je eventueel mogelijk andere visuals krijgt door het anders invullen van de vragenlijst, en omdat dit de aanname sterker maakt dat mensen de vragenlijst naar waarheid ingevuld hebben)
 * * Database van de universiteit gebruiken (vraag Ron) of eventueel een gratis online database gebruiken (met de kans dat de data op een gegeven moment niet bruikbaar meer is), eventueel in combinatie met een mail sturen naar een te maken emailadres
 * Haal de informatie die ik bedacht heb uit m'n mail en stop het georganiseerd hier
 * * Zet (M) (S) (C) (W) voor de dingen die ik bedacht heb, conform met het MoSCoW-schema (M van must/ S van should/ C van would/ W van Would)
 * keywords: gaming, perception, NIMBY
 * Gebruik dingen van Software Engineering voor het programmeren
 * * user story
 * * user experience
 * * use cases
 * Front-end programming
 * * HTML5
 * * CSS3
 * * * Click through divs -> http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
 * * * resize: both; -> http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_resize // does not work on Internet Explorer, though
 * * * Other default font?
 * * * * set other default when certain font is unavailable on some browsers/ computers
 * * * Add scrollbars to divs?
 * * JavaScript
 * * * user as object
 * * * * antwoorden op de vragen als aparte properties (niet verder specificeren naar thema)
 * Back-end programming
 * * php
 * * * link met de server
 * * * * Ron vragen of ik gebruik kan maken van een server van de uniqueID
 * * * * optioneel: https://db4free.net/ voor gratis database
 * * GeoJSON
 * * * store JSON in SQL-database
 * * eventueel voor elke questionnaire een back-up mail sturen naar alternatieve e-mail (geoJSON/ csv/ ?) (want sommige gratis databases hebben niet de garantie dat de data onbeperkt en onveranderd beschikbaar blijft)
 * * * PHP om dit te doen: http://www.buildwebsite4u.com/advanced/php.shtml
 * Learning/ revising
 * * html
 * * * <span>
 * * * <header>
 * * * <footer>
 * * * form tag -> 
 * * * * Use the reset() method to reset the form. http://www.w3schools.com/jsref/met_form_submit.asp
 * * css (resizable met screen, don't resize images, unless they're vectors!)
 * * * selectors -> http://www.w3schools.com/cssref/css_selectors.asp
 * * * input invalid -> http://www.w3schools.com/cssref/css_selectors.asp
 * * JavaScript
 * * * gebruik data van HTML-form input als JavaScript variable -> http://stackoverflow.com/questions/23982774/turn-html-form-input-into-javascript-variable
 * * * change the id of a div -> http://stackoverflow.com/questions/16584121/change-div-id-by-javascript
 * * * jQuery
 * * * * $(document).ready(function() {});
 * * * * $('div').mouseenter(function() {});
 * * * * $('div').mouseleave(function() {});
 * * * * $('div').mouseclick(function() {});
 * * * * $(this).animate({height: '+=10px'});
 * * * * $("div").fadeOut(1000);
 * * * * $('div').slideDown('slow');
 * * * * $(this).toggle(1000);
 * * * * $(this).fadeOut(1000);
 * * * Google Maps API
 * * * * tools voor op de kaart area tekenen (circle/square/polygon) (editable: true; draggable: true)
 * * php (link met database)
 * * * info uit database halen
 * * alternatieve website voor mensen die hem op hun telefoon (willen) maken?/ link naar mobiele versie?
 ================
 * Achievements *
 ================
 * Mogelijkheid om achievements te verdienen
 * Progress counter maken om de speler te laten zien hoeveel van de hoeveel achievements hij heeft?
 * Mogelijke achievements:
 * * De doorzetter/ wachter (met een timer tellen hoelang een speler over de vragenlijst doet en na een bepaalde tijd deze achievement geven)
 * * Enjoying the season (snow animation met * van Androgyne font -> https://codepen.io/NickyCDK/pen/AIonk)
 * * * Te behalen door met Sinterklaas vallende pepernoten te klikken en met kerst vallende sneeuwvlokken
 * * * defaults -> lente: kersenbloesem(/vlinders?), zomer: zonnetjes/zonnestralen/ijsjes(https://dribbble.com/shots/2852830-Summer-Icon), herfst: vallende bladeren, winter: sneeuwvlokken
 ===========
 * Buttons *
 ===========
 * Knoppen om verschillende functies/ features te toggelen
 * Vraagteken onderin beeld
 * * Eventueel daarin nog een keer uitleg over de vragenlijst
 * * Gekoppeld met woordenboekfunctie?
 ============
 * Features *
 ============
 * Achievements (zie achievements kopje)
 * Entertainment
 * * cartoons/ comics per vraag
 * * * elke vraag een stripje met een vraag die in de volgende vraag beantwoord wordt?
 * * * of elke vraag een nieuw stripje/cartoon
 * * referentie naar fantasy/ andere spelletjes/ subcultuur (idee van Wytze)
 * * staat boven de vraag, binnen #body
 * Easter eggs
 * * vullen het beeld steeds meer naarmate de vragenlijst verder ingevuld wordt?
 * * spelletjes/ puzzels per vraag (bijvoorbeeld coockieclicker achtig spelletje)
 * * speler krijgt een toepasselijke token en achievement voor elke opgeloste puzzel/ spel
 * * (user info) doodle poppetje wat steeds meer gedefinieerd wordt, bijvoorbeeld door leeftijd nationaliteit (let erop dat dit niet rascistisch wordt!) en postcode (groen/ gebouwen als achtergrond)
 * * (gaming) user die steeds meer een superheld wordt
 * * coockieclicker schatkist die steeds voller wordt naarmate je erop klikt
 * * (place attachment) poppetje wat steeds meer vrienden krijgt en onderdeel wordt van community
 * * color scheme afhankelijk van ingevulde vragen?
 * Level Up!
 * * evt level up na elk thema/ elke vraag
 * Woordenboek
 * * Eventueel extra informatie geven door op bepaalde dingen te klikken  (door op bepaalde woorden te klikken/hoveren laag erover met beschrijving -> hogere z-index)
 * * walkthrough (evt extra informatie over hoe de vragen te beantwoorden)
 * Possibilities
 * *  $('div').mouseenter(function() {});
 * *  $('div').mouseleave(function() {});
 * *  $('div').mouseclick(function() {});
 * * mouseHoover
 * * * Tekstballonnetjes
 * * * * https://www.sitepoint.com/pure-css3-speech-bubbles/
 * * * * div?
 * * * * vectorplaatjes met Adobe Illustrator?
 * * mouceClick
 * * * coockieclicker
 ============
 * Functies *
 ============
 * zipcodeZoom(zipcode): inzoomen naar postcode na het invullen van de postcode
 * * latitude en longitude in gevonden CSV-file
 * * * is dit het midden van de postcode?
 * * * gestandaardiseerd zoomLevel maken (bijvoorbeeld 14, zou mensen genoeg een idee moeten geven over waar ze zitten)?
 * * * andere optie zou zijn om de box van de postcodes te achterhalen
 * * * * evt via databank van ArcGIS
 ===========
 * Markers *
 ===========
 ==========
 * Player *
 ==========
 * Titel - mogelijkheid dat de speler een titel krijg conform de dingen die hij gedaan heeft
 =============                                                                                                                                                                                                   
 =============
 * Nog een keer goed nadenken of de vragen goed gesteld zijn en niet op meerdere manieren interpretabel
 * THEMA: USER INFO
 * 1. Wat is uw leeftijd? (moet een geheel getal, hoger dan 0 zijn)
 * * Cartoon: (1) verjaardag van jongen die laat merken dat hij bang is voor katten (2) onschuldig meisje met pakje in haar handen (3) kat steekt hoofd uit het pakje met lieve kraaloogjes (4) jongen springt als kat in de gordijnen
 * 2. Wat is uw nationaliteit? (drop-down list) (vragenlijst en website in het Nederlands versterkt dat de gebruikers in elk geval Nederlands zouden moeten kunnen)
 * 3. Wat zijn de 4 cijfers van uw postcode? (check of het inderdaad 4 cijfers zijn en een code vergelijkbaar met een van de postcodes) (inzoomen naar postcode gebied)
 * THEMA: GAMEN
 * 4. Wat voor spellen/games speelt u zoal? (zie IGN voor genres, geef voorbeelden en voeg de optie augmented reality games toe met de voorbeelden Pokémon Go en Ingress) ((zelf categoriën aandragen, evt zelfde categoriën als Vera/ categoriën van IGN; zijn de categoriën van IGN vertaalbaar naar de thesis van Vera?) -> wel specificeren op games, zorgen dat er geen verwarring kan optreden met bordspellen ofzo!)
 * * Cartoon: iemand die achter de computer spelletjes zit te spelen en in gedachten een superheld is en de wereld redt
 * * augmented reality games (om eventueel te relateren aan mensen die naar buiten gaan en eerste opzet van concept)
 * * mobile games (ook als optie?)
 * * Wikipedia gebruikt als bron voor game categorien -> https://en.wikipedia.org/wiki/List_of_video_game_genres (IGN had geen overzichtelijke game categorien)
 * 5. Hoeveel tijd speelt u over het algemeen computerspellen? (vul een getal in en kies de toepasbare tijdsaanduiding) (x uren per dag/week/maand/jaar)
 * * Cartoon: grapje maken over player (zowel iemand die computergames speelt als iemand die vrouwen bespeeld)
 * THEMA: LOCATION
 * switchen naar #header van #header2 en van #footer vaan #footer2
 * 6. Als u het over uw omgeving hebt, tot hoever reikt deze? (optie geven om met tools een cirkel (en eventueel ook een vierkant/ polygon) te tekenen (evt opslaan als GeoJSON))
 * 7. Stel de gemeente zou een windmolen (of eventueel opsplitsen tot 2 vragen, 1 voor positief en 1 voor negatieve verandering) willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden? (eventueel een marker van een windmolen laten plaatsen, of weer een cirkel/vierkant/polygon laten maken (evt opslaan als GeoJSON))
 * * Literatuur zoeken over NIMBY (Redenen voor NIMBY zoeken, uitzicht verstoren,...)
 * * * waar begint frictie volgens de literatuur?
 * * * wat voor frictie?
 * * * onderscheid maken in positieve (bijvoorbeeld aanleg bos) of negatief (bijvoorbeeld groot parkeergarage/ groot grijs gebouw dat uitzicht blokkeert) invloed
 * * * voorbeeldvraag: stel de gemeente wil een verandering aanbrengen bij u/jou in de buurt. Teken een gebied rondom uw woning waarin u dit liever niet zou willen ((evt bijvoorbeeld omdat het uw uitzicht verstoord,...))
 * Verzenden van data van vragenlijst
 * * Bij het verzenden van de data van de vragenlijst ook de datum en tijd meezenden als extra property
 * * Eventueel kopie versturen naar extra emailadres als back-up gebruiken bij het gebruik van een gratis online server (omdat die minder betrouwbaar zijn)
 ==========
 * Tokens *
 ==========
 * Speler krijgt een token voor elke beantwoorde vraag
 * Tokens zijn zichtbaar in #player
 */

////////////////
// index.html //
////////////////

/*
 * Een kleine introductie geven over het hoe en wat van de vragenlijst (wat ik bovenaan de vragenlijst zou zetten als ik hem op zou sturen)
 * Maak classes voor #cartoon #question en #answer
 */

////////////////////
// stylesheet.css //
////////////////////

///////////////////
// Geonaire.html //
///////////////////

/*
 * Een kleine introductie geven over hoe de vragenlijst ingevuld moet worden en een teaser om mensen op eventuele extra functies/features te wijzen.
 * Lay-out
 * * menu bar http://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black
 * #header
 * * cartoony poppetje dat steeds meer vrienden krijgt en onderdeel wordt van community
 * * evt veranderen aan de hand van het thema (steeds beter gedefineerd personage/ steeds meer superheld - van persoon die computerspel speelt en denkt een held te worden naar een held zijn/ steeds meer onderdeel van community)
 * * elke x seconden / minuten (of random) een plaatje door de header laten gaan
 * * * bijvoorbeeld een hond bij place attachment of een afgeronde div als tekstballon met daarin "Woof!"
 * #body
 * * #left
 * * * thema's voor vragen met horizontale progress bar (eventueel zelf maken met divs, dan evt ook verschillende kleuren voor verschillende thema's); bijvoorbeeld character creation (algemene vragen begin) dan evt ook een cartoony plaatje van de participant, experience (gaming experience) evt cartoony plaatje van iemand die achter de computer zit met gedachtenwolkje dat hij een superheld is), exploring/discovering (place attachment) hiervoor zou ook het plaatje gebruikt kunnen worden waarbij een poppetje langzaam meer vrienden krijgt een meer community wordt of eventueel een schatkist die zichzelf steeds meer vult
 * * #right
 * * * googleMaps/ eigen achtergrond
 * * * #question(/title/ top)
 * * * * hier staat de vraag
 * * * #questionInfo(/middle)
 * * * #userInput(/bottom)
 * * * * mogelijke tekstboxen
 * * * #tools
 * * * * eventueel aan de rechterkant van #right wanneer er vragen zijn met tools, bijvoorbeeld het tekenen van een area (geeft de user de mogelijkheid om te kiezen tussen circle/square/custom polygon)
 * #footer
 * * links naar mogelijke credits
 * * contactinformatie
 * * mogelijk vraagteken
 * * * uitleg vragenlijst
 * * * mogelijk woordenboek met uitleg over mogeljk moeilijke termen
 */

//////////////////
// Geonaire.css //
//////////////////

/*
 * Coloring
 * * for with Google(Maps) -> https://material.google.com/style/color.html#color-color-palette
 * * Color harmonies (in general) -> http://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm
 * * website of MGI student who helped me -> http://greatemerald.eu/uncodex-sources/
 * vertically styling elements -> https://www.w3.org/Style/Examples/007/center.en.html#block
 */

/////////////////
// Geonaire.js //
/////////////////

//////////////////////
// StartGeonaire.js //
//////////////////////

/*
 * Om de start van de Geonaire te regelen
 * Voor onder andere het maken van het user object
 * * user object
 * * * user.age
 * * * * check of het een nummer is (heel nummer, integer not float)
 * * * * check of het meer is dan 0
 * * * * anders opnieuw invoeren (while-loop)
 * * * user.nationality
 * * * * Drop-down list voor nationaliteit met Nederlands bovenaan, rest op alfabetische volgorde in het Nederlands (ergens een nationaliteitenlijst vandaan halen. In het rapport hiernaar refereren, want nationaliteiten kunnen in veranderen.) (drop-down list, want dat scheelt niet te hoeven programmeren wat er allemaal mis kan gaan.)
 * * * user.zipcode
 * * * * while loop (1e 4 characters moeten cijfers zijn, ook duidelijk maken in de vraag!)
 * * * user.gametime
 * * * user.gameCategories
 * * * * array met categoriën en 1/0 voor wel/niet(?)
 * * * user.personal(?)area
 * * * * geojson(?) mogelijk als onderdeel van object? anders omzetten naar string!
 * * * user.friction(?)area
 * * * * geojson(?) mogelijk als onderdeel van object? anders omzetten naar string!
 */

//////////////////////////
// GeonaireQuestions.js //
//////////////////////////

/*
 * change alt of #cartoonimage into link to deviantart with cartoon
 */

$(document).ready(function(){
	main();
});

////////////
// main() //
////////////

// Function for regulating the JavaScript

function main() {
	startGeonaire();
}
