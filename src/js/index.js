'use strict';
import '../css/reset.css';
import '../css/main.css';
//
import { GAME_MODE, TURNS } from './config.js';
import * as model from './model.js';
import codeMaker from './codeMaker.js';
import boardView from './views/boardView.js';
import controlsView from './views/controlsView.js';
import pegsView from './views/pegsView.js';
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

const init = function () {
  //Set up new game
  //clean game state
  //create new secret code
  //create clean board
  //create user commands
  //display high scores
};
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
    const temp = model.compareCodes(state.colorPicks, state.code);
    gameController(temp);
    return;
  }
  if (btn.dataset?.control === 'undo') {
    if (state.colorPicks.length < 1) return;
    state.colorPicks.pop();
    console.log(state.colorPicks);
    pegsView.renderPegs(state.turn, state.colorPicks);
    return;
  }
  const color = btn.dataset.colorPick;
  if (state.colorPicks.length < GAME_MODE[state.difficulty].codeLength) {
    state.colorPicks.push(color);
  } else {
    alert('All pegs selected, please undo or submit!');
  }
  pegsView.renderPegs(state.turn, state.colorPicks);
};

const getFlags = function (redFlags, whiteFlags) {
  const red = 'red '.repeat(redFlags);
  const white = 'white '.repeat(whiteFlags);
  return (red + white).trim().split(' ');
};

const gameController = function (flagsArray) {
  //display flags
  pegsView.renderFlags(state.turn, getFlags(flagsArray[0], flagsArray[1]));
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
