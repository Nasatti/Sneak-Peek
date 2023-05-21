<?php
class Post{
    public $id;
    public $foto;
    public $username;
    public $data;
    public $marca;
    public $hashtag;
    public $descrizione;
    public $vendita;
    public $piace;
    public $prefer;
    function __construct($id, $foto, $username, $data, $marca, $hashtag, $descrizione, $vendita, $piace, $prefer)
    {
        $this->id=$id;
        $this->foto=$foto;
        $this->username=$username;
        $this->data=$data;
        $this->marca=$marca;
        $this->hashtag=$hashtag;
        $this->descrizione=$descrizione;
        $this->vendita=$vendita;
        $this->piace=$piace;
        $this->prefer=$prefer;
    }
}
?>