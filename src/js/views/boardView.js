import { TURNS, GAME_MODE } from '../config';

class BoardView {
  #parentElement = document.querySelector('.game-board-display');

  createBoard(difficulty) {
    this.#parentElement.innerHTML = '';
    for (let i = 0; i < TURNS; i++) {
      const html = `
        <div class="game-turn" data-turn="${i}">
          <div class="game-turn-pegs">
            ${this.createPegs('peg', difficulty)}
          </div>
          <div class="game-turn-flags">
            ${this.createPegs('flag', difficulty)}
          </div>
        </div>
      `;
      this.#parentElement.insertAdjacentHTML('afterbegin', html);
    }
  }

  createPegs(dataSetValue, difficulty) {
    let html = '';
    for (let i = 0; i < GAME_MODE[difficulty].codeLength; i++) {
      html += `
        <div 
          class="color-choice color-${dataSetValue}" 
          data-${dataSetValue}="${i}">
        </div>`;
    }
    return html;
  }
}

export default new BoardView();
