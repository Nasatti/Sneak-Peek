<?php
class Post{
    public $id;
    public $foto;
    public $piace;
    public $prefer;
    public $username;
    public $data;
    public $marca;
    public $hashtag;
    public $descrizione;
    public $vendita;
    function __construct($id, $foto, $piace, $prefer, $username, $data, $marca, $hashtag, $descrizione, $vendita)
    {
        $this->id=$id;
        $this->foto=$foto;
        $this->piace=$piace;
        $this->prefer=$prefer;
        $this->username=$username;
        $this->data=$data;
        $this->marca=$marca;
        $this->hashtag=$hashtag;
        $this->descrizione=$descrizione;
        $this->vendita=$vendita;
    }
}

session_start();
$array = array();
include("connection.php");
$sql = 'SELECT * FROM post';
$response = $connection->query($sql);
    if ($response->num_rows > 0) {
        while($row = $response->fetch_assoc()){
            $post = new Post($row['id'], $row['foto'], $row['piace'], $row['prefer'], $row['username'], $row['data'], $row['marca'], $row['hashtag'], $row['descrizione'], $row['vendita']);
            array_push($array, $post);
        }
    
    }
    echo json_encode($array);
/*echo '<div class="carousel-item active">
        <div class="image_post">
            <a href="'.$username.'">'.$username.'</a>
            <img src="'.$post.'" class="img_post">
        </div>
        <div class="action">
            <button id="like"><i class="bi bi-heart r"></i></button>
            <button id="prefer"><i class="bi bi-star g"></i></button>
            <button><i class="bi bi-chat b"></i></button>
        </div>
          
    </div>';*/
?>