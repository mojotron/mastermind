class NewGameView {
  #btnNewGame = document.querySelector('.btn-new-game');
  #difficulty = document.querySelector('select').value;

  getDifficulty() {
    return this.#difficulty;
  }
  addHandlerNewGame(handler) {
    this.#btnNewGame.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
}
