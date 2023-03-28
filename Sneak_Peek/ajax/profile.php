<?php
    $path = dirname(__DIR__)."/users";
    $handle = opendir($path."/".$_POST['username']);
    while (false !==($entry = readdir($handle))){
        $img = pathinfo($entry);
        if($img['filename']=="user"){
            echo "./users/".$_POST['username']."/".$img['basename'];
        }
    }
?>   