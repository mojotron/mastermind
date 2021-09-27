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
  let html = '';
  for (let i = 0; i < amount; i++) {
    html += `
      <button 
        class="color-choice" 
        data-color-pick="${COLORS[i]}" 
        style="background-color:var(--peg-${COLORS[i]});">
      </button>
    `;
  }
  html += `
    <button 
      class="color-choice control-btn" 
      data-control="undo">&#9100; 
    </button>
    <button 
      class="color-choice control-btn" 
      data-control="submit">&#9094;
    </button>
  `;
  colorPickerContainer.insertAdjacentHTML('beforeend', html);
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
  console.log('SECRET CODE: ', state.code);
};

btnNewGame.addEventListener('click', function (e) {
  e.preventDefault();
  newGameHandler();
});

const setUpMove = function () {
  const box = document.querySelector(`[data-turn="${state.turn}"]`);
  box.classList.add('game-turn-active');
};

colorPickerContainer.addEventListener('click', function (e) {
  const pick = e.target.closest('.color-choice');
  if (!pick) return;
  //determine which button and add logic
  //if button is submit
  if (pick.dataset?.control === 'submit') {
    console.log('Submit logic');
    const temp = compareCodes(state.colorPicks, state.code);
    gameController(temp);
    return;
  }
  if (pick.dataset?.control === 'undo') {
    if (state.colorPicks.length < 1) return;
    state.colorPicks.pop();
    console.log(state.colorPicks);
    renderColorPicks();
    return;
  }

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
  //This is for undo button logic
  box.querySelectorAll('[data-peg]').forEach(peg => {
    peg.style.backgroundColor = 'inherit';
  });
  state.colorPicks.forEach((color, i) => {
    const pin = box.querySelector(`[data-peg="${i}"]`);
    if (color === 'undo') pin.style.backgroundColor = 'white';
    pin.style.backgroundColor = `var(--peg-${color})`;
  });
};

const renderFlagsPicks = function (flags) {
  const box = document.querySelector(`[data-turn="${state.turn}"]`);
  //This is for undo button logic
  // box.querySelectorAll('[data-peg]').forEach(peg => {
  //   peg.style.backgroundColor = 'inherit';
  // });
  flags.forEach((color, i) => {
    const pin = box.querySelector(`[data-flag="${i}"]`);
    if (color === 'undo') pin.style.backgroundColor = 'white';
    pin.style.backgroundColor = `var(--flag-${color})`;
  });
};

//Mastermind flag algorithm
const compareCodes = function (playerCode, secretCode) {
  let redFlags = 0;
  let whiteFlags = 0;
  //Temp array to mark colors selected with red or white flag
  const result = Array.from(
    { length: GAME_MODE[state.difficulty].codeLength },
    () => null
  );
  //Find red flags
  for (const [i, color] of playerCode.entries()) {
    if (color === secretCode[i]) {
      result[i] = color;
      redFlags++;
    }
  }
  //Find white flags
  for (const [i, color] of playerCode.entries()) {
    if (
      result.filter(ele => ele === color).length ===
      secretCode.filter(ele => ele === color).length
    )
      continue;
    if (result[i]) continue;
    if (secretCode.includes(color)) {
      result[i] = color;
      whiteFlags++;
    }
  }
  console.log(redFlags, whiteFlags);
  return [redFlags, whiteFlags];
};

const getFlags = function (redFlags, whiteFlags) {
  const red = 'red '.repeat(redFlags);
  const white = 'white '.repeat(whiteFlags);
  return (red + white).trim().split(' ');
};

const gameController = function (flagsArray) {
  //display flags
  renderFlagsPicks(getFlags(flagsArray[0], flagsArray[1]));
  if (flagsArray[0] === GAME_MODE[state.difficulty].codeLength) {
    alert('You found secret code');
    return;
  }
  state.turn++;
  state.colorPicks = [];
  if (state.turn === TURNS) {
    alert('You run out of guesses!');
    return;
  }

  setUpMove();
};
