<?php

include 'keypass.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST')
	if (isset($_POST["idCategory"]))
	{
		
		$data = stream_get_contents(STDIN);
		
		
		$idCategory=$_POST["idCategory"];
		
		$ch = curl_init("http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCat/".idCategory."?keyclavy=".$PassKey); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);


$data = curl_exec($ch);
curl_close($ch);

echo $data;


	}
	else{
		echo "{}";
		die;
	}
else
{
	echo "{}";
	die;
}






$ch = curl_init("http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCat/" + idCategory +  "?keyclavy=".$PassKey); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);



if ($_SERVER['REQUEST_METHOD'] == 'POST')
		curl_setopt($tuCurl, CURLOPT_POST, 1);


$data = curl_exec($ch);
curl_close($ch);

echo $data;



?>
