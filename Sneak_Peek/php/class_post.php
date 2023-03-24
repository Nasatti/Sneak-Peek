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
?>