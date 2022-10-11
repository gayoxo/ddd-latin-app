<?php

include '../keypass.php';
include '../servername.php';



if ($_SERVER['REQUEST_METHOD'] == 'POST')
	if (isset($_GET["idCategory"]))
	{
		
		$data = file_get_contents('php://input');
		
		
		$idCategory=$_GET["idCategory"];
		
		$ch = curl_init("http://".$servername.":8080/Clavy/rest/odamobil/getCat/".$idCategory."/valor?keyclavy=".$PassKey); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	curl_setopt($ch, CURLOPT_HTTPHEADER,
    array(
        'Content-Type:application/json',
        'Content-Length: ' . strlen($data)
    )
	);


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
