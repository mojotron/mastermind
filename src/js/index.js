'use strict';
//CSS
import '../css/reset.css';
import '../css/main.css';

import { COLORS, GAME_MODE, TURNS } from './config.js';
import codeMaker from './codeMaker.js';
//Game object
const state = {
  difficulty: '',
  code: [],
  turn: 0,
  colorPicks: [],
};
//Creating color pickers depending on game difficulty
const colorPickerContainer = document.querySelector('.color-picker-display');
const renderColorPickers = function (amount) {
  colorPickerContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const html = `
      <button 
        class="color-choice" 
        data-color-pick="${COLORS[i]}" 
        style="background-color:var(--peg-${COLORS[i]});">
      </button>
    `;
    colorPickerContainer.insertAdjacentHTML('beforeend', html);
  }
};

//Creating and rendering board
const gameBoard = document.querySelector('.game-board-display');
const crateBoard = function (turns) {
  gameBoard.innerHTML = '';
  for (let i = 0; i < turns; i++) {
    const html = `
      <div class="game-turn" data-turn="${i}">
        <div class="game-turn-pegs">
          ${createBoardPeg(GAME_MODE[state.difficulty].codeLength, 'peg')}
        </div>
        <div class="game-turn-flags">
        ${createBoardPeg(GAME_MODE[state.difficulty].codeLength, 'flag')}
        </div>
      </div>
    `;
    gameBoard.insertAdjacentHTML('afterbegin', html);
  }
};

const createBoardPeg = function (codeLength, datasetName) {
  let html = '';
  for (let i = 0; i < codeLength; i++) {
    html += `<div class="color-choice color-${datasetName}" data-${datasetName}="${i}"></div>`;
  }
  return html;
};

//New Game initialization
const btnNewGame = document.querySelector('.btn-new-game');

const newGameHandler = function () {
  state.difficulty = document.querySelector('select').value;
  newGameSetUp();
};
//Determine difficulty and according to it set up:
//Create new code, board, player controls, display high score
const newGameSetUp = function () {
  state.code = codeMaker.createCode(state.difficulty);
  crateBoard(TURNS);
  renderColorPickers(GAME_MODE[state.difficulty].colorChoice);
  //4.high Score TODO
  setUpMove();
};

btnNewGame.addEventListener('click', function (e) {
  e.preventDefault();
  newGameHandler();
});
//GAME LOGIC
//when game is set up player fill pins
//submits code
//game decide result
//-player wins
//-player misses code
//--last turn -> game over
//--turns left -> set up new input
const setUpMove = function () {
  const box = document.querySelector(`[data-turn="${state.turn}"]`);
  box.classList.add('game-turn-active');
};

colorPickerContainer.addEventListener('click', function (e) {
  const pick = e.target.closest('.color-choice');
  if (!pick) return;
  const color = e.target.dataset.colorPick;
  if (state.colorPicks.length < GAME_MODE[state.difficulty].codeLength) {
    state.colorPicks.push(color);
  } else {
    alert('All pegs selected, please undo or submit!');
  }
  console.log(state.colorPicks);
  renderColorPicks();
});

const renderColorPicks = function () {
  const box = document.querySelector(`[data-turn="${state.turn}"]`);
  state.colorPicks.forEach((color, i) => {
    const pin = box.querySelector(`[data-peg="${i}"]`);
    pin.style.backgroundColor = `var(--peg-${color})`;
  });
};
