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
  moves: 10,
  difficulty: '',
  colors: { easy: 4, normal: 6, hard: 8 },
  code: [],
};
//Handling New Game button with difficulty
const newGame = document.querySelector('.btn-new-game');
newGame.addEventListener('click', function (e) {
  e.preventDefault();
  const difficulty = document.querySelector('select');
  console.log(difficulty.value);
  state.difficulty = difficulty.value;
  console.log(state);
  console.log(state.colors[state.difficulty]);
  state.code = codeMaker.createCode(state.difficulty);
  renderColorPickers(state.colors[state.difficulty]);
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

// const init = function () {
//   renderColorPickers(8);
// };
// init();
