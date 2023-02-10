<?php
session_start();
/*if(!isset($_SESSION['username'])){
    header("Location:login.php?error=accesso");
}*/
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link href="style/styles.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded&display=swap" rel="stylesheet">
        <title>Sneak Peek</title>
    </head>
    <body>
        <div name="body">
            <div id="menu">
                <h1 id="title">Sneak Peek</h1>
                <div id="list">
                    <button id="Home" class="btn_list"><i class="bi bi-house"></i>  Home</button><br><br>
                    <button id="Search" class="btn_list"><i class="bi bi-binoculars"></i>  Search</button><br><br>
                    <button id="Message" class="btn_list"><i class="bi bi-chat"></i>  Message</button><br><br>
                    <button id="Notifictions" class="btn_list"><i class="bi bi-bell"></i> Notifictions</button><br><br>
                    <button id="Post" class="btn_list"><i class="bi bi-plus-square"></i>  Post</button><br><br>
                    <button id="Profile" class="btn_list"><i class="bi bi-person"></i>  Profile</button><br><br>
                    <button id="Logout" class="btn_list" onclick="window.location='index.php';"><i class="bi bi-box-arrow-in-left"></i>  Log out</button><br><br>
                </div>
            </div>
            <div id="main">
                <div class="container">
                    <form action="" class="search">
                        <input type="text" placeholder="Search..." name="q">
                        <button type="submit"><i class="bi bi-x-circle"></i></button>
                    </form>
                </div>
                <!--<div class="profile">
                <?php/*
                    $path = getcwd();
                    $handle = opendir($path."/".$_SESSION['username']);
                    while (false !==($entry = readdir($handle))){

                        $img = pathinfo($entry);
                        if($img['filename']=="user"){
                            echo "<a href='profile.php' class='name' value='b'><img class='prof_img' align='left' src='".$_SESSION['username']."/".$img['basename']."'> ".$_SESSION['username']."</a>";
                        }
                    }*/
                ?>            
                </div>-->
                <div id="Page" class="page">
                    <div id="home" class="home">
                        <p>ao</p>
                    </div>
                    <div id="search" class="home" style="display:none">
                        <p>aaa</p>
                    </div>
                    <div id="message" class="home" style="display:none">
                        <p>ao</p>
                    </div>
                    <div id="notification" class="home" style="display:none">
                        <p>ao</p>
                    </div>
                    <div id="post" class="home" style="display:none">
                        <p>ao</p>
                    </div>
                    <div id="profile" class="home" style="display:none">
                        <p>ao</p>
                    </div>
                    <div id="logout" class="home" style="display:none">
                        <p>ao</p>
                    </div>
            </div>
            </div>
        </div>
        <script src="script/script_home.js"></script>
        <script>
        /*var Log_in document.getElementById("Log_in");
        log_in.addEventListener("click", function(){
            $.ajax({
                url: "ajax/ajax_login.php",
                data: { regione: valueRegione},
                type: "GET",
                dataType: "json",
                success: function(data){
                    for (var i = 0; i < data.length; i++) {
                      var option = document.createElement("option");
                      option.value = data[i].id;
                      option.text = data[i].nome;
                      selectParco.appendChild(option);
                    }
                }
            });
        });*/
    </script>
    </body>

</html>
