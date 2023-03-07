<?php
session_start();
if(!isset($_SESSION['username'])){
    header("Location:index.php");
}
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
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"
	crossorigin="anonymous"></script>
        <title>Sneak Peek | Home</title>
    </head>
    <body>
        <div name="body">
            <div id="menu">
                <h1 id="title">Sneak Peek</h1>
                <div id="list">
                    <button id="Home" class="btn_list"><i class="bi bi-house"></i>  Home</button><br><br>
                    <button id="Search" class="btn_list" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"><i class="bi bi-binoculars"></i>  Search</button><br><br>
                    <button id="Message" class="btn_list"><i class="bi bi-chat"></i>  Message</button><br><br>
                    <button id="Cart" class="btn_list"><i class="bi bi-cart"></i> Cart</button><br><br>
                    <button id="Post" type="button" class="btn_list" data-bs-toggle="modal" data-bs-target="#PostModal"><i class="bi bi-plus-square"></i>  Post</button><br><br>
                    <button id="Profile" class="btn_list"><i class="bi bi-person"></i>  Profile</button><br><br>
                    <button id="Logout" class="btn_list" onclick="window.location='index.php';"><i class="bi bi-box-arrow-in-left"></i>  Log out</button><br><br>
                </div>

                <div id="search">
                           <div id="search_box" class="search_box" style="width: 200px;">
                                    <h1 id="title" style="font-size: 30px;">Filters</h1>
                                    
                                    <form action="">
                                    <table class="table table-borderless">
                                    <tr>
                                        <td>
                                            <div class="search">
                                                <input type="text" placeholder="Search..." name="q" autocomplete='off'>
                                                <button type="submit"><i class="bi bi-search"></i></button>
                                            </div>
                                            <br><br>
                                        </td>
                                    </tr>
                                    <tr>
                                        <div class="radio">
                                            <td><label><input class="form-check-input" type="radio" name="flexRadioDefault" id="Radio1">  Users</label></td>
                                            <td><label><input class="form-check-input" type="radio" name="flexRadioDefault" id="Radio2">  Shoes</label></td>
                                            <td><label><input class="form-check-input" type="radio" name="flexRadioDefault" id="Radio3">  On Sale</label><br></td>
                                        </div>
                                    </tr>
                                    </table>
                                    <hr class="border border border-light opacity-100">
                                    <div id="r1" class="search_cond">
                                    <br>
                                        <label>Selling User </label>
                                        <input type="checkbox" class="form-check-input me-1"style="width:20px;height:20px;">
                                    </div>
                                    <div id="r2" class="search_cond">
                                        <br>
                                        <label>Number</label><br>
                                        <div class="range">
                                            <div class="sliderValue">
                                              <span id="span1"><p>41</p></span>
                                            </div>
                                            <div class="field">
                                              <div class="value left">36</div>
                                                <input id="ra1" type="range" min="36" max="47" value="100" step="0.5">
                                              <div class="value right">47</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="r3" class="search_cond">
                                    <br>
                                        <label>Number</label><br>
                                        <div class="range">
                                            <div class="sliderValue">
                                              <span id="span2"><p>41</p></span>
                                            </div>
                                            <div class="field">
                                              <div class="value left">36</div>
                                                <input id="ra2" type="range" min="36" max="47" value="100" step="0.5">
                                              <div class="value right">47</div>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                            </div>
                    </div>
            </div>
            <div id="main">
                <!--<div class="container">
                    <form action="" class="search">
                        <input type="text" placeholder="Search..." name="q" autocomplete='off'>
                        <button type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>-->
                <div class="profile">
                <?php
                    $path = getcwd()."/users";

                    $handle = opendir($path."/".$_SESSION['username']);
                    while (false !==($entry = readdir($handle))){

                        $img = pathinfo($entry);
                        if($img['filename']=="user"){
                            echo "<a href='profile.php' class='name' value='b'><img class='prof_img' align='left' src='users/".$_SESSION['username']."/".$img['basename']."'> ".$_SESSION['username']."</a>";
                        }
                    }
                ?>            
                </div>
                <div id="Page" class="page">
                    <div id="home" class="home">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                          <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="image_post">
                                  <img src="img/user.png" class="img_post" height="450">
                                    <div class="action">
                                        <button id="like"><i class="bi bi-heart r"></i></button><!-- <i class="bi bi-heart-fill"></i> -->
                                        <button id="prefer"><i class="bi bi-star g"></i></button><!-- <i class="bi bi-star-fill"></i> -->
                                        <button><i class="bi bi-chat b"></i></button>
                                    </div>
                                    <div class="info">
                                        <div class="us">
                                            <!-- username -->
                                        </div>
                                        <div class="comm">
                                            <!-- info on shoes -->
                                        </div>
                                    </div>
                                  </div>
                            </div>
                            <?php
                            //con ajax metti nupvi post
                            ?>
                          </div>
                          <button class="carousel-control-prev next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                    </div>
                    
                    <div id="message" class="home" style="display:none">
                        <p>ao</p>
                    </div>
                    <div id="cart" class="home" style="display:none">
                        <p>ao</p>
                    </div>
                    <div id="post" class="home">
                    <div class="modal fade" id="PostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                          <div class="modal-body">
                          <div class="modal-content" style="background-color:transparent;border:transparent">
                                <div class="container" id="div_upload">
                                <h1>File Uploader</h1>
                                    <div class="form__container">
                                       <form action="upload.php.php" class="form" id="post-form">
                                          <input type="file" name="file-input" id="file-input" hidden value="Choose photo"/>
                                          <input type="submit" value="Upload" class="btn-upload" hidden id="upload_submit"/>
                                          <i class='bx bx-cloud-upload icon'></i>
                                        </form>
                                        <script type="text/javascript">

                                        const form = document.getElementById('post-form'),
                                        fileInput = document.getElementById('file-input'),
                                        progressArea = document.getElementById('progress-area'),
                                        uploadedArea = document.getElementById('uploaded-area');
                                        var upload_submit = document.getElementById('upload_submit');
                                        var ifRunning = false;

                                        // form click Event
                                        form.addEventListener("click", () => {
                                        
                                            fileInput.click();
                                            
                                            
                                        })

                                        fileInput.onchange = (e) => {
                                            upload_submit.click();
                                            document.getElementById("div_upload").style.display="none";
                                            document.getElementById("div_post").style.display="block";
                                        }

                                        $(document).ready(function (e) {         
                                        	$("#post-form").on('submit',(function(e) {
                                        		e.preventDefault();
                                        		$.ajax({
                                                	url: "upload.php",
                                        			type: "POST",
                                        			data:  new FormData(this),
                                        			contentType: false,
                                            	    cache: false,
                                        			processData: false,
                                        			success: function(data)
                                        		    {
                                        				var file_path = data;
                                                        console.log(data);
                                                        document.getElementById("down_post").src=data;
                                                        console.log(data);
                                        		    },
                                        		  	error: function(data)
                                        	    	{
                                        		  	  console.log("error");
                                                      console.log(data);
                                        	    	}
                                        	   });
                                        	}));
                                        });
                                    </script>
                                    <section class="progress-area" id="progress-area">
                                    </section>
                                    <section class="uploaded-area" id="uploaded-area">
                                    </section>
                                    </div>
                                </div>
                                <div class="container" id="div_post" style="display:none">
                                <form>
                                <h1>Post Image</h1>
                                    <img id="down_post" src="" class="down_post">
                                    <input type="submit">
                                    <button id="Back">Back</button>
                                </form>
                                </div>
                            </div>
                          </div>
                    </div>

        <!-- js -->
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
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script>
            var username = "<?= $_SESSION['username']?>"
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
