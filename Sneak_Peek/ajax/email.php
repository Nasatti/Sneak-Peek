<?php
include("../php/connection.php");
$sql = $connection->prepare("SELECT email FROM credenziali WHERE username=?");
$sql->bind_param("s", $_POST["username"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0){
    $row = $result->fetch_assoc();
    echo json_encode($row);
}
else echo json_encode(false);