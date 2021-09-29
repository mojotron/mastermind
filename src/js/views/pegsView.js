class PegsView {
  renderPegs(currentTurn, pegs) {
    const box = document.querySelector(`[data-turn="${currentTurn}"]`);
    //This is for undo button logic
    box.querySelectorAll('[data-peg]').forEach(peg => {
      peg.style.backgroundColor = 'inherit';
    });
    pegs.forEach((color, i) => {
      const pin = box.querySelector(`[data-peg="${i}"]`);
      pin.style.backgroundColor = `var(--peg-${color})`;
    });
  }

  renderFlags(currentTurn, flags) {
    const box = document.querySelector(`[data-turn="${currentTurn}"]`);
    flags.forEach((color, i) => {
      const pin = box.querySelector(`[data-flag="${i}"]`);
      pin.style.backgroundColor = `var(--flag-${color})`;
    });
  }
}

export default new PegsView();
