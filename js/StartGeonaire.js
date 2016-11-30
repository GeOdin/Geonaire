/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
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
 * startGeonaire()
 * toggleButtons()
 * toggleWindows()
 */

/////////////////////
// startGeonaire() //
/////////////////////

// Function for starting the Geonaire

function startGeonaire() {
	// Set the starting variables
	var currentQuestion = 1;
	
	// Make some windows toggable with buttons or by clicking on them
	toggleButtons();
	toggleWindows();
	nextQuestion(currentQuestion);
}

/////////////////////
// toggleButtons() //
/////////////////////

// Function for toggling menus with the footer buttons

function toggleButtons() {
	$("#button-overview").click(function() {
        $("#overview").toggle();
    });
   
    $("#button-cartoon").click(function() {
        $("#cartoon").toggle();
    });
   
    $("#button-toolbar").click(function() {
        $("#toolbar").toggle();
    });
}

/////////////////////
// toggleWindows() //
/////////////////////

// Function for toggling the windows themselves

function toggleWindows() {
	$("#tableofcontents-title").click(function() {
        $("#overview").toggle();
    });
   
    $("#cartoon").click(function() {
        $("#cartoon").toggle();
    });
   
    $("#toolbar").click(function() {
        $("#toolbar").toggle();
    });
}
