<?php
include("../php/connection.php");
include("../php/class_post.php");
$array = array();
if($_POST['view'] == 'post'){
    $sql = "SELECT * FROM post WHERE username = '".$_POST['username']."' ORDER BY id DESC";
    $response = $connection->query($sql);
    if ($response->num_rows > 0) {
        while($row = $response->fetch_assoc()){
            $post = new Post($row['id'], $row['foto'], $row['piace'], $row['prefer'], $row['username'], $row['data'], $row['marca'], $row['hashtag'], $row['descrizione'], $row['vendita']);
            array_push($array, $post);
        }
    }
}
elseif($_POST['view'] == 'like'){
    $sql = "SELECT * FROM post WHERE id IN (SELECT id_post FROM like_post WHERE username = '".$_POST['username']."') ORDER BY id DESC";
    $response = $connection->query($sql);
    if ($response->num_rows > 0) {
        while($row = $response->fetch_assoc()){
            $post = new Post($row['id'], $row['foto'], $row['piace'], $row['prefer'], $row['username'], $row['data'], $row['marca'], $row['hashtag'], $row['descrizione'], $row['vendita']);
            array_push($array, $post);
        }
    }
}
elseif($_POST['view'] == 'prefer'){
    $sql = "SELECT * FROM post WHERE id IN (SELECT id_post FROM prefer_post WHERE username = '".$_POST['username']."') ORDER BY id DESC";
    $response = $connection->query($sql);
    if ($response->num_rows > 0) {
        while($row = $response->fetch_assoc()){
            $post = new Post($row['id'], $row['foto'], $row['piace'], $row['prefer'], $row['username'], $row['data'], $row['marca'], $row['hashtag'], $row['descrizione'], $row['vendita']);
            array_push($array, $post);
        }
    }
}
echo json_encode($array);
?>