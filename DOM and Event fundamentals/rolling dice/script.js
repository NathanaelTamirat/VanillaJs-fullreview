'use strict';

///// assigning the classes and id
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const diceRoll = document.querySelector('.btn--roll');
const diceHold = document.querySelector('.btn--hold');
const newDice = document.querySelector('.btn--new');
const currentDiceOne = document.getElementById('current--0');
const currentDiceTwo = document.getElementById('current--1');

let currentScore, activePlayer, playing, score;

const init = function () {
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0]; //// score for the active players
  playing = true;
  diceImage.classList.add('hidden');
  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playerOne.classList.add('player--active');
  playerTwo.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
};

////add event listener for dice roll

diceRoll.addEventListener('click', function () {
  if (playing) {
    const randDiceValue = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randDiceValue}.png`;
    if (randDiceValue !== 1) {
      currentScore = currentScore + randDiceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
//// event listener for hold dice
diceHold.addEventListener('click', function () {
  if (playing) {
    ///// to stop the game after the win using if
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

/// new dice eventlistener
newDice.addEventListener('click', init);
