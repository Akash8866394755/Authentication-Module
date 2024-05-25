<?php
require("./database_connection.php");
$code = $_POST['code'];
$email = $_POST['email'];
$password = $_POST['password'];
$check_code = "SELECT activation_code, username, password FROM users WHERE activation_code = '$code' AND username = '$email' AND password = '$password'";

$response_code = $db->query($check_code);

if($response_code->num_rows != 0) {
    $update_status = "UPDATE users SET status = 'active' WHERE username = '$email' AND password = '$password'";
    if($db->query($update_status)) {
        echo "yes";

    }
}
else {
    echo "wrong code";
}
?>