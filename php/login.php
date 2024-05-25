<?php
require("./database_connection.php");

$username = $_POST['email'];
$password = $_POST['password'];

$check_password = "SELECT username, password FROM users WHERE username = '$username' AND password = '$password'";
$response_password = $db->query($check_password);

if($response_password->num_rows != 0) {
    $check_status = "SELECT status, username FROM users WHERE status = 'pending' AND username = '$username'";
    $response_status = $db->query($check_status);

    if($response_status->num_rows != 0) {
        $get_code = "SELECT activation_code FROM users WHERE username = '$username' AND password = '$password'";
        $response_code = $db->query($get_code);
        $data = $response_code->fetch_assoc();
        $final_code = $data['activation_code'];
        
        $check = mail($username, "Profile Activation code", "Your Activation Code is : ".$final_code);
        if($check == true) {
            echo "login pending";
        }
        else {
            echo "Something went wrong";
        }

    }
    else {
    echo "login success";

    }

}
else {
    echo "incorrect password";
}


?>