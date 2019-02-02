$(document).ready(function () {
    $(".firstButton").click(function () {
        $(".gameWindow").addClass("grid");
        });

        $(".create").click(function(){

            var values = {};
            $.each($("form").serializeArray(), function (i, field) {
                values[field.name] = field.value;


            });

            var getValue = function (valueName) {
                return values[valueName];
            };
            var radio = getValue("checkbox");
            var text = getValue("Text");
            var color = getValue("Color");

            if($("input:checkbox").prop("checked") === true){
                $(".workWindow").prepend('<p '+'style="background-color:'+color+'; " '+'>' + text +'</p>');
            } else {
                $(".workWindow").append('<p '+'style="background-color:'+color+'; " '+'>' + text +'</p>');
            }

        });


});
