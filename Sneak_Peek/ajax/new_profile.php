<?php
$sourcePath = "../".$_POST['temp'];
$targetPath = "../users/" . $_POST['username']."/user.png";
if(rename("$sourcePath", $targetPath)) {
    echo "users/" . $_POST['username']."/user.png";
}
else {
    echo "fail";
}
?>