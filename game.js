let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * (4 - 0) + 0);
  console.log(randomNumber);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}

console.log(nextSequence());
