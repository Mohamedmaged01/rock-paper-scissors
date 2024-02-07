const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const Playerscoredisplay = document.getElementById("playerscore");
const Computerscoredisplay = document.getElementById("Computerscore");
let playerscore = 0;
let Computerscore = 0;

function playgame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerchoice === computerchoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerchoice === "scissors" ? "YOU WIN " : "YOU LOSE";
        break;
      case "paper":
        result = computerchoice === "rock" ? "YOU WIN " : "YOU LOSE";
        break;
      case "scissors":
        result = computerchoice === "paper" ? "YOU WIN " : "YOU LOSE";
        break;
    }
  }
  playerdisplay.textContent = `Player:${playerchoice}`;
  computerdisplay.textContent = `Computer :${computerchoice}`;
  resultdisplay.textContent = result;
  if (result === "YOU WIN ") {
    resultdisplay.style.color = "green";
    playerscore++;
    Playerscoredisplay.textContent = playerscore;
  } else if (result === "YOU LOSE") {
    resultdisplay.style.color = "red";
    Computerscore++;
    Computerscoredisplay.textContent = Computerscore;
  } else {
    resultdisplay.style.color = "black";
  }
}
