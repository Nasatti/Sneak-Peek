<?php
if(isset($_COOKIE["Token"])){
	$tokenParts = explode('.', $_COOKIE["Token"]);
	$payload = base64_decode($tokenParts[1]);
	$verify = Is_jwt_valid($_COOKIE["Token"]);
	echo json_encode(array("verify" => $verify, "payload" => $payload));
}
else{
	echo json_encode(array("verify" => FALSE, "payload" => ""));
}
function is_jwt_valid($jwt, $secret = 'sneakpeek123') {
	// split the jwt
	$tokenParts = explode('.', $jwt);
	$header = base64_decode($tokenParts[0]);
	$payload = base64_decode($tokenParts[1]);
	$signature_provided = $tokenParts[2];

	// check the expiration time - note this will cause an error if there is no 'exp' claim in the jwt
	$expiration = json_decode($payload)->exp;
	$is_token_expired = ($expiration - time()) < 0;

	// build a signature based on the header and payload using the secret
	$base64_url_header = base64url_encode($header);
	$base64_url_payload = base64url_encode($payload);
	$signature = hash_hmac('SHA256', $base64_url_header . "." . $base64_url_payload, $secret, true);
	$base64_url_signature = base64url_encode($signature);

	// verify it matches the signature provided in the jwt
	$is_signature_valid = ($base64_url_signature === $signature_provided);
	if ($is_token_expired || !$is_signature_valid) {
		return FALSE;
	} else {
		return TRUE;
	}
}

function base64url_encode($str) {
    return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
}
?>