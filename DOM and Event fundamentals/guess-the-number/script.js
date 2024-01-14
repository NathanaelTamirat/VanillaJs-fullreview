"use strict";

///////Manipulation
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;
// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);

///////event listeners
let totScore = 20;
let randNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMesssage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no guess
  if (!guess) {
    displayMesssage("No Number");
  }
  // when they win
  else if (randNumber === guess) {
    displayMesssage("correct number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "40rem";
    document.querySelector(".number").textContent = randNumber;
    if (totScore > highScore) {
      highScore = totScore;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when the guess is wrong
  else if (guess !== randNumber) {
    if (totScore > 1) {
      displayMesssage(guess > randNumber ? "too high" : "too low");
      totScore--;
      document.querySelector(".score").textContent = totScore;
    } else {
      displayMesssage("game over");
      document.querySelector(".score").textContent = 0;
    }
  }
  ///again
  document.querySelector(".again").addEventListener("click", function () {
    totScore = 20;
    randNumber = Math.trunc(Math.random() * 20) + 1;
    displayMesssage("Start guessing...");
    document.querySelector(".score").textContent = totScore;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
/////refactored

//   //when guess is greater
//   else if (guess > randNumber) {
//     if (totScore > 1) {
//       document.querySelector(".message").textContent = "too high";
//       totScore--;
//       document.querySelector(".score").textContent = totScore;
//     } else {
//       document.querySelector(".message").textContent = "game over";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   // when guess is smaller
//   else if (guess < randNumber) {
//     if (totScore > 1) {
//       document.querySelector(".message").textContent = "too low";
//       totScore--;
//       document.querySelector(".score").textContent = totScore;
//     } else {
//       document.querySelector(".message").textContent = "game over";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
