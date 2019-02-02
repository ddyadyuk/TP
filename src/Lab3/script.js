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
            }
            var radio = getValue("radio");
            var text = getValue("Text");
            var color = getValue("Color");

            if(radio === $("form.p:first-child")){
                $(".workWindow").prepend('<p '+'style="background-color:'+color+'; " '+'>' + text +'</p>');
            } else {
                $(".workWindow").append('<p '+'style="background-color:'+color+'; " '+'>' + text +'</p>');
            }
        });


    // $("button").click(function () {
    //     $(".workWindow").append('<p>'+$("#formFirst").serialize() + +'</p>' + '<br/>');
     //})
});
