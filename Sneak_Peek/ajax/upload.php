<?php
if (is_array($_FILES)) {
    if (is_uploaded_file($_FILES['file-input']['tmp_name'])) {
        $sourcePath = $_FILES['file-input']['tmp_name'];
        $targetPath = "temp/" . $_FILES['file-input']['name'];
        if (move_uploaded_file($sourcePath, $targetPath)) {
    echo $targetPath;
        }
    }
}
?>