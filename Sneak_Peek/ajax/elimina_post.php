<?php
include("../php/connection.php");
$sql = $connection->prepare("DELETE FROM post WHERE id=?");
$sql->bind_param("i", $_POST["id"]);
if($sql->execute()) echo json_encode("Deleted");
else echo json_encode("Error");
?>