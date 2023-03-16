<?php
session_start();
include("connection.php");
$time1 = time();
$time = date('Y-m-d H:i:s', $time1);

$ext = explode(".", $_POST['imgPost']);
$post = "./users/".$_SESSION["username"]."/".$time1.".".$ext[1];

if(isset($_POST['vendita'])){
    $sql = 'INSERT INTO post (foto, username, data, marca, descrizione, hashtag, vendita) VALUE ("'.$post.'", "'.$_SESSION['username'].'","'.$time.'","'.$_POST['modello'].'","'.$_POST['descrizione'].'","'.$_POST['descrizione'].'","1")';
    if ($connection->query($sql)) {
        echo "good";
    }
    else echo"bad";
}
else{
    $sql = 'INSERT INTO post (foto, username, data, marca, hashtag, vendita) VALUE ("'.$post.'", "'.$_SESSION['username'].'","'.$time.'","'.$_POST['modello'].'","'.$_POST['descrizione'].'","0")';
    if ($connection->query($sql)) {
        echo "good";
    }
    else echo"bad";
}

rename($_POST['imgPost'], $post);
?>