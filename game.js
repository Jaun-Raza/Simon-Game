var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ['red', 'blue', 'green', 'yellow'];

$('.btn').click(function () {

    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);

})

function nextSequence() {

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

nextSequence();
