$(document).ready(function() {
        var mifuncion = function() {
            var password1 = $("#password").val();
            var password2 = $("#password_repeat").val();
            if (password1 != password2) {
                $(".correcto").fadeOut("fast");
                $(".danger").fadeIn("slow");
                
            } else {
                $(".danger").hide();
                $(".correcto").show();
            }
        };
        $("input[type='submit']").on("click", mifuncion);
 });

