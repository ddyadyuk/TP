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
            if ($("div").is(".createdDraggable")) {
                $(".createdDraggable").remove();
            }
            $(".thirdWorkWindow").append('<div class="createdDraggable" draggable="true" ondragstart="drag(event)" ></div>');
            $(".createdDraggable").css('left', randPosX);
            $(".createdDraggable").css("top", randPosY);
            $(".createdDraggable").css("background-color", currentColor);
            $(".createdDraggable").css("height", Math.floor(Math.random() * 150));
            $(".createdDraggable").css("width", Math.floor(Math.random() * 300));
            $(".createdDraggable").css("position", absolute);

        }
    });

    function drag (event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    function allowDrop (ev) {
        ev.preventDefault();
    }
    function drop (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
});
