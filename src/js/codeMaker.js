class CodeMaker {
  //prettier-ignore
  #colors = [
    "blue", "green", "yellow", "red",
    "orange", "purple", "brown", "black",
  ];

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
  createCode(difficulty = "normal") {
    //Easy game 3 pins from 5 colors
    if (difficulty === "easy") return this.#makeCode(3, 5);
    //Hard mode 5 pins from 8 colors
    if (difficulty === "hard") return this.#makeCode(5, 8);
    //Normal game set 4 pins from 6 colors
    return this.#makeCode(4, 6);
  }
}
export default new CodeMaker();
