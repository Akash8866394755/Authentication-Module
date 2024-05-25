$(document).ready(function() {
    $("#signup-btn").click(function(e) {
        e.preventDefault();
       $.ajax({
        type: "POST",
        url: "./php/signup.php",
        data: {
            fullname: $("#signup-fullname").val(),
            email: $("#signup-email").val(),
            password: $("#signup-password").val()

        },
        beforeSend: function() {
            $("#signup-btn").attr("disabled", "disabled");
            $("#signup-btn").css({cursor: "not-allowed"});
            $("#signup-btn").text("Processing...");
        },
        success: function(res) {
            if(res.trim() == "signup success") {
                $("#signup-card").fadeOut(500, function() {
                    $("#signup-activation-box").fadeIn(700);
                })
            }
            else {
                $("#signup-error").fadeIn(500);
                setTimeout(function() {
                    $("#signup-error").fadeOut(500);
                },2000);
            }
            $("#signup-btn").removeAttr("disabled");
            $("#signup-btn").css({cursor: "pointer"});
            $("#signup-btn").text("Register");
        }
       });
   
    });
});