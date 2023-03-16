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
echo '<div class="carousel-item active">
        <div class="image_post">
            <a href="'.$username.'">'.$username.'</a>
            <img src="'.$post.'" class="img_post">
        </div>
        <div class="action">
            <button id="like"><i class="bi bi-heart r"></i></button>
            <button id="prefer"><i class="bi bi-star g"></i></button>
            <button><i class="bi bi-chat b"></i></button>
        </div>
          
    </div>';
?>