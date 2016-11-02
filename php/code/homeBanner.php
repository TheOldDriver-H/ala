<?php

	$mysql = new mysqli("localhost","root","","ala");
	if ($mysql->connect_errno) {
	die($mysql->connect_errno);
	};
	$mysql->query("set names utf8");
	$sqlstr = "select * from homeBanner";
	$result = $mysql->query($sqlstr);
	$myArray = array();
	while ($record = $result->fetch_assoc()) {
	array_push($myArray,$record);
	};
	$a = json_encode($myArray);
	echo $a;




?>
