/* Geonaire.js
 * JavaScript file voor de Geonaire
 * Gemaakt op 2016-11-24
 * Het laatst veranderd op 2016-12-23
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
 * * * 8 december
 * * * * StartGeonaire.js -> drawMap()
(v) * * * * * sla antwoord van vragen op als user properties
(v) * * * * * onthoud de vragen en toon deze als de user de vraag toggled (teruggaat naar de vraag)
(v) * * * * achtergrond als kaart, net als bij TopoPets
(v) * * * * * #map binnen #main
(v) * * * * * * #map binnen #question-answer(?)
(v)!!! * * * * * height #question-answer aanpassen per vraag, bijvoorbeeeld helemaal voor introductie (anders misschien niet hele intro zichtbaar), maar zo klein mogelijk voor de vragen met de kaart
(v) * * * * * kaart weghalen bij de vragen waar hij niet nodig is?
(v) * * * * * andere divs op zelfde z-index als #map, met position: relative;
(v) * * * * * * z-index lijstje veranderen van bovenkant css-file (kan eventueel weg als de map werkt)
(v) * * * * * toolbar -> https://developers.google.com/maps/documentation/javascript/examples/drawing-tools
(M) * * * * * #toolbar-createmarker -> display: none; voor vraag 6 (of weghalen als het voor geen enkele vraag gebruikt wordt)
(v) * * * * * #toolbar -> remove an overlay -> https://developers.google.com/maps/documentation/javascript/examples/overlay-remove
(v) * * * * * #toolbar -> show/hide an overlay -> https://developers.google.com/maps/documentation/javascript/examples/overlay-hideshow
(S) * * * * * reset/resize the map after toggling #header, #overview and #toolbar -> http://stackoverflow.com/questions/743214/how-do-i-resize-a-google-map-with-javascript-after-it-has-loaded
(M) * * * * * laat uitleg zien als je over bepaalde #divs hoovert (bijvoorbeeld Pokemon Go bij virtual reality games)
(v) * * * * * #div title="uitleg" -> title attribute kan ook bij andere HTML-elementen -> http://www.w3schools.com/TAgs/att_global_title.asp
(v) * * * * * * evt in combinatie met underline
(W) * * * * * * niet <abbr>-tag om te laten zien waar extra uitleg bij is -> vb <abbr title="World Health Organization">WHO</abbr>; want kan de verkeerde informatie geven aan browsers, omdat het niet om afkortingen gaat
(W) * * * * * * fancy tooltips -> http://www.designer-daily.com/jquery-prototype-mootool-tooltips-12632
(v) * * * * * question 6 -> zorgen dat de user.livingenvironment op de goede plek getoond wordt
(v) * * * * * #toolbar -> als er een user.livingenvironment is, wordt hij getoond, maar wordt de active button van de toolbar niet als actief getoond
(v) * * * * #tableofcontents-question6 -> als je er meerdere keren op drukt, terwijl vraag 6 al getoond wordt, komen er meerdere cirkels/rechthoeken op de kaart die je niet weg kan halen; eventueel weg te halen met nieuwe property user.currentquestion en dan bij toggleQuestions 'user.currentquestion != 6'
(S) * * * * * #easterEgg op de plek van #toolbar voor niet kaart gerelateerde vragen
(S) * * * * * * (1) You found me (muzieknoot, referentie naar zanger van het lied). Drop de beat. (letterlijk met drag en drop)
(S) * * * * * * (4) vraag over gamecategori"en -> verticale progress bar met eventueel tekst kwartslag gedraaid met titel naar aanleiding van ingevulde vragenlijst (van casual gamer tot die-hard gamer)
(M)/(S) * * * * * #div over #map met wacht even tot Google Maps geladen is (voordat mensen denken dat hij het niet doet) (load screen);
(M) * * * * * #map tekst als google maps het niet doet/ niet geladen wordt/ kan worden
(S) * * * * * #map -> betere resize -> google.maps.event.trigger(map, 'resize'); http://stackoverflow.com/questions/4700594/google-maps-displaynone-problem
(S) * * * * * * betere reload -> http://stackoverflow.com/questions/17264989/how-to-manually-reload-google-map-with-javascript
(M) * * * * * * als gebruikers wisselen tussen vragen voordat de Google Map (#map) geladen is, wordt hij niet meer getoond
(S) * * * * * * #toolbar-createpolygon -> https://developers.google.com/maps/documentation/javascript/examples/polygon-arrays#try-it-yourself
(S) * * * * * * alternative -> make #header, #overview, #toolbar no longer toggable
(v) * * * * * placeholder="" bij <form> <input type="text" ...> voor lichte placeholder -> http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_placeholder
(S) * * * * * fancy lay-out op thema, kleuren van de regenboog -> color styles van google -> https://material.io/guidelines/style/color.html#color-color-palette
(M) * * * * * * color styles for google -> https://material.io/guidelines/style/color.html#color-color-palette
(M) * * * * * * switch/case for coloring #header (, possibly #question-answer) and #footer -> https://www.codecademy.com/courses/web-beginner-en-jZv2E/0/4?curriculum_id=5124ef4c78d510dd89003eb8
(S) * * * * * * red -> Introductie
(S) * * * * * * orange -> Algemene informatie (vraag 1 - 3)
(S) * * * * * * yellow -> Games (vraag 4 - 5)
(S) * * * * * * green -> Leefomgeving + frictie (vraag 6 - 7)
(S) * * * * * * blue -> Place attachment (vraag 8)
(S) * * * * * * indigo -> Participatie (vraag 9)
(S) * * * * * * deep purple -> Einde
(M) * * * * link met server -> http://stackoverflow.com/questions/8591488/google-maps-api-v3-how-to-set-zoom-level-and-map-center-to-user-submitted-locat
(M) * * * * landenlijst
(M) * * * * * https://ind.nl/Paginas/Landenlijst-behoud-nationaliteit.aspx
(M) * * * * * https://nl.speaklanguages.com/engels/woordenschat/landen-en-nationaliteiten
(M) * * * * maak een dankjewel content voor #header #overview #question #answer #toolbar?
(M) * * * * * Bedankt voor het invullen van de vragenlijst! (spelletje na afloop/ easter egg/ coockie clicker)
(C) * * * * Responsive design
(C) * * * * * http://www.w3schools.com/html/html_responsive.asp
(v) * * * * reset the variables upon refreshing the page -> geen probleem op online website, want new createUser()
(W) * * * * evt. divs editable maken, zodat gebruikers zelf de lengte en breedte aan kunnen passen, editable: true; draggable: true; resize
(W) * * * * * editable -> http://html5doctor.com/the-contenteditable-attribute/
(W) * * * * * resize -> http://www.w3schools.com/cssref/css3_pr_resize.asp
(M) * * * * * drag & drop -> http://www.jeasyui.com/tutorial/dd/dnd2.php
(M) * * * * * * drag & drop -> http://www.w3schools.com/html/html5_draganddrop.asp
(W) * * * * * * draggable -> http://www.w3schools.com/TagS/tryit.asp?filename=tryhtml5_global_draggable
(n.v.t.) * * * * * verander de width van #cartoonimage #question-title en #answer naar niet bestaand, dit zijn de enige divs van #content die een z-index hoger dan #map moeten hebben
(M) * * * * * use zipcode from questions and CSV-file
(M) * * * * * * http://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript
(M) * * * * * * https://tools.ietf.org/html/rfc4180
(M) * * * * * * http://evanplaice.github.io/jquery-csv/examples/basic-usage.html
(v) * * * * #cartoonimage -> write down cartoons as placeholders
(niet meer van toepassing) * * * * als je bij vraag 6 cartoon(#header) 2xtoggled, wordt hij bij het verschijnen van #header niet meer onder #header geplaatst
(M) * * * * (vraag 8) circle text -> https://css-tricks.com/set-text-on-a-circle/
(M) * * * * (vraag 9) slide bar -> http://www.cssportal.com/style-input-range/
(C) * * * * randomly move item inside div -> http://stackoverflow.com/questions/24160035/move-randomly-item-inside-div
(W) * * * * button role -> https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
(M) * * * * vraag ingevuld -> button tekst met <u> en title als positief (bijv bij vraag 3 -> "Wat een leuke buurt!")
(M)!!! * ** * map no longer knows user.livingenvironment upon toggling between 3 & 6
(M)!!! * lay-out ook laten testen door mensen om je heen!
(M) * * * * vragen goed laten testen door mensen om je heen!
(M) * * * * positieve feedback na het beantwoorden van elke vraag, evt. random/ naar aanleiding van antwoord
(M) * * * * * button.innerhtml() laat onderstaande tekst zien na erop drukken, paar seconde later/ na erop klikken verschijnt de volgende vraag
(M) * * * * * (1) Wat een mooie leeftijd!/ Wat een wijsheid!
(M) * * * * * (2) Wat een mooi land!
(M) * * * * * (3) Wat een mooie buurt!
(M) * * * * * (4) 
(M)!!! * * * * Vraag 6 -> uitleg over leefomgeving!
 * * * * improve the user experience
 * * * * * http://www.websitemagazine.com/content/blogs/posts/archive/2014/02/06/3-tips-to-make-your-website-more-user-friendly.aspx
 * * * * * https://www.helpscout.net/blog/website-customers-love/
 * * * * * https://blog.hubspot.com/marketing/improve-your-websites-user-experience#sm.0001jd8l306mrdr511t77sgg0bh3f
 * * * * laat ook zien of de footer-buttons actief zijn met een .active
 * * * * Debugging in Sublime -> https://www.sitepoint.com/debugging-xdebug-sublime-text-3/
 * * * * Crop a div -> https://www.google.nl/search?q=crop+a+div&ie=utf-8&oe=utf-8&client=firefox-b-ab&gfe_rd=cr&ei=VTpEWNvpLY_H8AeDlbXYDA
 * * * Algemeen:
 * * * * de cartoons invoeren (mogelijk worden deze tijdelijk weergegeven als woordgrappen als placeholders voor de cartoons) (zie code in StartGeonaire functie show...(questions) achter $("#cartoonimage").html(.. voor de code voor de plaatjes)
 * * * * * verander het in de functies showQuestion(...) en toggleQuestions(...)
 * * * * ingevoerde data opslaan tijdens het invoeren van de vragenlijst
 * * * * link met de server
 * * * * improve color -> https://material.google.com/style/color.html#color-color-palette (indigo)
 * * * * verander de font-sizes naar % in plaats van em(?)
 * * * * improve speed of website
 * * * * * https://betterexplained.com/articles/speed-up-your-javascript-load-time/
 * * * * * https://blog.hubspot.com/marketing/how-to-reduce-your-websites-page-speed#sm.0001jd8l306mrdr511t77sgg0bh3f
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
 * * * event attributes -> http://www.w3schools.com/tags/ref_eventattributes.asp
 * * * * events -> http://www.w3schools.com/jsref/tryit.asp?filename=try_dom_event_target
 * * * <a> tag download -> http://www.w3schools.com/tags/att_a_download.asp
 * * * data attribute -> http://www.w3schools.com/tags/att_global_data.asp
 * * * * data attribute demo -> http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data
 * * CSS3
 * * * Click through divs -> http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements
 * * * resize: both; -> http://www.w3schools.com/cssref/tryit.asp?filename=trycss3_resize // does not work on Internet Explorer, though
 * * * Other default font?
 * * * * set other default when certain font is unavailable on some browsers/ computers
 * * * Add scrollbars to divs?
 * * * align vertically -> https://www.w3.org/Style/Examples/007/center.en.html#block
 * * JavaScript
 * * * jQuery -> http://learn.jquery.com/
 * * * GeoLocation -> http://www.w3schools.com/html/html5_geolocation.asp
 * Back-end programming
 * * php
 * * * link met de server
 * * * * save data from forms into MySQL-database -> http://www.howtoplaza.com/store-form-data-to-mysql https://developers.google.com/maps/documentation/javascript/mysql-to-maps
 * * * * * http://www.w3schools.com/php/showphp.asp?filename=demo_include1
 * * * * * http://www.w3schools.com/php/php_forms.asp
 * * * * * http://www.w3schools.com/php/showphp.asp?filename=demo_form_post
 * * * * Ron vragen of ik gebruik kan maken van een server van de uniqueID
 * * * * optioneel: https://db4free.net/ voor gratis database
 * * Mysql
(M) * * * http://dev.mysql.com/doc/refman/5.7/en/char.html
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
 * * * base url -> http://www.w3schools.com/html/tryit.asp?filename=tryhtml_head_base
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
 * * image near mouse -> http://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer http://jsfiddle.net/BfLAh/1/
 * * dragscroll -> http://qnimate.com/javascript-scroll-by-dragging/
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
 * Questions *
 =============
 * Nog een keer goed nadenken of de vragen goed gesteld zijn en niet op meerdere manieren interpretabel
 * THEMA: INTRODUCTIE
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
 * THEMA: LEEFOMGEVING en FRICTIE
 * switchen naar #header van #header2 en van #footer vaan #footer2
 * 6. Als u het over uw omgeving hebt, tot hoever reikt deze? (optie geven om met tools een cirkel (en eventueel ook een vierkant/ polygon) te tekenen (evt opslaan als GeoJSON))
 * 7. Stel de gemeente zou een windmolen (of eventueel opsplitsen tot 2 vragen, 1 voor positief en 1 voor negatieve verandering) willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden? (eventueel een marker van een windmolen laten plaatsen, of weer een cirkel/vierkant/polygon laten maken (evt opslaan als GeoJSON))
 * * Literatuur zoeken over NIMBY (Redenen voor NIMBY zoeken, uitzicht verstoren,...)
 * * * waar begint frictie volgens de literatuur?
 * * * wat voor frictie?
 * * * onderscheid maken in positieve (bijvoorbeeld aanleg bos) of negatief (bijvoorbeeld groot parkeergarage/ groot grijs gebouw dat uitzicht blokkeert) invloed
 * * * voorbeeldvraag: stel de gemeente wil een verandering aanbrengen bij u/jou in de buurt. Teken een gebied rondom uw woning waarin u dit liever niet zou willen ((evt bijvoorbeeld omdat het uw uitzicht verstoord,...))
 * THEMA: PLACE ATTACHMENT
 * 8b. Place Attachment (radio buttons) -> https://css-tricks.com/set-text-on-a-circle/ monospace fonts -> http://www.w3schools.com/cssref/css_websafe_fonts.asp
 * Nature bonding
 * * Wat betekent natuur voor jou? (scalebar - plantje in de vensterbank -> vrije natuur zoals bijvoorbeeld een onbewoond eiland)
 * * In hoeverre/welke mate ben je gehecht aan de natuur bij jou in de buurt?
 * Place Identity
 * * In hoeverre is je identiteit afhankelijk van waar je woont?
 * Place dependency
 * * In hoeverre ben je afhankelijk van je woonplaats/omgeving wegens de mogelijkheden die deze biedt?
 * Familily bonding
 * * Ik woon hier, omdat mijn famlie hier ook woont./Woont u waar u woont, omdat uw familie daar ook woont?
 * Friend bonding
 * * Vriendschappen opgebouwd door activiteiten in mijn leefomgeving/buurt/wijk/? zijn belangrijk voor mij./Woont u waar u woont, omdat uw vrienden daar ook wonen?
 * 8a. Prioritiseer de aspecten van place attachment (drag & drop)/evt 1t/m5 neerzetten ervoor (maxlength = 1)
 * 9. Wat verstaat u onder natuur?
 * * scalebar -> input type="range" http://webtutsdepot.com/2010/04/24/html-5-slider-input-tutorial/
 * * * styling of slide bar -> http://www.cssportal.com/style-input-range/
 * THEMA: PARTICIPATIE
 * 10. Heeft u weleens deelgenomen aan <u title="">burgerparticipatie...</u>
 * * Ja -> Hoevaak en wat voor soort komt tevoorschijn -> append(...) / .html(...)
 * Verzenden van data van vragenlijst
 * * Bij het verzenden van de data van de vragenlijst ook de datum en tijd meezenden als extra property
 * * Eventueel kopie versturen naar extra emailadres als back-up gebruiken bij het gebruik van een gratis online server (omdat die minder betrouwbaar zijn)
 * THEMA: EINDE
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
 * <head>-tag
 * * goede volgorde van meta, link en script -> https://www.w3.org/wiki/The_HTML_head_element#Stop_right_there.21_Inline_CSS_and_JavaScript_is_not_too_clever.21
 */

//////////////////
// Geonaire.css //
//////////////////

/*
 * Coloring
 * * for with Google(Maps) -> https://material.google.com/style/color.html#color-color-palette
 * * Color harmonies (in general) -> http://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm
 * * website of MGI student (Darius) who helped me -> http://greatemerald.eu/uncodex-sources/
 * vertically styling elements -> https://www.w3.org/Style/Examples/007/center.en.html#block
 * Wrapper class -> http://stackoverflow.com/questions/889160/what-is-a-wrapper-class
 * Buttons
 * * http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_buttons_animate3
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
	// Create the user object
	user = new createUser();

	// Start the Geonaire
	startGeonaire();
}
