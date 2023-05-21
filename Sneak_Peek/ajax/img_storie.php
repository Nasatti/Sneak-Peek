<?php
include("../php/connection.php");
$sql = $connection->prepare("SELECT foto FROM post WHERE marca=?");
$sql->bind_param("s", $_POST["modello"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0){
    $array = array();
    while($row = $result->fetch_assoc()){
        array_push($array, $row);
    }
    $randomindex = array_rand($array);
    $randomelement = $array[$randomindex];
    echo json_encode($randomelement);
}
else echo json_encode("error");
?>