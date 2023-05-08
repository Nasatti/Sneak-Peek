<?php
if (is_array($_FILES)) {
    if (is_uploaded_file($_FILES['show_Mod']['tmp_name'])) {
        $sourcePath = $_FILES['show_Mod']['tmp_name'];
        $targetPath = "../temp/" . $_FILES['show_Mod']['name'];
        $file = "temp/" . $_FILES['show_Mod']['name'];
        if (move_uploaded_file($sourcePath, $targetPath)) {
    echo $file;
        }
    }
}
?>