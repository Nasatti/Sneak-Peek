<?php include "functions.php"; 
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles_login.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link href="styles.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet">
        <title>Login</title>
    </head>
    <body>
        <div id="menu">
            <h1 id="title">Sneak Peek</h1>
            <div id="list">
                <button class="btn_list" id="Log_in"><i class="bi bi-box-arrow-in-left"></i> Log in</button><br><br>
                <a href="./index.php"><button class="btn_list"><i class="bi bi-arrow-return-left"></i> Back</button></a><br><br>
            </div>
        </div><br>
        <div id="form"></div>
        <?php
        $ip = '127.0.0.1';
        $username = 'root';
        $pwd = '';
        $database ='credenziali';
        $connection= new mysqli($ip, $username, $pwd, $database);
        if($connection->connect_error){
            die('c\è stato un errore: '.$connection->connect_error);
        }

        if(isset($_POST['em']) and isset($_POST['psw'])){
            $email = $_POST['em'];
            $password = $_POST['psw'];
            $sql = 'SELECT * FROM credentials WHERE email="'.$email.'" AND password="'.md5($password).'";';
            $response = $connection->query($sql);
            if ($response->num_rows > 0) {
                $data = $response->fetch_array();
                $_SESSION['nome']=$data['nome'];
                $_SESSION['cognome']=$data['cognome'];
                $_SESSION['email']=$data['email'];
                $_SESSION['password']=$data['password'];
                header('Location: dashboard.php');
            }
            else {
                echo '<div class="alert alert-danger my-4">Credenziali sbagliate</div>';
            }
        }
        else if(isset($_POST['email'])){
            $nome = $_POST['nome'];
            $cognome = $_POST['cognome'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            
            $sql = 'INSERT INTO credentials (email, password, nome, cognome) VALUES ("'.$_POST['email'].'","'.md5($_POST['password']).'", "'.$_POST['nome'].'", "'.$_POST['cognome'].'")';
            echo $sql;
            if ($connection->query($sql)) {
                header('Location: index.php?error=none');
            }
        }
        else if(isset($_GET['error'])){
            if ($_GET['error'] == 'credenziali') {
                echo '<div class="alert alert-danger" role="alert">Login incoretto!</div>';
            }
        }
        
        ?>
    <script src="script.js"></script>
    </body>
</html>