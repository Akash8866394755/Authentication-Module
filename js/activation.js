$(document).ready(function() {
     $("#signup-active-btn").click(function() {
        if($("#signup-active-input").val() != "") {

            $.ajax({
                type: "POST", 
                url: "./php/activation.php",
                data: {
                    code: $("#signup-active-input").val(),
                    fullname: $("#signup-fullname").val(),
                    email: $("#signup-email").val(),
                    password: $("#signup-password").val()
                },
                success: function(res) {
                    if(res.trim() == "correct") {
                        window.location = "./profile/profile.php";
                    }
                    else {
                        $("#activation-error").fadeIn(500);
                        setTimeout(function() {
                        $("#activation-error").fadeOut(500);
                        },2000);
                    }
                }
            })
        }
        else {

        }
     });
});