<?php
include("../php/class_msg.php");
include("../php/connection.php");
$array = array();
$sql = 'SELECT * FROM chat WHERE us_mit="'.$_POST['username'].'"';
$response = $connection->query($sql);
if ($response->num_rows > 0) {
    while($row = $response->fetch_assoc()){
        $chat = new Chat($row['id'], $row['us_mit'], $row['us_dest'], $row['msg'], $row['data']);
        array_push($array, $chat);
    }
}
echo json_encode($array);
?>