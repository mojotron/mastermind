import { COLORS, GAME_MODE } from './config.js';
class CodeMaker {
  #colors = [...COLORS];

  #randomNumOf(endNum) {
    return Math.floor(Math.random() * endNum);
  }

  #getColor(highNum) {
    return this.#colors[this.#randomNumOf(highNum)];
  }

  #makeCode(codeLength, colorChoice) {
    return Array.from({ length: codeLength }, () =>
      this.#getColor(colorChoice)
    );
  }

  createCode(difficulty = 'normal') {
    const { codeLength, colorChoice } = GAME_MODE[difficulty];
    return this.#makeCode(codeLength, colorChoice);
  }
}
export default new CodeMaker();
