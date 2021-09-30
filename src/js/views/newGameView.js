class NewGameView {
  #btnNewGame = document.querySelector('.btn-new-game');

  newGameDifficulty(handler) {
    this.#btnNewGame.addEventListener('click', function (e) {
      e.preventDefault();
      const difficulty = document.querySelector('select').value;
      handler(difficulty);
    });
  }
}

export default new NewGameView();
