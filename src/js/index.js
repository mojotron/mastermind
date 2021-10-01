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
//INITIALIZE NEW GAME
const controlDifficulty = function (difficulty) {
  model.setDifficulty(difficulty);
  startNewGame();
};
//Set up new game
const startNewGame = function () {
  model.state.userCode = [];
  model.state.turn = 0;
  //Create secret code
  const secretCode = codeMaker.createCode(model.state.difficulty);
  model.setSecretCode(secretCode);
  console.log('🤫', model.state.secretCode); //TODO remove this line
  boardView.createBoard(model.state.difficulty);
  turnView.updateTurnStyle(model.state.turn);
  controlsView.createControls(model.state.difficulty);

  document
    .querySelector('.color-picker-display')
    .removeEventListener('click', controlsController, false);
  controlsView.addHandlerControlClick(controlsController);
  //display high scores TODO
  //clean game state TODO
};

newGameView.newGameDifficulty(controlDifficulty);

//////////////////////
const controlsController = function (btn) {
  if (btn.dataset?.control === 'submit') {
    const flags = model.compareCodes(
      model.state.userCode,
      model.state.secretCode
    );
    gameEngine(flags);
    return;
  }
  if (btn.dataset?.control === 'undo') {
    if (model.state.userCode.length < 1) return;
    model.state.userCode.pop();
    pegsView.renderPegs(model.state.turn, model.state.userCode);
    return;
  }
  const color = btn.dataset.colorPick;
  if (
    model.state.userCode.length < GAME_MODE[model.state.difficulty].codeLength
  ) {
    console.log(color);
    model.state.userCode.push(color);
    console.log(model.state.userCode);
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

const gameEngine = function (flagsArray) {
  //display flags
  pegsView.renderFlags(
    model.state.turn,
    getFlags(flagsArray[0], flagsArray[1])
  );
  if (flagsArray[0] === GAME_MODE[model.state.difficulty].codeLength) {
    alert('You found secret code');

    return;
  }
  turnView.updateTurnStyle(model.state.turn, false);
  model.incrementTurn();
  model.resetUserCode();
  if (model.state.turn === TURNS) {
    alert('You run out of guesses!');
    return;
  }
  turnView.updateTurnStyle(model.state.turn);
};

//on win add high score
const controlHighScore = function () {};
