<?php

include 'keypass.php';

$ch = curl_init("http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCat?keyclavy=".$PassKey); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

echo $data;

?>
