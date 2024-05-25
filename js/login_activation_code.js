$(document).ready(function() {
   $("#login-active-btn").click(function() {
        $.ajax({
           type: "POST",
           url: "./php/login_activation_code.php",
           data: {
            code: $("#login-active-input").val(),
            email: $("#login-email").val(),
            password: $("#login-password").val()
           },
           success: function(res) {
           if(res.trim() == "yes") {
            window.location = "./profile/profile.php";
           }
           else {
            $("#login-activation-error").fadeIn(500);
            setTimeout(function() {
            $("#login-activation-error").fadeOut();
            });
           }
           } 
        });
   });
});