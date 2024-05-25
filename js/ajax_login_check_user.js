$(document).ready(function() {
    $("#login-email").on("change", function() {
        checkIcon = document.getElementById("login-email-icon");
        if($("#login-email").val() != "") {

            $.ajax({
                type: "POST",
                url: "./php/login_check_user.php",
                data: {
                    email: $("#login-email").val()
                },
                success: function(res) {
                   if(res.trim() == "user found") {
                    checkIcon.className = "fa fa-check-circle";
                    checkIcon.style.color = "green";
                    $("#login-btn").css({cursor: "pointer"});
                    $("#login-btn").removeAttr("disabled");
                    $("#login-email-message").fadeOut(500);
                   }
                   else {
                    checkIcon.className = "fa fa-times-circle";
                    checkIcon.style.color = "red";
                    $("#login-btn").css({cursor: "not-allowed"});
                    $("#login-btn").attr("disabled", "disabled");
                    $("#login-email-message").fadeIn(500);
    
                   }
                }
            })
        }
        else {
            checkIcon.className = "";
            $("#login-btn").css({cursor: "not-allowed"});
            $("#login-btn").attr("disabled", "disabled");
            $("#login-email-message").fadeOut(500);

        }
       
    });

});