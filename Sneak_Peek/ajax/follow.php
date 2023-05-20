<?php
$timestamp = date('Y-m-d H:i:s', time());
include("../php/connection.php");
$sql = $connection->prepare("INSERT INTO follow (follower, followed, data) VALUES (?, ?, ?)");
$sql->bind_param("sss", $_POST["follower"], $_POST["followed"], $timestamp);
if($sql->execute()) echo json_encode("follow");
else echo json_encode("error");
$sql->close();
?>
```