<?php
include("../php/connection.php");
$sql = $connection->prepare("SELECT * FROM follow WHERE follower=?");
$sql->bind_param("s", $_POST["follower"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0) $n_following = $result->num_rows;
else $n_following = 0;

$sql = $connection->prepare("SELECT * FROM follow WHERE followed=?");
$sql->bind_param("s", $_POST["follower"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0) $n_followers = $result->num_rows;
else $n_followers = 0;

echo json_encode(array("followers" => $n_followers, "following" => $n_following));