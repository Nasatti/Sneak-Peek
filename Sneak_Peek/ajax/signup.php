<?php
include("connection.php");                              
if(isset($_POST['email'])){
    $sql = 'INSERT INTO credenziali (username, nome, cognome, data, email, password) VALUES ("'.$_POST['username'].'","'.$_POST['nome'].'","'.$_POST['cognome'].'","'.$_POST['data'].'","'.$_POST['email'].'","'.md5($_POST['password']).'")';
    if ($connection->query($sql)) {
        mkdir("../users/".$_POST['username']);
        $img = "../img/user.png";
        $newimg = "../users/".$_POST['username']."/user.png";
        copy($img, $newimg);
        echo "success";
    }
    else{
        echo "error";
    }
}
?>