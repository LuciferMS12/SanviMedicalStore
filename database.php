<?php
    $servername = "localhost";
    $user = "root";
    $pass = "";
    $database = "sanvimedicalstar";
    $con = mysqli_connect($servername, $user, $pass,$database);
    if(!$con)
    {
        die("Error Deleting record: ".mysqli_error($con));
    }
?>