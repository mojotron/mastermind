//prettier-ignore
export const COLORS = [
  'blue', 'green', 'yellow', 'red', 'orange', 'purple', 'brown', 'black',
];
//Game mode, length of code to break, out of how much possible colors there is
export const GAME_MODE = {
  easy: { codeLength: 3, colorChoice: 4 },
  normal: { codeLength: 4, colorChoice: 6 },
  hard: { codeLength: 5, colorChoice: 8 },
};

export const TURNS = 10;
