<?php
$db = new mysqli("localhost", "root", "", "signup_login");
if($db->connect_error) {
    die ("connection failed");
}

?>