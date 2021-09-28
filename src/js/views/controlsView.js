import { COLORS, GAME_MODE } from '../config.js';

class ControlsView {
  #parentElement = document.querySelector('.color-picker-display');

  addHandlerControlClick(handler) {
    this.#parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.color-choice');
      if (!btn) return;
      handler(btn);
    });
  }

  createControls(difficulty) {
    this.#parentElement.innerHTML = '';

    let html = '';
    for (let i = 0; i < GAME_MODE[difficulty].colorChoice; i++) {
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
    this.#parentElement.insertAdjacentHTML('beforeend', html);
  }
}

export default new ControlsView();
