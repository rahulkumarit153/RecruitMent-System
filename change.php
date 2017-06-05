<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>

<body>
<?php
$mysql_host="localhost";
$mysql_user="root";
$mysql_password="qwerty";
$mysql_database="rahul";

$bd=mysql_connect($mysql_host,$mysql_user,$mysql_password) or die("Connection Is Fail");
mysql_select_db($mysql_database,$bd);

$uid=$_POST['uid'];
$pwd=$_POST['pwd'];

$sql="Select * from form1 where user_id='$uid' and password='$pwd' ";
$result=mysql_query($sql);
$rows=mysql_num_rows($result);
if($rows==0)
		{
		echo "Incorrect UserId or Passwod";	
		}
else
	{
	$npwd=$_POST['npwd'];
	$rnpwd=$_POST['rnpwd'];
	if($npwd==$rnpwd)
		{
			$sql="Update form1 set password='$npwd' where user_id='$uid' ";
			$rs=mysql_query($sql);
			if($rs)
				echo "password changed";
		}
	}

?>
</body>
</html>