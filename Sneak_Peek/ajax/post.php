<?php
session_start();
include("../php/connection.php");
$time1 = time();
$time = date('Y-m-d H:i:s', $time1);

$ext = explode(".", "../".$_POST['imgPost']);
$post = "../users/".$_POST["username"]."/".$time1.".".$ext[3];
$post1 = "users/".$_POST["username"]."/".$time1.".".$ext[3];
if(isset($_POST['vendita'])){
    $sql = 'INSERT INTO post (foto, username, data, marca, descrizione, hashtag, vendita) VALUE ("'.$post1.'", "'.$_POST['username'].'","'.$time.'","'.$_POST['modello'].'","'.$_POST['descrizione'].'","'.$_POST['hashtag'].'","1")';
    if ($connection->query($sql)) {
        echo "good";
    }
    else echo"bad";
}
else{
    $sql = 'INSERT INTO post (foto, username, data, marca, descrizione, hashtag, vendita) VALUE ("'.$post1.'", "'.$_POST['username'].'","'.$time.'","'.$_POST['modello'].'","'.$_POST['descrizione'].'","'.$_POST['hashtag'].'","0")';
    if ($connection->query($sql)) {
        echo "good";
    }
    else echo"bad";
}

rename("../".$_POST['imgPost'], $post);
?>