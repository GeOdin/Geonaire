/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-11-29
 * door GeOdin
 *
 *========================================
 * Functies binnen deze JavaScript file: *
 *========================================
 * toggleButtons()
 * toggleWindows()
 */

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
	$("#overview").click(function() {
        $("#overview").toggle();
    });
   
    $("#cartoon").click(function() {
        $("#cartoon").toggle();
    });
   
    $("#toolbar").click(function() {
        $("#toolbar").toggle();
    });
}
 
 