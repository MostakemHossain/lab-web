$host = "localhost";
$username = "root";
$password = "";
$db = "test";


$conn = mysqli_connect($host, $username, $password, $db);


if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}
