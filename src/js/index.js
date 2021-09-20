'use strict';

import '../css/reset.css';
import '../css/main.css';

import codeMaker from './codeMaker.js';

//number of guesses 10 or 12 depending on manufacturer
const state = {
  code: [],
};

const newGameBtn = document.querySelector('.new-game');
newGameBtn.addEventListener('submit', function (e) {
  e.preventDefault();
  const difficulty = document.querySelector('select');
  state.code = codeMaker.createCode(difficulty.value);
  console.log(state.code);
});

class FormView {
  _parentElement = document.querySelector('.game-option');

  addHandlerClick(handler) {}
}
