<?php
function is_jwt_valid($jwt, $secret = 'secret') {
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
$is_jwt_valid = is_jwt_valid("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpY2NhcmRvLm5hc2F0dGkiLCJub21lIjoiUmljY2FyZG8iLCJjb2dub21lIjoiTmFzYXR0aSIsImRhdGEiOiIyMDA0LTEwLTE5IiwiZW1haWwiOiJyaWNjYXJkb25hc2F0dGlAZ21haWwuY29tIiwiZXhwIjoxNjc5NjYyMTczfQ.W8gJjZ7qL429_9v_wknIpKYuuahkLjwUhd8FznLnzqc");

if($is_jwt_valid === TRUE) {
	echo json_decode(base64_decode(str_replace('_', '/', str_replace('-','+',explode('.', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpY2NhcmRvLm5hc2F0dGkiLCJub21lIjoiUmljY2FyZG8iLCJjb2dub21lIjoiTmFzYXR0aSIsImRhdGEiOiIyMDA0LTEwLTE5IiwiZW1haWwiOiJyaWNjYXJkb25hc2F0dGlAZ21haWwuY29tIiwiZXhwIjoxNjc5NjYyMTczfQ.W8gJjZ7qL429_9v_wknIpKYuuahkLjwUhd8FznLnzqc")[1]))));
} else {
	echo 'JWT is invalid';
}
function base64url_encode($str) {
    return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
}
?>