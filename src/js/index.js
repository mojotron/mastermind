'use strict';
import '../css/reset.css';
import '../css/main.css';
//
import { GAME_MODE, TURNS } from './config.js';
import * as model from './model.js';
import codeMaker from './codeMaker.js';
import boardView from './views/boardView.js';
import controlsView from './views/controlsView.js';
//Game object
const state = {
  difficulty: '',
  code: [],
  turn: 0,
  colorPicks: [],
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
  boardView.createBoard(state.difficulty);
  controlsView.createControls(state.difficulty);
  controlsView.addHandlerControlClick(controlsController);
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

const controlsController = function (btn) {
  if (btn.dataset?.control === 'submit') {
    console.log('Submit logic');
    const temp = compareCodes(state.colorPicks, state.code);
    gameController(temp);
    return;
  }
  if (btn.dataset?.control === 'undo') {
    if (state.colorPicks.length < 1) return;
    state.colorPicks.pop();
    console.log(state.colorPicks);
    renderColorPicks();
    return;
  }
  const color = btn.dataset.colorPick;
  if (state.colorPicks.length < GAME_MODE[state.difficulty].codeLength) {
    state.colorPicks.push(color);
  } else {
    alert('All pegs selected, please undo or submit!');
  }
  renderColorPicks();
};

const renderColorPicks = function () {
  const box = document.querySelector(`[data-turn="${state.turn}"]`);
  //This is for undo button logic
  box.querySelectorAll('[data-peg]').forEach(peg => {
    peg.style.backgroundColor = 'inherit';
  });
  state.colorPicks.forEach((color, i) => {
    const pin = box.querySelector(`[data-peg="${i}"]`);
    pin.style.backgroundColor = `var(--peg-${color})`;
  });
};

const renderFlagsPicks = function (flags) {
  const box = document.querySelector(`[data-turn="${state.turn}"]`);
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
