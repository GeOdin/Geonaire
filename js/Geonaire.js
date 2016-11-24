/* Geonaire.js
 * JavaScript file voor de Geonaire
 * Gemaakt op 2016-11-24
 * Het laatst veranderd op 2016-11-24
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
 * * momenteel geen dingen die nog gedaan moeten worden
 * Geonaire.js
 * * momenteel geen dingen die nog gedaan moeten worden
 *
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * 
 *==========================================
 * Variabelen binnen deze JavaScript file: *
 *==========================================
 * 
 */

//////////////
// Algemeen //
//////////////

/*
 ============
 * Algemeen *
 ============
 * Zorg dat alles in het Nederlands is voor de doelgroep
 * Doelgroep: 18+ Nederlanders
 * U of jij voor de vragen? (Je is meer spreektaal en daardoor wss beter, toegankelijker)
 * Website online zetten
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
 * Back-end programming
 * * php
 * * * link met de server
 * * * * Ron vragen of ik gebruik kan maken van een server van de uniqueID
 * * GeoJSON
 * * eventueel voor elke questionnaire een back-up mail sturen naar alternatieve e-mail (geoJSON/ csv/ ?) (want sommige gratis databases hebben niet de garantie dat de data onbeperkt en onveranderd beschikbaar blijft)
 * Learning/ revising
 * * html
 * * css (resizable met screen, don't resize images, unless they're vectors!)
 * * JavaScript
 * * * jQuery
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
 * Entertainment
 * * cartoons/ comics per vraag
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
 * THEMA: USER INFO
 * 1. Wat is uw leeftijd? (moet een geheel getal, hoger dan 0 zijn)
 * 2. Wat is uw nationaliteit? (drop-down list) (vragenlijst en website in het Nederlands versterkt dat de gebruikers in elk geval Nederlands zouden moeten kunnen)
 * 3. Op welke postcode woont u? (inzoomen naar postcode gebied)
 * THEMA: GAMEN
 * 4. Hoeveel tijd speelt u over het algemeen computerspellen? (vul een getal in en kies de toepasbare tijdsaanduiding) (x uren per dag/week/maand/jaar)
 * 5. Wat voor spellen/games speelt u zoal? (zie IGN voor genres, geef voorbeelden en voeg de optie augmented reality games toe met de voorbeelden Pokémon Go en Ingress) ((zelf categoriën aandragen, evt zelfde categoriën als Vera/ categoriën van IGN) -> wel specificeren op games, zorgen dat er geen verwarring kan optreden met bordspellen ofzo!)
 * * augmented reality games (om eventueel te relateren aan mensen die naar buiten gaan en eerste opzet van concept)
 * * mobile games (ook als optie?)
 * THEMA: LOCATION
 * 6. Als u het over uw omgeving hebt, tot hoever reikt deze? (optie geven om met tools een cirkel (en eventueel ook een vierkant/ polygon) te tekenen (evt opslaan als GeoJSON))
 * 7. Stel de gemeente zou een windmolen (of eventueel opsplitsen tot 2 vragen, 1 voor positief en 1 voor negatieve verandering) willen plaatsen, tot hoe dichtbij uw huis zou u dit goed vinden? (eventueel een marker van een windmolen laten plaatsen, of weer een cirkel/vierkant/polygon laten maken (evt opslaan als GeoJSON))
 * * Literatuur zoeken over NIMBY (Redenen voor NIMBY zoeken, uitzicht verstoren,...)
 * * * waar begint frictie volgens de literatuur?
 * * * wat voor frictie?
 * * * onderscheid maken in positieve (bijvoorbeeld aanleg bos) of negatief (bijvoorbeeld groot parkeergarage/ groot grijs gebouw dat uitzicht blokkeert) invloed
 * * * voorbeeldvraag: stel de gemeente wil een verandering aanbrengen bij u/jou in de buurt. Teken een gebied rondom uw woning waarin u dit liever niet zou willen ((evt bijvoorbeeld omdat het uw uitzicht verstoord,...))
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
 * Eventueel een favicon toevoegen als icoontje voor de webpagina
 * * <link rel="shortcut icon" type="image/png" href="favicon.png" />
 */

////////////////////
// stylesheet.css //
////////////////////

///////////////////
// Geonaire.html //
///////////////////

/*
 * Een kleine introductie geven over hoe de vragenlijst ingevuld moet worden en een teaser om mensen op eventuele extra functies/features te wijzen.
 * Eventueel een favicon toevoegen als icoontje voor de webpagina
 * * <link rel="shortcut icon" type="image/png" href="favicon.png" />
 * Lay-out
 * #header
 * * cartoony poppetje dat steeds meer vrienden krijgt en onderdeel wordt van community
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

/////////////////
// Geonaire.js //
/////////////////