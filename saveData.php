<?php
	/*
	 * saveData.php
	 * PHP file om de user input te verwerken voor de Geonaire
	 * Gemaakt op 2016-12-17
	 * Het laatst veranderd op 2016-12-20
	 * door GeOdin
	 */

	// Add // <form action="php/saveData.php" method="post"> in html
	// Set tje variables
	// Connecting to the MySQL server
	$host="sql105.website.tk";
	$user_name="wetk_19226145";
	$pwd="W3tFMe";
	$database_name="wetk_19226145_geonaire";
	$db=mysql_connect($host, $user_name, $pwd);
	if (mysql_error() > "") print mysql_error() . "<br>";
	mysql_select_db($database_name, $db);
	if (mysql_error() > "") print mysql_error() . "<br>";

	// Storing form values into PHP variables
	$user = 2;
	$age = 18 //$_POST["age"]; // Since method="post" in the form
	//$submitdate = date("Ymd");

	// Inser these values into the MySQL table
	$query = "insert into form_data (userID, age) values ('" . $user . "', '" . $age . "')";
	$result = mysql_query($query);// mysql_query() is a PHP function for executing MySQL queries

	//echo “<h1>Thank you for submitting your details!</h1>”;
?>
