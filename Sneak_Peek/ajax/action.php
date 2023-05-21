<?php
include("../php/connection.php");
$post = $_POST['action'];
$inc = $_POST['inc'];
if($post == 'like'){
    if($inc=="true"){
        $sql = "INSERT like_post (username, id_post) VALUES ('".$_POST['username']."', '".$_POST['id']."');";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
    else if($inc=='false'){
        $sql = "DELETE FROM like_post WHERE id_post = '".$_POST['id']."' AND username = '".$_POST['username']."';";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
}
elseif($post == 'prefer'){
    if($inc=="true"){
        $sql = "INSERT prefer_post (id_post, username) VALUES ('".$_POST['id']."', '".$_POST['username']."');";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
    else if($inc=='false'){
        $sql = "DELETE FROM prefer_post WHERE id_post = '".$_POST['id']."' AND username = '".$_POST['username']."';";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
}
elseif($post == 'report'){
    if($inc=="true"){
        $sql = "INSERT report_post (id_post, username) VALUES ('".$_POST['id']."', '".$_POST['username']."');";
        if ($connection->query($sql)) {
            $sql = "SELECT COUNT(*) AS report FROM report_post WHERE id_post = '".$_POST['id']."';";
            $result = $connection->query($sql);
            $row = $result->fetch_assoc();
            if($row['report']>=5){
                $sql = "DELETE FROM post WHERE id = '".$_POST['id']."';";
                if ($connection->query($sql)) {
                    echo json_encode("success");
                }
                else{
                    echo json_encode("error");
                }
            }
        }
        else{
            echo json_encode("error");
        }
    }
    else if($inc=='false'){
        $sql = "DELETE FROM report_post WHERE id_post = '".$_POST['id']."' AND username = '".$_POST['username']."';";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
}
?>