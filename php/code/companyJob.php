<?php
  $id1 = $_GET["id1"];
  $id2 = $_GET["id2"];

  $mysql = new mysqli("localhost","root","","ala");
  if ($mysql->connect_errno) {
    die($mysql->connect_errno);
  };
  $mysql->query("set names utf8");
  $sqlstr = "select * from companyJob where id between $id1 and $id2";
  // $sqlstr = "select * from companyRelations where id between 1 and 6";
  $result = $mysql->query($sqlstr);
  $myArray = array();
  while ($record = $result->fetch_assoc()) {
    array_push($myArray,$record);
  };
  $a = json_encode($myArray);
  echo ($a);




 ?>
