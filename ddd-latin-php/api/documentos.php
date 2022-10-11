<?php

include 'keypass.php';
include 'servername.php';

$ch = curl_init("http://".$servername.":8080/Clavy/rest/odamobil/getdoc?keyclavy=".$PassKey); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

echo $data;

?>
