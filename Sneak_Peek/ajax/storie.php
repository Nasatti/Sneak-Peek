<?php
include("../php/connection.php");
$array = array();
$sql = $connection->prepare("SELECT marca, COUNT(*) AS piace FROM post JOIN like_post ON post.id=like_post.id_post WHERE like_post.username=? GROUP BY marca");
$sql->bind_param("s", $_POST["username"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0){
    $i=0;
    while($row = $result->fetch_assoc() AND $i<5){
        array_push($array, $row);
        $i++;
    }
    echo json_encode($array);
}
else echo json_encode("error");
?>