<?php
	// Get the variables
	$age = intval($_GET['age']);
	$nationality = strval($_GET['nationality']);
	$zipcode = strval($_GET['zipcode']);
	$game_category_genre_action = intval($_GET['game_category_genre_action']);
	$game_category_genre_action_adventure = intval($_GET['game_category_genre_action_adventure']);
	$game_category_genre_adventure = intval($_GET['game_category_genre_adventure']);
	$game_category_genre_facebook = intval($_GET['game_category_genre_facebook']);
	$game_category_genre_mobilephone = intval($_GET['game_category_genre_mobilephone']);
	$game_category_genre_roleplaying = intval($_GET['game_category_genre_roleplaying']);
	$game_category_genre_seriousgame = intval($_GET['game_category_genre_seriousgame']);
	$game_category_genre_simulation = intval($_GET['game_category_genre_simulation']);
	$game_category_genre_sport = intval($_GET['game_category_genre_sport']);
	$game_category_genre_strategy = intval($_GET['game_category_genre_strategy']);
	$game_category_story_fiction = intval($_GET['game_category_story_fiction']);
	$game_category_story_nonfiction = intval($_GET['game_category_story_nonfiction']);
	$game_category_computer_console = intval($_GET['game_category_computer_console']);
	$game_category_computer_handheld = intval($_GET['game_category_computer_handheld']);
	$game_category_computer_ipad = intval($_GET['game_category_computer_ipad']);
	$game_category_computer_mobilephone = intval($_GET['game_category_computer_mobilephone']);
	$game_category_computer_pcmac = intval($_GET['game_category_computer_pcmac']);
	$game_category_view_2d = intval($_GET['game_category_view_2d']);
	$game_category_view_3d = intval($_GET['game_category_view_3d']);
	$game_category_view_firstperson = intval($_GET['game_category_view_firstperson']);
	$game_category_view_thirdperson = intval($_GET['game_category_view_thirdperson']);
	$game_category_view_augmentedreality = intval($_GET['game_category_view_augmentedreality']);
	$game_category_view_virtualreality = intval($_GET['game_category_view_virtualreality']);
	$game_time_hours = intval($_GET['game_time_hours']);
	$game_time_category = strval($_GET['game_time_category']);
	$living_environment_type = strval($_GET['living_environment_type']);
	$living_environment_size = floatval($_GET['living_environment_size']);
	$living_environment_area = strval($_GET['living_environment_area']);
	$living_environment_circlecenterlat = floatval($_GET['living_environment_circlecenterlat']);
	$living_environment_circlecenterlon = floatval($_GET['living_environment_circlecenterlon']);
	$living_environment_circlecenterradius = floatval($_GET['living_environment_circlecenterradius']);
	$friction_positive_large_x = intval($_GET['friction_positive_large_x']);
	$friction_positive_large_y = intval($_GET['friction_positive_large_y']);
	$friction_positive_medium_x = intval($_GET['friction_positive_medium_x']);
	$friction_positive_medium_y = intval($_GET['friction_positive_medium_y']);
	$friction_positive_small_x = intval($_GET['friction_positive_small_x']);
	$friction_positive_small_y = intval($_GET['friction_positive_small_y']);
	$friction_negative_small_x = intval($_GET['friction_negative_small_x']);
	$friction_negative_small_y = intval($_GET['friction_negative_small_y']);
	$friction_negative_medium_x = intval($_GET['friction_negative_medium_x']);
	$friction_negative_medium_y = intval($_GET['friction_negative_medium_y']);
	$friction_negative_large_x = intval($_GET['friction_negative_large_x']);
	$friction_negative_large_y = intval($_GET['friction_negative_large_y']);
	$place_attachment_priority1 = strval($_GET['place_attachment_priority1']);
	$place_attachment_priority2 = strval($_GET['place_attachment_priority2']);
	$place_attachment_priority3 = strval($_GET['place_attachment_priority3']);
	$place_attachment_priority4 = strval($_GET['place_attachment_priority4']);
	$place_attachment_priority5 = strval($_GET['place_attachment_priority5']);
	$nature_minimum = strval($_GET['nature_minimum']);
	$involvement_omgevingswet = intval($_GET['involvement_omgevingswet']);
	$involvement_participation = intval($_GET['involvement_participation']);
	$email = strval($_GET['email']);
	$send_result_to_user = intval($_GET['send_result_to_user']);
	$is_result_send = intval($_GET['is_result_send']);
	$current_datetime = strval($_GET['current_datetime']);

	// Create the SQL query to insert the data in the database
	$sql="INSERT INTO geonaire VALUES ('', '$age', '$nationality', '$zipcode', '$game_category_genre_action', '$game_category_genre_action_adventure', '$game_category_genre_adventure', '$game_category_genre_facebook', '$game_category_genre_mobilephone', '$game_category_genre_roleplaying', '$game_category_genre_seriousgame', '$game_category_genre_simulation', '$game_category_genre_sport', '$game_category_genre_strategy', '$game_category_story_fiction', '$game_category_story_nonfiction', '$game_category_computer_console', '$game_category_computer_handheld', '$game_category_computer_ipad', '$game_category_computer_mobilephone', '$game_category_computer_pcmac', '$game_category_view_2d', '$game_category_view_3d', '$game_category_view_firstperson', '$game_category_view_thirdperson', '$game_category_view_augmentedreality', '$game_category_view_virtualreality', '$game_time_hours', '$game_time_category', '$living_environment_type', '$living_environment_size', '$living_environment_area', '$living_environment_circlecenterlat', '$living_environment_circlecenterlon', '$living_environment_circlecenterradius', '$friction_positive_large_x', '$friction_positive_large_y', '$friction_positive_medium_x', '$friction_positive_medium_y', '$friction_positive_small_x', '$friction_positive_small_y', '$friction_negative_small_x', '$friction_negative_small_y', '$friction_negative_medium_x', '$friction_negative_medium_y', '$friction_negative_large_x', '$friction_negative_large_y', '$place_attachment_priority1', '$place_attachment_priority2', '$place_attachment_priority3', '$place_attachment_priority4', '$place_attachment_priority5', '$nature_minimum', '$involvement_omgevingswet', '$involvement_participation', '$email', '$send_result_to_user', '$is_result_send', '$current_datetime')";

	// Put the data in the MySQL database (geonaire table in geonaire database)
	$con_geonaire = mysqli_connect('sql105.website.tk','wetk_19226145','W3tFMe','wetk_19226145_geonaire');
	if (!$con_geonaire) {
	    die('Could not connect: ' . mysqli_error($con_geonaire));
	}
	mysqli_select_db($con_geonaire,'geonaire');
	$query = mysqli_query($con_geonaire, $sql);
	mysqli_close($con_geonaire);

	// Put the data in the backup MySQL database (geonaire table in test database)
	$con_test = mysqli_connect('sql105.website.tk','wetk_19226145','W3tFMe','wetk_19226145_test');
	if (!$con_test) {
	    die('Could not connect: ' . mysqli_error($con_test));
	}
	mysqli_select_db($con_test,'geonaire');
	$query = mysqli_query($con_test, $sql);
	mysqli_close($con_test);

	// Put the data in the extra back-up MySQL database (geonaire table in geonaire2 database)
	$con_geonaire = mysqli_connect('sql105.website.tk','wetk_19226145','W3tFMe','wetk_19226145_geonaire2');
	if (!$con_geonaire) {
	    die('Could not connect: ' . mysqli_error($con_geonaire));
	}
	mysqli_select_db($con_geonaire,'geonaire');
	$query = mysqli_query($con_geonaire, $sql);
	mysqli_close($con_geonaire);
?>
