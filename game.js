var userClickedPattern = [];

var gamePattern = [];

var started = false;

var level = 0;

var buttonColours = ['red', 'blue', 'green', 'yellow'];

$('.btn').click(function () {

    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

})

$(document).keypress(function () {
    if (started === false) {
        $("#level-title").text("Level " + level);
        nextSequence();
    }
})

function checkAnswer(currentLevel) {

    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
            nextSequence();
        }, 1000)
    }
    else if(gamePattern[currentLevel] !== userClickedPattern[currentLevel]){
        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 1000)
        $('#level-title').text('Game Over, Press Any Key to Restart')
        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("#level-title").text("Level " + level);

    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    playSound(randomChosenColour);

}

function playSound(name) {

    $('.btn').click(function () {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    })

}

function animatePress(currentColour) {

    $('#' + currentColour).addClass('pressed');

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


