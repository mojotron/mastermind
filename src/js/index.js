'use strict';

import '../css/reset.css';
import '../css/main.css';

import codeMaker from './codeMaker.js';

const colors = [
  //TODO make config file
  'blue',
  'green',
  'yellow',
  'red',
  'orange',
  'purple',
  'brown',
  'black',
];
const state = {
  difficulty: '',
  colors: { easy: 4, normal: 6, hard: 8 },
  code: [],
};
//Handling New Game button with difficulty
const newGame = document.querySelector('.btn-new-game');
newGame.addEventListener('click', function (e) {
  e.preventDefault();
  const difficulty = document.querySelector('select').value;
  state.difficulty = difficulty;
  state.code = codeMaker.createCode(difficulty);
  renderColorPickers(state.colors[state.difficulty]);
  console.log(state);
});

//Creating color pickers depending on game difficulty
const colorPickerContainer = document.querySelector('.color-picker-display');
const renderColorPickers = function (amount) {
  colorPickerContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const html = `
      <button 
        class="color-choice" 
        data-color-pick="${colors[i]}" 
        style="background-color:var(--peg-${colors[i]});">
      </button>
    `;
    colorPickerContainer.insertAdjacentHTML('beforeend', html);
  }
};

//Creating and rendering board
const gameBoard = document.querySelector('.game-board-display');
const crateBoard = function () {
  for (let i = 0; i < 10; i++) {
    const html = `
      <div class="game-turn" data-turn="${i}">
        <div class="game-turn-pegs">
          ${createBoardPeg(4, 'pin')}
        </div>
        <div class="game-turn-flags">
        ${createBoardPeg(4, 'flag')}
        </div>
      </div>
    `;
    gameBoard.insertAdjacentHTML('afterbegin', html);
  }
};

const createBoardPeg = function (length, datasetName) {
  let html = '';
  for (let i = 0; i < length; i++) {
    html += `<div class="color-choice color-${datasetName}" data-${datasetName}="${i}"></div>`;
  }
  return html;
};
crateBoard();
// const init = function () {
//   renderColorPickers(8);
// };
// init();
