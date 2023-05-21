<?php
if(isset($_POST['user']) && isset($_POST['psw'])){
	$user = htmlspecialchars($_POST['user'], ENT_QUOTES, 'UTF-8');
	$password = htmlspecialchars($_POST['psw'], ENT_QUOTES, 'UTF-8');
	include("../php/connection.php");
	$sql = $connection->prepare("SELECT * FROM credenziali WHERE username=?");
	$sql->bind_param("s", $user);
	$sql->execute();
	$response = $sql->get_result();
	if ($response->num_rows > 0) {
		$data = $response->fetch_assoc();
  		if (password_verify($password, $data['password'])) {
		    $headers = array('alg'=>'HS256','typ'=>'JWT');
		    $payload = array('username'=>$data['username'], 'nome'=>$data['nome'], 'cognome'=>$data['cognome'], 'data'=>$data['data'], 'email'=>$data['email'],'exp'=>(time() + 3600));
		    $jwt = generate_jwt($headers, $payload);
			
			// Impostiamo la durata del cookie in secondi (un'ora in questo caso)
			$expires = time() + 3600;
			// Impostiamo il nome del cookie
			$name = "Token";
			// Impostiamo il percorso del cookie (tutta la root del dominio)
			$path = "/";
			// Impostiamo l'host del cookie (il dominio del sito)
			$domain = $_SERVER['HTTP_HOST'];
			// Impostiamo l'attributo HttpOnly a true
			$httponly = true;
			// Impostiamo il cookie con la funzione setcookie
			setcookie($name, $jwt, $expires, $path, $domain, true, $httponly);

			echo $jwt;
		}
		else{
			echo "errore1";
		}
	}
	else {
		echo "errore2";
	}
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