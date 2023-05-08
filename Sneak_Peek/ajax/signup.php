<?php
include("../php/connection.php");                              
if(isset($_POST['email'])){
    $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
    $username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
    $nome = htmlspecialchars($_POST['nome'], ENT_QUOTES, 'UTF-8');
    $cognome = htmlspecialchars($_POST['cognome'], ENT_QUOTES, 'UTF-8');
    $data = htmlspecialchars($_POST['data'], ENT_QUOTES, 'UTF-8');
    $password = htmlspecialchars($_POST['password'], ENT_QUOTES, 'UTF-8');
    $hash = password_hash($password, PASSWORD_DEFAULT);
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $sql = 'INSERT INTO credenziali (username, nome, cognome, data, email, password) VALUES ("'.$username.'","'.$nome.'","'.$cognome.'","'.$data.'","'.$email.'","'.$hash.'")';
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
    else{
        echo "error";
    }
}
?>