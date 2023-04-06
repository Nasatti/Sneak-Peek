<?php
include("../php/connection.php");
$post = $_POST['action'];
$inc = $_POST['inc'];
if($post == 'like'){
    if($inc=="true"){
        $sql = "UPDATE post SET piace = piace + 1 WHERE id = '".$_POST['id']."';";
        if ($connection->query($sql)) {
            echo json_encode("success1");
        }
        else{
            echo json_encode("error");
        }
    }
    else if($inc=='false'){
        $sql = "UPDATE post SET piace = piace - 1 WHERE id = '".$_POST['id']."';";
        if ($connection->query($sql)) {
            echo json_encode("success2");
        }
        else{
            echo json_encode("error");
        }
    }
}
elseif($post == 'prefer'){
    if($inc=="true"){
        $sql = "UPDATE post SET prefer = prefer + 1 WHERE id = '".$_POST['id']."';";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
    else if($inc=='false'){
        $sql = "UPDATE post SET prefer = prefer - 1 WHERE id = '".$_POST['id']."';";
        if ($connection->query($sql)) {
            echo json_encode("success");
        }
        else{
            echo json_encode("error");
        }
    }
}
?>