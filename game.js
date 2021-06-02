let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * (4 - 0) + 0);

  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
}
$("div[type='button']").on("click", function (e) {
  let userChosenColor = e.currentTarget.id;
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
