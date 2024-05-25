<?php
require("./database_connection.php");
$username = $_POST['email'];
$check_username = "SELECT username FROM users WHERE username = '$username'";
$response_username = $db->query($check_username);

if($response_username->num_rows != 0) {
    echo "user found";
}
else {
    echo "user not found";
}
?>