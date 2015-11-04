$(document).ready(
        function() {
            $("input[type='submit']").on('click', function(){
                var myli = "<li>" + $("#texto").val() + "</li>";
                $("#lista").append(myli);                
            });
        }
);

