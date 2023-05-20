<?php
include("../php/connection.php");
$sql = $connection->prepare("SELECT * FROM follow WHERE follower=? AND followed=?");
$sql->bind_param("ss", $_POST["follower"], $_POST["followed"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0) echo json_encode("follow");
else echo json_encode("unfollow");