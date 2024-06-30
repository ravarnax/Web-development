var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userCLickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userCLickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userCLickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userCLickedPattern[currentLevel]) {
        if(userCLickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over, Press any Key to Reastart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function nextSequence(){
    userCLickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}