import { capitalize, formatTime } from '../helpers.js';
class HighScoresView {
  #title = document.querySelector('.game-mode');
  #parentElement = document.querySelector('.high-score-container');

  updateHighScores(difficulty, data) {
    this.#title.textContent = capitalize(difficulty);
    this.#parentElement.innerHTML = '';
    data.forEach((ele, i) => {
      const html = `
        <li class="high-score-item">
          <span>${i + 1}</span>
          <span class="high-score-username">${ele.userName}</span>
          <span class="high-score-moves">${ele.moves} moves</span> 
          <span class="high-score-time">${formatTime(+ele.time)}</span>
        </li>
      `;
      this.#parentElement.insertAdjacentHTML('beforeend', html);
    });
  }
}

export default new HighScoresView();
