<?php
include("../php/connection.php");
$sql = $connection->prepare("UPDATE credenziali SET nome=?, cognome=?, email=?, data=? WHERE username=?");
$sql->bind_param("sssss", $_POST["nome"], $_POST["cognome"], $_POST["email"], $_POST["data"], $_POST["username"]);
if($sql->execute()) echo json_encode("update");
else echo json_encode("error");
$sql->close();
?>