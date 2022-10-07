<?php

include 'keypass.php';

if (!isset($_GET["idDoc"]))
{
	echo "{}";
	die;
}

$ch = curl_init("http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getdoc/".$_GET["idDoc"]."?keyclavy=".$PassKey); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

echo $data;

?>
