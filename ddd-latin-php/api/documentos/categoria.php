<?php

include '../keypass.php';
include '../servername.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST')
	if (isset($_POST["idCategory"]))
		$idCategory=$_POST["idCategory"];
	else;
else
	if (isset($_GET["idCategory"]))
		$idCategory=$_GET["idCategory"];


if (!isset($idCategory))
{
	echo "{}";
	die;
}


$ch = curl_init("http://".$servername.":8080/Clavy/rest/odamobil/getCatDoc/".$idCategory."?keyclavy=".$PassKey); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);



if ($_SERVER['REQUEST_METHOD'] == 'POST')
		curl_setopt($ch, CURLOPT_POST, 1);


$data = curl_exec($ch);
curl_close($ch);

echo $data;



?>
