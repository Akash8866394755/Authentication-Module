$(document).ready(function() {
   $("#login-btn").click(function(e) {
    e.preventDefault();
     $.ajax({
        type: "POST",
        url: "./php/login.php",
        data: {
            email: $("#login-email").val(),
            password: $("#login-password").val()
        },
        beforeSend: function() {
         $("#login-btn").text("Processing..");
         $("#login-btn").attr("disabled", "disabled");
         $("#login-btn").css({cursor: "not-allowed"});
        },
        success: function(res) {
           if(res.trim() == "incorrect password") {
            $("#login-password-message").fadeIn(500);
            setTimeout(function() {
            $("#login-password-message").fadeOut(500);

            }, 2000);
           }
           else if(res.trim() == "login success") {
            window.location = "./profile/profile.php";
           }
           else if(res.trim() == "login pending") {
            $("#login-card").fadeOut(500, function() {
                $("#login-activation-box").fadeIn(700);
            })
           }
           else {

            $("#internet-error").fadeIn(500);
            setTimeout(function() {
            $("#internet-error").fadeOut(500);

            },2000);
           }
           $("#login-btn").text("Login");
           $("#login-btn").removeAttr("disabled");
           $("#login-btn").css({cursor: "pointer"});
        }

     })
   });
});