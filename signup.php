<?php
 include "connect.php";
$email = $_POST["email"];
$pass = $_POST["password"];
$name = $_POST["name"];
$phone = $_POST["phone"];

$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO login (name,email,phone, password) VALUES ('$name','$email','$phone','$hashed_pass')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);

?>