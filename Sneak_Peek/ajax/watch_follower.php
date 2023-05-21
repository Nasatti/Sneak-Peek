<?php
include("../php/class_post.php");
$array = array();
include("../php/connection.php");
$sql = $connection->prepare('SELECT followed FROM follow WHERE follower = ?');
$sql->bind_param("s", $_POST["username"]);
$sql->execute();
$result = $sql->get_result();
if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
        $sql = $connection->prepare("SELECT * FROM post WHERE username=? ORDER BY id DESC");
        $sql->bind_param("s", $row["followed"]);
        $sql->execute();
        $response = $sql->get_result();
        if($response->num_rows > 0){
            while($row2 = $response->fetch_assoc()){
                $sql = "SELECT count(*) AS piace FROM like_post WHERE id_post = '".$row2['id']."'";
                $response2 = $connection->query($sql);
                if($response2->num_rows > 0){
                    $p = $response2->fetch_assoc();
                    $piace = $p['piace'];
                    //echo $piace . " ";
                    $sql = "SELECT count(*) AS prefer FROM prefer_post WHERE id_post = '".$row2['id']."'";
                    $response3 = $connection->query($sql);
                    if($response3->num_rows > 0){
                        $pr = $response3->fetch_assoc();
                        $prefer = $pr['prefer'];
                        //echo $prefer . " ";
                        $post = new Post($row2['id'], $row2['foto'], $row2['username'], $row2['data'], $row2['marca'], $row2['hashtag'], $row2['descrizione'], $row2['vendita'], $piace, $prefer);
                        array_push($array, $post);
                    }
                }
            }
        }
    }
}
echo json_encode($array);
?>