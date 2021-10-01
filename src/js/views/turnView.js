class TurnView {
  #active = 'game-turn-active';
  #miss = 'game-turn-miss';
  updateTurnStyle(currentTurn, active = true) {
    const box = document.querySelector(`[data-turn="${currentTurn}"]`);
    box.classList.add(`${active ? this.#active : this.#miss}`);
  }
}

export default new TurnView();
