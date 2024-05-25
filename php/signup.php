<?php
require("./database_connection.php");
$fullname = $_POST['fullname'];
$username = $_POST['email'];
$password = $_POST['password']; 

$pattern = "Q1A23ZXSWEDC45RFVGT67YH45YHNMJUKI4G567H2D4F6H7J7M8I9LV56N78MW3123THF";
$length = strlen($pattern)-1;
$code = [];
for($i=0; $i<6; $i++) {
     $index_value = rand(0,$length);
     $code[] = $pattern[$index_value];
}
 $final_code = implode($code);

$response_mail = mail($username, "Profile Activation Code", "Thanks for choosing us. Your Activation Code is : ".$final_code);
if($response_mail == true) {

    $store_data = "INSERT INTO users(fullname, username, password, activation_code) VALUES('$fullname', '$username', '$password', '$final_code')";
    if($db->query($store_data)) {
        echo "signup success";
    }
    else {
        echo "signup failed";
    }
}
else {
    echo "Something went wrong. Try again later.";

}
?>