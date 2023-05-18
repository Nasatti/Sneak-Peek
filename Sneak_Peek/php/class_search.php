<?php
class Search{
    public $username;
    public $id;
    public $modello;

    function __construct($username, $id, $modello)
    {
        $this->username=$username;
        $this->id=$id;
        $this->modello=$modello;
    }
}
?>