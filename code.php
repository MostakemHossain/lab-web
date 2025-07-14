<?php
 include "connect.php"
$email = $_POST["email"];
$pass = $_POST["password"];

$hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO login (email, password) VALUES ('$email', '$hashed_pass')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);

?>