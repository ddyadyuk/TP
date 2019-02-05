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

    $(".secondButton").click(function () {
        $(".secondGameWindow").addClass("grid");
    });
    $(".createRectangle").click(function () {
        var colorsArray = ["red", "white", "blue", "orange", "black", "darkgrey", "darkcyan", "gainsboro", "blueviolet", "mediumspringgreen", "firebrick", "purple", "hotpink", "aqua", "royalblue"];
        var currentColor = 0;
        while (currentColor === 0) {
            var i = Math.floor((Math.random() * colorsArray.length))
            currentColor = colorsArray[i];
        }
        var divWidth = $(".secondWorkWindow").width();
        var divHeight = $(".secondWorkWindow").height();
        var absolute = "relative";
        var randPosX = Math.floor(Math.random() * divWidth);
        var randPosY = Math.floor((Math.random()) * divHeight);
        for (var i = 1; i <= 1; i++) {
            if ($("div").is(".createdDiv")) {
                $(".createdDiv").remove();
            }
            $(".secondWorkWindow").append('<div class="createdDiv" ></div>');
            $(".createdDiv").css('left', randPosX);
            $(".createdDiv").css("top", randPosY);
            $(".createdDiv").css("background-color", currentColor);
            $(".createdDiv").css("height", Math.floor(Math.random() * 150));
            $(".createdDiv").css("width", Math.floor(Math.random() * 300));
            $(".createdDiv").css("position", absolute);


            window.onkeydown = function () {
                if (event.keyCode == 37) {
                    randPosX = randPosX - 10;
                    console.log(randPosX);
                    $(".createdDiv").css('left', randPosX);
                } else if (event.keyCode == 39) {
                    randPosX = randPosX + 10;
                    $(".createdDiv").css('left', randPosX);
                }

                if (event.keyCode == 38) {
                    randPosY = randPosY - 10;
                    $(".createdDiv").css("top", randPosY);
                } else if (event.keyCode == 40) {
                    randPosY = randPosY + 10;
                    $(".createdDiv").css("top", randPosY);
                }


            }
        }
    });

    $(".thirdButton").click(function () {
        $(".thirdGameWindow").addClass("grid");
    });
    $(".createDraggable").click(function () {
        var colorsArray = ["red", "white", "blue", "orange", "black", "darkgrey", "darkcyan", "gainsboro", "blueviolet", "mediumspringgreen", "firebrick", "purple", "hotpink", "aqua", "royalblue"];
        var currentColor = 0;
        while (currentColor === 0) {
            var ii = Math.floor((Math.random() * colorsArray.length));
            currentColor = colorsArray[ii];
        }
        var divWidth = $(".thirdWorkWindow").width();
        var divHeight = $(".thirdWorkWindow").height();
        var absolute = "relative";
        var randPosX = Math.floor(Math.random() * divWidth);
        var randPosY = Math.floor((Math.random()) * divHeight);
        for (var i = 1; i <= 1; i++) {
            if ($("div").is(".ui-widget-content")) {
                $(".ui-widget-content").remove();
            }
            $(".thirdWorkWindow").append('<div class= "ui-widget-content" id="createdDraggable"></div>');
            $(".ui-widget-content").css('left', randPosX);
            $(".ui-widget-content").css("top", randPosY);
            $(".ui-widget-content").css("background-color", currentColor);
            $(".ui-widget-content").css("height", Math.floor(Math.random() * 150));
            $(".ui-widget-content").css("width", Math.floor(Math.random() * 300));
            $(".ui-widget-content").css("position", absolute);

        }
        $( function() {
            $( ".ui-widget-content" ).draggable();
        } );

    });

});
