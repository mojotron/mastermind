import { GAME_MODE } from '../config.js';
import boardView from './boardView.js';
import pegsView from './pegsView.js';
class AlertView {
  #parentElement = document.querySelector('.alert');
  #overlay = document.querySelector('.overlay');

  winAlert() {
    this.#parentElement.innerHTML = '';
    const html = `
      <p class="message">You broke the code! 🥳</p>
      <form>
        <label for="user-name">Enter Name</label>
        <input type="text" id="user-name" />
        <button class="btn-submit-highscore">Submit</button>
      </form>
    `;
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
    this.toggleAlert();
  }

  addHandlerSubmit(handler) {
    document
      .querySelector('.btn-submit-highscore')
      .addEventListener('click', function (e) {
        e.preventDefault();
        const userName =
          document.querySelector('#user-name').value || 'Unknown';
        handler(userName);
      });
  }

  loseAlert(secretCode, difficulty) {
    this.#parentElement.innerHTML = '';
    const html = `
      <button class="btn-close-alert">X</button>
      <p class="message">Sorry! You didn't break the code!</p>
      <p class="message">Secret code was:</p>
      <div class="secret-container">
      ${boardView.createPegs('secret', difficulty)}
      </div>
      
    `;
    this.#parentElement.insertAdjacentHTML('afterbegin', html);
    this.toggleAlert();
    pegsView.renderSecretCode(secretCode);
  }

  closeAlert() {
    this.#parentElement.querySelector('.btn-close-alert').addEventListener(
      'click',
      function () {
        this.toggleAlert();
      }.bind(this)
    );
  }

  toggleAlert() {
    this.#parentElement.classList.toggle('hidden');
    this.#overlay.classList.toggle('hidden');
  }
}

export default new AlertView();
