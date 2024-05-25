$(document).ready(function() {

    $("#signup-email").on("change", function() {
        var signupEmailIcon = document.getElementById("signup-email-icon");

        if($(this).val()!= "") {

            $.ajax({
                type: "POST",
                url: "./php/check_user.php",
                data: {
                    username: $("#signup-email").val()
                },
                success: function(res) {
                    if(res.trim() == "user not found") {
                        signupEmailIcon.className = "fa fa-check-circle";
                        signupEmailIcon.style.color = "green";
                        $("#signup-btn").removeAttr("disabled");
                        $("#signup-btn").css({cursor: "pointer"});
                        $("#signup-email-message").css({display: "none"});

                    }
                    else {
                        signupEmailIcon.className = "fa fa-times-circle";
                        signupEmailIcon.style.color = "red";
                        $("#signup-email-message").css({display: "block"});
                        $("#signup-btn").attr("disabled", "disabled");
                        $("#signup-btn").css({cursor: "not-allowed"});
                        }
                    }
                })
        }
        else {
            signupEmailIcon.className = "";
            $("#signup-btn").attr("disabled", "disabled");
            $("#signup-btn").css({cursor: "not-allowed"});
            $("#signup-email-message").css({display: "none"});


        }
        });
    
   
});