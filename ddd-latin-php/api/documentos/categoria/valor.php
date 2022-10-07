<?php

include '../../keypass.php';


if ($_SERVER['REQUEST_METHOD'] == 'POST')
	if (isset($_POST["idCategory"])&&isset($_POST["val"]))
	{
		$idCategory=$_POST["idCategory"];
		$val=$_POST["val"];
		
		$ch = curl_init("http://clavy.fdi.ucm.es:8080/Clavy/rest/odamobil/getCatDoc/".$idCategory."/".$val."?keyclavy=".$PassKey); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_POST, 1);


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




		



?>
