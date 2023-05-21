<?php
$path = dirname(__DIR__)."/users";
$handle = opendir($path."/".$_POST['username']);
while (false !==($entry = readdir($handle))){
    $img = pathinfo($entry);
    if($img['filename']=="user"){
        $delete_img = "../users/".$_POST['username']."/".$img['basename'];
        if(!unlink($delete_img)) echo "fail";
        else{
            $sourcePath = "../".$_POST['temp'];
            $targetPath = "../users/" . $_POST['username']."/user.png";
            if(rename("$sourcePath", $targetPath)) {
                echo "users/" . $_POST['username']."/user.png";
            }
            else {
                echo "fail";
            }
        }
    }
}
?>