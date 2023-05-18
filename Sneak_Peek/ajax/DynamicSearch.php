<?php
include("../php/connection.php");
include("../php/class_search.php");
$array = array();
$scelta = $_POST['scelta'];
if($scelta==0){
$sql = 'SELECT * FROM credenziali WHERE username LIKE "%'.$_POST['search'].'%" OR nome LIKE "%'.$_POST['search'].'%" OR cognome LIKE "%'.$_POST['search'].'%" OR email LIKE "%'.$_POST['search'].'%"';
}
elseif($scelta==1){
$sql = 'SELECT * FROM credenziali WHERE username LIKE "%'.$_POST['search'].'%" OR nome LIKE "%'.$_POST['search'].'%" OR cognome LIKE "%'.$_POST['search'].'%"';
}
elseif($scelta==2){
$sql = 'SELECT * FROM post WHERE marca LIKE "%'.$_POST['search'].'%" OR hashtag LIKE "%'.$_POST['search'].'%" OR descrizione LIKE "%'.$_POST['search'].'%"';
}
elseif($scelta==3){
$sql = 'SELECT * FROM post WHERE (marca LIKE "%'.$_POST['search'].'%" OR hashtag LIKE "%'.$_POST['search'].'%" OR descrizione LIKE "%'.$_POST['search'].'%") AND vendita="1"';
}
$response = $connection->query($sql);
if ($response->num_rows > 0) {
    if($scelta==1){
	    while($row = $response->fetch_assoc()){
            $search = $row['username'];
            array_push($array, $search);
        }
    }
    elseif($scelta==2 || $scelta==3){
        while($row = $response->fetch_assoc()){
            $search = new Search($row['username'], $row['id'], $row['marca']);
            array_push($array, $search);
        }
    }

}
echo json_encode($array);
?>