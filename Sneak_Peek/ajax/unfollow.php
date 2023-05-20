<?php
$timestamp = date('Y-m-d H:i:s', time());
include("../php/connection.php");
$sql = $connection->prepare("DELETE FROM follow WHERE follower=? AND followed=?");
$sql->bind_param("ss", $_POST["follower"], $_POST["followed"]);
if($sql->execute()) echo json_encode("follow");
else echo json_encode("error");
$sql->close();
?>
