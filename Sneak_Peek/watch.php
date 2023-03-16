<?php
session_start();
include("connection.php");
$sql = 'SELECT * FROM post';
$response = $connection->query($sql);
    if ($response->num_rows > 0) {
        $data = $response->fetch_array();
        $post = $data['foto'];
        $username = $data['username'];
    }
echo '<div class="carousel-item active" data-bs-interval="10000" >
        <div class="image_post">
            <a href="'.$username.'">'.$username.'</a>
            <img src="'.$post.'" class="img_post">
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
    </div>';
?>