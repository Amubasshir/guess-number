'use strict';

// selecting elements
const check = document.querySelector('.check');
const input = document.querySelector('.input-number');
const guessText = document.querySelector('.guessing-text');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const correctAns = document.querySelector('.game-correct-ans');
const playAgain = document.querySelector('.play-again');

// variables
let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

function displayGuessText(text) {
  guessText.textContent = text;
}

// checking
check.addEventListener('click', function () {
  const inputNumber = Number(input.value);
  // when there is no input
  if (!inputNumber) displayGuessText('Input a valid number');
  else if (inputNumber === SECRET_NUMBER) {
    displayGuessText('Correct Answer! You Win!!!🥳');
    document.body.style.backgroundColor = 'teal';
    correctAns.textContent = SECRET_NUMBER;
    correctAns.style.backgroundColor = '#f1ebe6';
    correctAns.style.color = '#222222';
    correctAns.style.fontSize = '5.5rem';

    if (SCORE > HIGH_SCORE) {
      HIGH_SCORE = SCORE;
      highScore.textContent = HIGH_SCORE;
    }
  }

  // when guess is wrong
  else if (inputNumber !== SECRET_NUMBER) {
    if (SCORE > 1) {
      displayGuessText(inputNumber > SECRET_NUMBER ? 'Too High' : 'Too Low');
      SCORE--;
      score.textContent = SCORE;
    } else {
      displayGuessText('Game Over! You loose!!!');
      score.textContent = 0;
    }
  }
});

// play again

playAgain.addEventListener('click', function () {
  SCORE = 20;
  SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);

  displayGuessText('Start Guessing...');
  document.body.style.backgroundColor = '#f1ebe6';
  correctAns.style.backgroundColor = '#000000b6';
  correctAns.textContent = '?';
  score.textContent = SCORE;
  input.value = '';
});
