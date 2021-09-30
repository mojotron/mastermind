class TurnView {
  updateTurnStyle(currentTurn) {
    const box = document.querySelector(`[data-turn="${currentTurn}"]`);
    box.classList.add('game-turn-active');
  }
}

export default new TurnView();
