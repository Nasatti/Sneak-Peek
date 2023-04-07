<?php
include("../php/class_post.php");
$array = array();
include("../php/connection.php");
$sql = 'SELECT * FROM post';
$response = $connection->query($sql);
if ($response->num_rows > 0) {
    while($row = $response->fetch_assoc()){
        $post = new Post($row['id'], $row['foto'], $row['piace'], $row['prefer'], $row['username'], $row['data'], $row['marca'], $row['hashtag'], $row['descrizione'], $row['vendita']);
        array_push($array, $post);
    }

}
echo json_encode($array);
?>