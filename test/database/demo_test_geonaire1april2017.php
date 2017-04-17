<?php
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

//$json_decoded = json_encode($q, true);

// Put the data in the MySQL database
/*
$con = mysqli_connect('sql105.website.tk','wetk_19226145','W3tFMe','wetk_19226145_geonaire');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

//$test_id = $age;
$test_special = 8;
$firstname = 'madeleine';
$lastname = 'lion';
mysqli_select_db($con,'geonaire');
$sql="INSERT INTO geonaire VALUES ('', '18', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')"; // Still need to add $living_environment_circlecenterlat to database

$query = mysqli_query($con, $sql);

mysqli_close($con);
*/

// Put the data in the backup MySQL database
$con = mysqli_connect('sql105.website.tk','wetk_19226145','W3tFMe','wetk_19226145_test');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,'geonaire');
$sql="INSERT INTO geonaire VALUES ('', '$age', '$nationality', '$zipcode', '$game_category_genre_action', '$game_category_genre_action_adventure', '$game_category_genre_adventure', '$game_category_genre_facebook', '$game_category_genre_mobilephone', '$game_category_genre_roleplaying', '$game_category_genre_seriousgame', '$game_category_genre_simulation', '$game_category_genre_sport', '$game_category_genre_strategy', '$game_category_story_fiction', '$game_category_story_nonfiction', '$game_category_computer_console', '$game_category_computer_handheld', '$game_category_computer_ipad', '$game_category_computer_mobilephone', '$game_category_computer_pcmac', '$game_category_view_2d', '$game_category_view_3d', '$game_category_view_firstperson', '$game_category_view_thirdperson', '$game_category_view_augmentedreality', '$game_category_view_virtualreality', '$game_time_hours', '$game_time_category', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '')";

$query = mysqli_query($con, $sql);

mysqli_close($con);
?>
</body>
</html>