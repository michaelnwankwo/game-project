// "use strict";

// //to call a html element in your javascript code we say... document.querySelector(".message")
// //the value inside the bracket signifies the element to be called.
// //document.querySelector(".message");

// //if we then add .textContent to the first line of code it helps us bring out only the text of the element.
// //document.querySelector(".message").textContent;

// // DOM- this can be defined as the point between the web and the javascript that helps to manipulate both the html elements and the css elements.

// //we can also change the content of an html element to do that we say: document.querySelector(".message").textContent = "the new content you want to display"
// //document.querySelector(".message").textContent = "correct score! 🎉🎉";

// //we also use the .value to get the value of an input from the html element
// //document.querySelector(".guess").value = 13;

// // console.log(document.querySelector(".guess").value);

// //we can also interact with the element and a function to ensure it works to do that we use the .addEventListener command

// // Game Variables
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let highscore = 0;
// let score = 20;
// const confirm = function () {
//   const guess = Number(document.querySelector(".guess").value);

//   if (!guess) {
//     document.querySelector(".message").textContent = "⛔ No number!";

//     // Correct guess
//   } else if (guess === secretNumber) {
//     document.querySelector(".message").textContent = "correct score! 🎉🎉";
//     document.querySelector(".number").textContent = secretNumber;
//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     // Update highscore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }

//     // Guess is too high or too low
//   } else {
//     if (score > 1) {
//       document.querySelector(".message").textContent =
//         guess > secretNumber ? "too high! 😝😝" : "too low! 😝😝";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "😭😭 You lost the game!!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// };
// document.querySelector(".check").addEventListener("click", confirm);
// document.addEventListener("keydown", function (k) {
//   console.log(k.key);
//   if (k.key === "Enter") {
//     confirm();
//   }
// });

// //we have different math methods that carries out different functions for us and one of them is math.random that provides a random decimal number for us each time if you then add math.trunc all around the math.random it eliminates all the decimals.

// // Coding Challenge #1

// /* 
// Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀
// */

// function displayMessage(message) {
//   document.querySelector(".message").textContent = message;
// }

// const afresh = function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   displayMessage("Start guessing...");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = "";

//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// };
// document.querySelector(".again").addEventListener("click", afresh);

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   if (e.key === "Escape") {
//     afresh();
//   }
// });

"use strict";

// Game Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;

// DOM Elements
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
const guessInput = document.querySelector('.guess');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

// Game Logic
const confirm = function () {
  const guess = Number(guessInput.value);

  // When there is no input
  if (!guess) {
    messageEl.textContent = '⛔ No number!';

  // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = 'Correct score! 🎉🎉';
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    // Update highscore
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

  // When guess is wrong
  } else {
    if (score > 1) {
      messageEl.textContent = guess > secretNumber ? 'Too high! 😝😝' : 'Too low! 😝😝';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '😭😭 You lost the game!!';
      scoreEl.textContent = 0;
    }
  }
};

// Reset Game Function
const afresh = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageEl.textContent = 'Start guessing...';
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  guessInput.value = '';

  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
};

// Event Listeners
document.querySelector('.check').addEventListener('click', confirm);
document.querySelector('.again').addEventListener('click', afresh);

// Keyboard Support
document.addEventListener('keydown', function (k) {
  if (k.key === 'Enter') {
    confirm();
  }
  if (k.key === 'Escape') {
    afresh();
  }
});

// Initialize game
scoreEl.textContent = score;
highscoreEl.textContent = highscore;
