<?php
	include 'database.php';
	if(isset($_POST['submit']))
	{
		$name = $_POST['entry.1730294918'];
		$email = $_POST['entry.914920670'];
		$password = $_POST['entry.327827235'];
		$chk="";
		// foreach ($variable as $key => $value) {
		// 	# code...
		// }
		$sql=`INSERT INTO sanvimedicalusers(Name,Email,Password) VALUES ('$name','$email','$password')`;
		if(mysqli_query($con,$sql))
		{
			echo "<script>alert('New Record')</script>";
		}
		else{
			echo "error:".mysqli_error($con);
		}
		mysqli_close($con);
	}
?>