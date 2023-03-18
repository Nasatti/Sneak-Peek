<?php
session_start();
session_destroy();
session_start();
include("connection.php");
if(isset($_POST['user']) and isset($_POST['psw'])){ 
    $user = $_POST['user'];
    $password = $_POST['psw'];
    $sql = 'SELECT * FROM credenziali WHERE username="'.$user.'" AND password="'.md5($password).'";';
    $response = $connection->query($sql);
    if ($response->num_rows > 0) {
        
        $data = $response->fetch_array();
        $_SESSION['nome']=$data['nome'];
        $_SESSION['cognome']=$data['cognome'];
        $_SESSION['email']=$data['email'];
        $_SESSION['password']=$data['password'];
        $_SESSION['data']=$data['data'];
        $_SESSION['username']=$data['username'];
        header("Location: home.php");
    }
    else {
        header('Location: index.php?error=credenziali');
    }
}
else if(isset($_POST['email'])){
    $sql = 'INSERT INTO credenziali (username, nome, cognome, data, email, password) VALUES ("'.$_POST['username'].'","'.$_POST['nome'].'","'.$_POST['cognome'].'","'.$_POST['data'].'","'.$_POST['email'].'","'.md5($_POST['password']).'")';
    if ($connection->query($sql)) {
        mkdir("./users/".$_POST['username']);
        $img = "img/user.png";
        $newimg = "./users/".$_POST['username']."/user.png";
        copy($img, $newimg);
        header('Location: index.php');
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="icon" href="./img/Icon.ico">        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link href="style/styles.css" rel="stylesheet">
        <link href="style/styles_login.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet">
        <title>Sneak Peek | Login</title>
    </head>
    <body>
        <div name="body">
            <div id="menu">
                <img src="./img/Icon.jpg" id="titolo" height="150px" width="150px">
                <div id="list">
                    <button class="btn_list"><i class="bi bi-house"></i>  Home</button><br><br>
                    <button class="btn_list"><i class="bi bi-binoculars"></i>  Search</button><br><br>
                    <button class="btn_list"><i class="bi bi-chat"></i>  Message</button><br><br>
                    <button class="btn_list"><i class="bi bi-cart"></i> Cart</button><br><br>
                    <button class="btn_list"><i class="bi bi-plus-square"></i>  Post</button><br><br>
                    <button class="btn_list"><i class="bi bi-person"></i>  Profile</button><br><br>
                </div>
            </div>
            <div id="main">
                <div class="log_center">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn_login" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Login
                    </button>   
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                          <div class="modal-body">
                          <div class="modal-content center_form">
                            <div id="log_in">
                            <form method='POST' action='index.php'>
                                    <h1  style='font-family: Impact, Charcoal, sans-serif;'>LOG IN</h1>
                                    <input type='text' name='user' placeholder='Username' required >
                                    <input type='password' name='psw' placeholder='Password' required>
                                    <input type='submit' style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' cursor="pointer" class='sign_up' value='Log in'>
                                    <p style="font-family: 'Unbounded', cursive; font-size:15px">Non ti sei ancora registrato?<button id="Log_in" style="border:none; background:transparent;color:White"><b>Registrati</b></button></p>
                                </form>
                                
                            </div>
                            <div id="sign_up" style="display: none;">
                                <form method='POST' action='index.php'>
                                    <h1 style='font-family: Impact, Charcoal, sans-serif;'>SIGN UP</h1>
                                    <div class='wrapper'>
                                        <div class='item1'>
                                            <input type='text' name='nome' placeholder='Nome' required autocomplete='off'>
                                        </div>
                                        <div class='item2'>
                                            <input type='text' name='cognome' placeholder='Cognome' required autocomplete='off'>
                                        </div>
                                        <div class='item3'>
                                            <input type='email' name='email' placeholder='Email' autocomplete='off' required>
                                        </div>
                                        <div class='item4'>
                                            <input type='password' name='password' placeholder='Password' required autocomplete='off'>
                                        </div>
                                        <div class='item5' >
                                            <input type='text' name='username' placeholder='Username' required autocomplete='off'>
                                        </div>
                                        <div class='item6'>
                                            <input type='date' name='data' required autocomplete='off'>
                                        </div>
                                        <div class='item7'>
                                            <input type='submit' style='font-family: Impact, Charcoal, sans-serif; font-size:20px;' class='sign_up' value='Sign up'>
                                        </div>
                                    </div>
                                    <br><p style="font-family: 'Unbounded', cursive; font-size:15px">Ti sei già registrato?<button id="Sign_up" style="border:none; background:transparent;color:White"><b>Loggati</b></button></p>
                                </form>
                            </div>
                          </div>
                      </div>
                    </div>
            </div>
            <?php
            if(isset($_GET['error'])){
                if ($_GET['error'] == 'credenziali') {
                    echo '<div class="alert alert-danger errore" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Login incoretto!</div>';
                }
                if ($_GET['error'] == 'accesso') {
                    echo '<div class="alert alert-danger errore" role="alert"><i class="bi bi-exclamation-triangle-fill"></i> Effettuare il login!</div>';
                }
            }
        ?>
            <div class="Image_login">
                <img src="./img/jordan.jpg" width="400px" height="500px">
            </div>
        </div>
        <script src="script/script_login.js"></script>
    </body>
</html>
