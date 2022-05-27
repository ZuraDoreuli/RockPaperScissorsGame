const nameInput = document.querySelector('.set-name__input');
const playBtn = document.querySelector('.start-game__button');
const userName = document.querySelector('.user-name');
const pcName = document.querySelector('.pc-name');
const inputDisplay = document.querySelector('.game__set-name');
const userCounterValue = document.querySelector('.user-score');
const pcCounterValue = document.querySelector('.pc-score');
const userChosenBox = document.querySelector('.chose-box');
const pcChosenText = document.querySelector('.pc-chosen');
const gameResultText = document.querySelector('.game-result');
const resultText = document.querySelector('.result');
const gameStartText = document.querySelector('.play-box__text');
const finishWindow = document.querySelector('.finish-window');
const finishWindowText = document.querySelector('.finish-window__text');
const finishWindowBtn = document.querySelector('.finish-window__btn');

const pcNamesArray = ['Oliver', 'William', 'James', 'Lucas', 'Henry'];
let randomName = Math.floor(Math.random() * pcNamesArray.length);
let userCounter = 0;
let pcCounter = 0;
let pcChosenIs = '';

const pcChosen = () => {
   const pcChoseArray = ['paper', 'rock', 'scissors'];
   let pcRandomChoise = Math.floor(Math.random() * pcChoseArray.length);
   pcChosenIs = pcChoseArray[pcRandomChoise];
   return(pcChosenIs);
};

const showCounterText = () => {
   userCounterValue.textContent = userCounter;
   pcCounterValue.textContent = pcCounter;
};

const setNames = () => {
   if (nameInput.value !== '') {
      userName.textContent = nameInput.value;
      pcName.textContent = pcNamesArray[randomName];
   } else {
      alert('Enter your name please!')
   }
};

playBtn.addEventListener('click', () => {
   setNames();
   showCounterText();
   inputDisplay.style.display = 'none';
   gameStartText.textContent = 'Make your move:';
   userChosenBox.addEventListener('click', (e) => {
      let userChoseneIs = e.target.dataset.id;
      pcChosen();
      if (userChoseneIs == pcChosenIs) {
         pcChosenText.textContent = `${pcNamesArray[randomName]} chosen ${pcChosenIs}.`;
         gameResultText.textContent = `${userChoseneIs} equal ${pcChosenIs}.`;
         resultText.textContent = 'Drow!';
      } else 
      if(userChoseneIs == 'scissors' && pcChosenIs == 'paper') {
         pcChosenText.textContent = `${pcNamesArray[randomName]} chosen ${pcChosenIs}.`;
         gameResultText.textContent = `${userChoseneIs} cuts ${pcChosenIs}.`;
         resultText.textContent = 'You Win!';
         userCounter++;
      } else 
      if(userChoseneIs == 'rock' && pcChosenIs == 'scissors') {
         pcChosenText.textContent = `${pcNamesArray[randomName]} chosen ${pcChosenIs}.`;
         gameResultText.textContent = `${userChoseneIs} broke ${pcChosenIs}.`;
         resultText.textContent = 'You Win!';
         userCounter++;
      } else 
      if(userChoseneIs == 'paper' && pcChosenIs == 'rock') {
         pcChosenText.textContent = `${pcNamesArray[randomName]} chosen ${pcChosenIs}.`;
         gameResultText.textContent = `${userChoseneIs} covers ${pcChosenIs}.`;
         resultText.textContent = 'You Win!';
         userCounter++;
      } else {
         pcChosenText.textContent = `${pcNamesArray[randomName]} chosen ${pcChosenIs}.`;
         gameResultText.textContent = `${userChoseneIs} lose to ${pcChosenIs}.`;
         resultText.textContent = 'You Lose!';
         pcCounter++;
      };
      showCounterText();
      if (userCounter == 10) {
         finishWindow.classList.add('active');
         finishWindowText.textContent = 'Congratulations, you win!'
      } else 
      if (pcCounter == 10) {
         finishWindow.classList.add('active');
         finishWindowText.textContent = 'You Lose!'
      }
   });
});
finishWindowBtn.addEventListener('click', () => {
   window.location.reload();
});