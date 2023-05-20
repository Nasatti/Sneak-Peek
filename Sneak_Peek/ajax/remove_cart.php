<?php
include("../php/connection.php");
$sql = $connection->prepare("DELETE FROM prefer_post  WHERE id_post=? AND username=?");
$sql->bind_param("ss", $_POST["id"], $_POST["username"]);
if($sql->execute()) echo json_encode(true);
else echo json_encode(false);
$sql->close();
?>