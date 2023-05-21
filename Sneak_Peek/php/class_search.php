<?php
class Search{
    public $username;
    public $id;
    public $modello;
    public $foto;

    function __construct($username, $id, $modello, $foto)
    {
        $this->username=$username;
        $this->id=$id;
        $this->modello=$modello;
        $this->foto=$foto;
    }
}
?>