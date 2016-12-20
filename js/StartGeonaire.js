/* Geonaire.js
 * JavaScript file om de pagina en de kaart te initialiseren voor de Geonaire
 * Gemaakt op 2016-11-27
 * Het laatst veranderd op 2016-12-11
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
 * drawMap(user)
 * createCircle(user)
 * createRectangle(user)
 * createPolygon(user)
 * clearMap(user)
 * toggleButtons()
 * toggleQuestions(questions, lastQuestion, user)
 */

/////////////////////
// startGeonaire() //
/////////////////////

// Function for starting the Geonaire

function startGeonaire() {
	// Set the starting variables
/*
	// Set the currentQuestion to 1
	var currentQuestion = 1;
 */
	
	// Make some windows toggable with buttons or by clicking on them
	toggleButtons();
	toggleQuestions(questions, lastQuestion, user);
	showIntroduction(questions, user);
	createCircle(user);
	createRectangle(user);
	createPolygon(user);
	clearMap(user);

	// Return the user object
	return user;
}

///////////////////
// drawMap(user) //
///////////////////

// Function to draw the map

function drawMap(user) {
	// Set the variables
	var zoomLevel = 15;
	var lat = user.zipcodelat;
	var lon = user.zipcodelon;

	// Create the map if there is no map yet
	if (user.map == "map") {
		// Create and draw the map
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: zoomLevel,
			center: new google.maps.LatLng(lat, lon),
			mapTypeId: google.maps.MapTypeId.TERRAIN
		});
		user.map = map;
	// Redraw the map if another zipcode is entered
	} else {
		// Create and draw the map
		user.map.setCenter(new google.maps.LatLng(lat, lon));
	}

	// Show the map
	$("#map").css("display", "block");

	// Return the user object
	return user;
}

////////////////////////
// createCircle(user) //
////////////////////////

// Function to create a circle on the map

function createCircle(user) {
	$("#toolbar-createcircle").click(function() {
		// Create a circle if the current question is 6 and if user.livingenvironmentamount < 1
		if ($("#questiontitle").html() == questions[6][2] && user.livingenvironmentamount < 1) {
			// Create the circle
			var lat = user.zipcodelat;
			var lon = user.zipcodelon;
			var rad = 200;
			var circle = new google.maps.Circle({
				strokeColor: 'indigo',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: 'indigo',
				fillOpacity: 0.35,
				map: user.map,
				center: {lat: lat, lng: lon},
				radius: rad,
				editable: true,
				draggable: true
			});

			// Add 1 to user.livingenvironmentamount to make sure that the user can only create 1 living environment area
			user.livingenvironmentamount = 1;
			// Set the living environment properties to circle
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["circle", lat, lon, rad, "north", "south", "east", "west"]
			];
			// Save the circle to the user object
			user.livingenvironment = circle;
			// Set #toolbar-createcircle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
			$(this).removeClass("toolbar-item");
			$(this).addClass("toolbar-item toolbar-active");
		}
		// Return the user object
		return user;
	});
}

///////////////////////////
// createRectangle(user) //
///////////////////////////

// Function to create a rectangle on the map

function createRectangle(user) {
	$("#toolbar-createrectangle").click(function() {
		// Create a rectangle if the current question is 6 and if user.livingenvironmentamount < 1
		if ($("#questiontitle").html() == questions[6][2] && user.livingenvironmentamount < 1) {
			// Create the rectangle
			var north = user.zipcodelat + 0.003;
			var south = user.zipcodelat - 0.003;
			var east = user.zipcodelon + 0.007;
			var west = user.zipcodelon - 0.007;
			var rectangle = new google.maps.Rectangle({
				strokeColor: 'indigo',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: 'indigo',
				fillOpacity: 0.35,
				map: user.map,
				bounds: {
					north: north,
					south: south,
					east: east,
					west: west
				},
				editable: true, 
				draggable: true
			});

			// Add 1 to user.livingenvironmentamount to make sure that the user can only create 1 living environment area
			user.livingenvironmentamount = 1;

			// Set the living environment properties to rectangle
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["rectangle", "lat", "lon", "rad", north, south, east, west]
			];
			// Save the rectangle to the user object
			user.livingenvironment = rectangle;
			// Set #toolbar-createrectangle as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
			$(this).removeClass("toolbar-item");
			$(this).addClass("toolbar-item toolbar-active");
		}
		// Return the user object
		return user;
	});
}

/////////////////////////
// createPolygon(user) //
/////////////////////////

// Function to create a polygon on the map

function createPolygon(user) {
	$("#toolbar-createpolygon").click(function() {

		// Create a polygon if the current question is 6 and if user.livingenvironmentamount < 1
		if ($("#questiontitle").html() == questions[6][2] && user.livingenvironmentamount < 1) {
			// Create the polygon
			var lat1 = user.zipcodelat + 0.003;
			var lat2 = user.zipcodelat - 0.003;
			var lon1 = user.zipcodelon + 0.007;
			var lon2 = user.zipcodelon - 0.007;
			var triangleCoords = [
				{lat: lat1, lng: lon2},
				{lat: lat2, lng: lon2},
				{lat: lat1, lng: lon1}
			];
			var polygon = new google.maps.Polygon({
				paths: triangleCoords,
				strokeColor: 'indigo',
				strokeOpacity: 0.8,
				strokeWeight: 3,
				fillColor: 'indigo',
				fillOpacity: 0.35,
				editable: true,
				draggable: true
			});

			// Add 1 to user.livingenvironmentamount to make sure that the user can only create 1 living environment area
			user.livingenvironmentamount = 1;
			// Set the living environment properties to polygon
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["polygon", "lat", "lon", "rad", "north", "south", "east", "west"]
			];
			// Save the polygon to the user object
			user.livingenvironment = polygon;
			// Add the polygon to the map
			user.livingenvironment.setMap(user.map);

			// Set #toolbar-createpolygon as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
			$(this).removeClass("toolbar-item");
			$(this).addClass("toolbar-item toolbar-active");
		}
		// Return the user object
		return user;
	});
}

////////////////////
// clearMap(user) //
////////////////////

// Function to clear the map of data

function clearMap(user) {
	$("#toolbar-clearmap").click(function() {
		// Remove the circle/rectangle if it's question 6 and user.livingenvironmentamount > 0
		if ($("#questiontitle").html() == questions[6][2] && user.livingenvironmentamount > 0) {
			// Clear all circle, square, markers // is dit te doen door de overlay te verwijderen?
			user.livingenvironment.setMap(null);
			// Reset user.livingenvironment
			user.livingenvironment = "";
			// Reset user.livingenvironmentamount to 0 (zero)
			user.livingenvironmentamount = 0;
			// Reset user.livingenvironmentproperties
			user.livingenvironmentproperties = [
				["type", "lat", "lon", "rad", "north", "south", "east", "west"],
				["type", "lat", "lon", "rad", "north", "south", "east", "west"]
			];
			// Set #toolbar-clearmap as the active .toolbar-item of #toolbar-buttons
			$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");
			$(this).removeClass("toolbar-item");
			$(this).addClass("toolbar-item toolbar-active");
		}
		// Return the user object
		return user;
	});
}

/////////////////////
// toggleButtons() //
/////////////////////

// Function for toggling menus with the footer buttons

function toggleButtons() {
	// Toggle the overview menu
	$("#button-overview").click(function() {
		$("*").scrollTop(0);
        $("#overview").toggle();
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
    });

	// Toggle the header
    $("#button-cartoon").click(function() {
		$("*").scrollTop(0);
        $("#header").toggle();
		if ($("#header").css("display").toLowerCase() != "none") {
			$("#question-answer").css("top", "17.25vh");
			$("#question-answer").css("height", "75.25vh");
			$("#map").css("height", "50vh");
			$("#overview").css("top", "17.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("top", "17.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "block") {
			$("#question-answer").css("top", "17.25vh");
			$("#question-answer").css("height", "75.25vh");
			$("#map").css("height", "50vh");
			$("#overview").css("top", "17.25vh");
			$("#overview").css("height", "75.25vh");
			$("#toolbar").css("top", "17.25vh");
			$("#toolbar").css("height", "75.25vh");
		} else if ($("#header").css("display").toLowerCase() == "none") {
			$("#question-answer").css("top", "0vh");
			$("#question-answer").css("height", "92.5vh");
			$("#map").css("height", "67.25vh");
			$("#overview").css("top", "0vh");
			$("#overview").css("height", "92.5vh");
			$("#toolbar").css("top", "0vh");
			$("#toolbar").css("height", "92.5vh");
		}
    });

	// Toggle the toolbar
    $("#button-toolbar").click(function() {
		$("*").scrollTop(0);
        $("#toolbar").toggle();
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
    });
}

////////////////////////////////////////////////////
// toggleQuestions(questions, lastQuestion, user) //
////////////////////////////////////////////////////

// Function for toggling the questions

function toggleQuestions(questions, lastQuestion, user) {
	$("#tableofcontents-introduction").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[0][1]); // '<img src="img/'+questions[0][0]+'.png" alt="'+questions[0][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[0][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[0][3]);

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
/*
	for (i = 1; i < lastQuestion; i++) {
		$("#tableofcontents-question"+i).click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
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
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[1][1]); // '<img src="img/'+questions[1][0]+'.png" alt="'+questions[1][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[1][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[1][3]);

		// Show the user age as value of #data-question1
		document.getElementById("data-question1").value = user.age;

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question2").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[2][1]); // '<img src="img/'+questions[2][0]+'.png" alt="'+questions[2][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[2][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[2][3]);

		// Show the user nationality as value of #data-question2
		document.getElementById("data-question2").value = user.nationality;

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question3").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[3][1]); // '<img src="img/'+questions[3][0]+'.png" alt="'+questions[3][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[3][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[3][3]);

		// Show the user zipcode as value of #data-question3
		document.getElementById("data-question3").value = user.zipcode;

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question4").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[4][1]); // '<img src="img/'+questions[4][0]+'.png" alt="'+questions[4][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[4][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
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

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question5").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[5][1]); // '<img src="img/'+questions[5][0]+'.png" alt="'+questions[5][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[5][2]);

		// Show the answer
		$("#answer").css("color", "rgba(00, 00, 00, .46)");
		$("#answer").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#answer").html(questions[5][3]);

		// Show the user.gametimehours as value of #data-question5-gametime-hours
		document.getElementById("data-question5-gametime-hours").value = user.gametimehours;
		// Show the user.gametimecategories as value of #data-question5-gametime-categories
		document.getElementById("data-question5-gametime-categories").value = user.gametimecategories;

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question6").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
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

		// Show the cartoon
		$("#header-title-text").html(questions[6][1]); // '<img src="img/'+questions[6][0]+'.png" alt="'+questions[6][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[6][2]);

		// Show the answer
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html(questions[6][3]);

		// Don't show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "none");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");

		// Return the user object
		return user;
	});
	$("#tableofcontents-question7").click(function() {

		// Save the data from the previous question and add it to the user object
		// Question 1
		if ($("#questiontitle").html() == questions[1][2]) {
			savaDataQuestion1(questions, user);
		// Question 2
		} else if ($("#questiontitle").html() == questions[2][2]) {
			savaDataQuestion2(questions, user);
		// Question 3
		} else if ($("#questiontitle").html() == questions[3][2]) {
			savaDataQuestion3(questions, user);
		// Question 4
		} else if ($("#questiontitle").html() == questions[4][2]) {
			savaDataQuestion4(questions, user);
		// Question 5
		} else if ($("#questiontitle").html() == questions[5][2]) {
			savaDataQuestion5(questions, user);
/*
		// Question 6
		} else if ($("#questiontitle").html() == questions[6][2]) {
			savaDataQuestion6(questions, user);
		// Question 7
		} else if ($("#questiontitle").html() == questions[7][2]) {
			savaDataQuestion7(questions, user);
 */
		}
		
		// Show the #map
		$("#map").css("display", "block");

		// Reset the data from the map by clearing the circle and or rectangle if there is any
		if (user.livingenvironmentproperties[1][0] == "circle" || user.livingenvironmentproperties[1][0] == "rectangle" || user.livingenvironmentproperties[1][0] == "polygon") {
			user.livingenvironment.setMap(null);
		}
		// Remove the .toolbar-active
		$("#toolbar-buttons .toolbar-item").removeClass("toolbar-active");

		// Reset the scrollbars to the top
		$("*").scrollTop(0);

		// Show the cartoon
		$("#header-title-text").html(questions[7][1]); // '<img src="img/'+questions[7][0]+'.png" alt="'+questions[7][1]+'">'

		// Show the question
		$("#questiontitle").css("color", "rgba(00, 00, 00, .46)");
		$("#questiontitle").css("text-shadow", "1px 1px rgba(00, 00, 00, .05)");
		$("#questiontitle").html(questions[7][2]);

		// Show the answer
		$("#answer").css("color", "white");
		$("#answer").css("text-shadow", "1px 1px #000000");
		$("#answer").html(questions[7][3]);

		// Show #toolbar-createmarker
		$("#toolbar-createmarker").css("display", "block");

		// Change this button to the active table of contents button
		$("#tableofcontents-buttons .tableofcontents-item").removeClass("tableofcontents-active");
		$(this).removeClass("tableofcontents-item");
		$(this).addClass("tableofcontents-item tableofcontents-active");
		// $("tableofcontents-nextquestion").display("visible");

		// Return the user object
		return user;
	});
}
