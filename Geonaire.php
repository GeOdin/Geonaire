<html>
	<head>
		<link type="text/css" rel="stylesheet" href="css/Geonaire.css"/>
		<link rel="shortcut icon" type="image/png" href="favicon.png" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> <!-- Reference to the jQuery library -->
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfbd7SbhQEtzxsnaMTMhE3lgSqdBLSE7w&libraries=drawing"></script> <!-- Google Maps API key for this project -->
		<script type="text/javascript" src="js/Geonaire.js"></script>
		<script type="text/javascript" src="js/StartGeonaire.js"></script> 
		<script type="text/javascript" src="js/GeonaireQuestions.js"></script>
		<script type="text/javascript" src="js/GeonaireUser.js"></script>
		<script type="text/php" src="php/action_page.php"></script>
		<title>
			Geonaire
		</title>
	</head>

	<body>
		<div id="main" class="main">
			<div id="header">
				<div id="header-title">
					<div id="header-title-logo">
						<h3>
							De Placeys
						</h3>
					</div>
					<div id="header-title-text">
					</div>
				</div>
			</div>
			<div id="overview">
				<div id="progressbar">
					<div id="progress"></div>
				</div>
				<div id="tableofcontents">
					<div id="tableofcontents-title">Overzicht</div>
					<ul id="tableofcontents-buttons">
						<li id="tableofcontents-introduction" class="tableofcontents-item tableofcontents-active"> Introductie </li>
						<li id="tableofcontents-question1" class="tableofcontents-item"> Vraag 1 </li>
						<li id="tableofcontents-question2" class="tableofcontents-item"> Vraag 2 </li>
						<li id="tableofcontents-question3" class="tableofcontents-item"> Vraag 3 </li>
						<li id="tableofcontents-question4" class="tableofcontents-item"> Vraag 4 </li>
						<li id="tableofcontents-question5" class="tableofcontents-item"> Vraag 5 </li>
						<li id="tableofcontents-question6" class="tableofcontents-item"> Vraag 6 </li>
						<li id="tableofcontents-question7" class="tableofcontents-item"> Vraag 7 </li>
						<li id="tableofcontents-nextquestion" class="tableofcontents-item"> Verstuur </li>
					</ul>
				</div>
			</div>
			<div id="question-answer">
				<div id="question">
					<div id="questiontitle"></div>
				</div>
				<div id="map">
				</div>
				<div id="answer">
				</div>
			</div>
			<div id="toolbar">
				<div id="toolbar-title">Kaart</div>
				<ul id="toolbar-buttons">
					<li id="toolbar-createmarker" class="toolbar-item">Markeer een <u title="Merkeer een punt.&#013;&#010;Je kunt de punten met de muis verslepen.">punt</u></li>
					<li id="toolbar-createcircle" class="toolbar-item">Teken een <u title="Teken een cirkel.&#013;&#010;Je kunt de cirkel verslepen door erop te klikken of op het middelste bolletje te klikken en met de muis te slepen.&#013;&#010;Je kunt de cirkel met de muis aanpassen door op de buitenste bolletjes te klikken en met de muis te slepen.">cirkel</u></li>
					<li id="toolbar-createrectangle" class="toolbar-item">Teken een <u title="Teken een rechthoek.&#013;&#010;Je kunt de rechthoek verslepen door erop te klikken en met de muis te slepen.&#013;&#010;Je kunt de rechthoek met de muis aanpassen door op de buitenste bolletjes te klikken en met de muis te slepen.">rechthoek</u></li>
					<li id="toolbar-createpolygon" class="toolbar-item">Teken een <u title="Teken een alternatief gebied.&#013;&#010;Je kunt het alternatieve gebied verslepen door op erop te klikken en met de muis te slepen.&#013;&#010;Je kunt het gebied met de muis aanpassen door op de buitenste bolletjes te klikken en met de muis te slepen.&#013;&#010;Door op de meer transparante bolletjes te klikken en te slepen, komen er meer mogelijkheden bij.&#013;&#010;Door twee witte bolletjes op elkaar te leggen, wordt het aantal bolletjes kleiner.">alternatief gebied</u></li>
					<li id="toolbar-clearmap" class="toolbar-item"><u title="Verwijder de getekende punten en/ of het getekende gebied.">Verwijder</u> het gebied</li>
				</ul>
			</div>
			<div id="footer">
				<ul id="footer-buttons">
					<li id="button-overview" class="footer-item"> Overzicht </li>
					<li id="button-cartoon" class="footer-item"> Cartoon </li>
					<li id="button-toolbar" class="footer-item"> Taakbalk </li>
				</ul>
			</div>
		</div>
	</body>
</html>
