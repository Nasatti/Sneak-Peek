<?php
// if(isset($_POST['user'])){
	$user = $_POST['user'];
	$password = $_POST['psw'];
	include("../php/connection.php");
	$sql = 'SELECT * FROM credenziali WHERE username="'.$user.'" AND password="'.md5($password).'";';
	$response = $connection->query($sql);
	if ($response->num_rows > 0) {
	
	    $data = $response->fetch_array();
	    $headers = array('alg'=>'HS256','typ'=>'JWT');
	    $payload = array('username'=>$data['username'], 'nome'=>$data['nome'], 'cognome'=>$data['cognome'], 'data'=>$data['data'], 'email'=>$data['email'],'exp'=>(time() + 3600));
	    $jwt = generate_jwt($headers, $payload);
		echo $jwt;
	}
	else {
		echo "errore";
	}

function base64url_encode($str) {
    return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
}

function generate_jwt($headers, $payload, $secret = 'sneakpeek123') {
	$headers_encoded = base64url_encode(json_encode($headers));
	
	$payload_encoded = base64url_encode(json_encode($payload));
	
	$signature = hash_hmac('SHA256', "$headers_encoded.$payload_encoded", $secret, true);
	$signature_encoded = base64url_encode($signature);
	
	$jwt = "$headers_encoded.$payload_encoded.$signature_encoded";
	return $jwt;
}
?>