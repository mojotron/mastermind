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
import newGameView from './views/newGameView.js';
import turnView from './views/turnView.js';

const controlDifficulty = function (difficulty) {
  model.setDifficulty(difficulty);
  startNewGame();
};
//Set up new game
const startNewGame = function () {
  //Create secret code
  const secretCode = codeMaker.createCode(model.state.difficulty);
  model.setSecretCode(secretCode);
  console.log('🤫', model.state.secretCode); //TODO remove this line
  //create clean board
  boardView.createBoard(model.state.difficulty);
  //create user commands
  controlsView.createControls(model.state.difficulty);
  controlsView.addHandlerControlClick(controlsController);
  //display high scores
  //clean game state
  model.state.userCode = [];
};
const init = function () {
  newGameView.newGameDifficulty(controlDifficulty);
};
init();

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
  if (
    model.state.userCode.length < GAME_MODE[model.state.difficulty].codeLength
  ) {
    model.state.userCode.push(color);
  } else {
    alert('All pegs selected, please undo or submit!');
  }
  pegsView.renderPegs(model.state.turn, model.state.userCode);
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
  turnView.updateTurnStyle(model.state.turn);
};
