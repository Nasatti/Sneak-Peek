<?php
class Chat{
    public $id;
    public $us_mit;
    public $us_dest;
    public $msg;
    public $data;

    function __construct($id, $us_mit, $us_dest, $msg, $data)
    {
        $this->id=$id;
        $this->us_mit=$us_mit;
        $this->us_dest=$us_dest;
        $this->msg=$msg;
        $this->data=$data;
    }
}
?>