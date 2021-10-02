class AlertView {
  #parentElement = document.querySelector('.alert');
  #overlay = document.querySelector('.overlay');

  winAlert() {
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

  toggleAlert() {
    this.#parentElement.classList.toggle('hidden');
    this.#overlay.classList.toggle('hidden');
  }

  loseAlert() {}
}

export default new AlertView();
