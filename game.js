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

  let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}
$("div[type='button']").on("click", function (e) {
  let userChosenColor = e.currentTarget.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});
