$(document).ready(function() {
        // show login box
        $("#opt-login").click(function() {
                $("#register-box").fadeOut(500, function() {
                        $("#login-box").fadeIn(700);
                });
        });
        // show register box

        $("#opt-register").click(function() {
                $("#login-box").fadeOut(500, function() {
                        $("#register-box").fadeIn(700);
                });
        });

});