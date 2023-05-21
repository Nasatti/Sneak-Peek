<?php
include("../php/connection.php");
$sql = $connection->prepare("SELECT * FROM report_post WHERE username=? AND id_post=?");
$sql->bind_param("si", $_POST["username"], $_POST["id"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0) echo json_encode(true);
else echo json_encode(false);
?>