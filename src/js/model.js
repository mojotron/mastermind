import { GAME_MODE, TURNS } from './config.js';

export const state = {
  difficulty: 'normal', //TODO empty string, user sets this with new game
  turn: 0,
  timeStart: null,
  time: null,
  secretCode: [],
  userCode: [],
  highScores: {
    easy: [],
    normal: [],
    hard: [],
  },
};

export const setDifficulty = function (difficulty) {
  state.difficulty = difficulty;
};

export const setSecretCode = function (codeArray) {
  state.secretCode = codeArray;
};

export const incrementTurn = function () {
  state.turn++;
};

export const resetUserCode = function () {
  state.userCode = [];
};

export const compareCodes = function (playerCode, secretCode) {
  let redFlags = 0;
  let whiteFlags = 0;
  //Temp array to mark colors selected with red or white flag
  const result = Array.from(
    { length: GAME_MODE[state.difficulty].codeLength },
    () => null
  );
  //Find red flags
  for (const [i, color] of playerCode.entries()) {
    if (color === secretCode[i]) {
      result[i] = color;
      redFlags++;
    }
  }
  //Find white flags
  for (const [i, color] of playerCode.entries()) {
    if (
      result.filter(ele => ele === color).length ===
      secretCode.filter(ele => ele === color).length
    )
      continue;
    if (result[i]) continue;
    if (secretCode.includes(color)) {
      result[i] = color;
      whiteFlags++;
    }
  }
  console.log(redFlags, whiteFlags);
  return [redFlags, whiteFlags];
};

const storageHighScores = function () {
  localStorage.setItem('highscores', JSON.stringify(state.highScores));
};

export const addHighScore = function (userName, moves, time) {
  state.highScores[state.difficulty].push({ userName, moves, time });
  //using arrays mutate feature to sort in place
  sortHighScores(state.highScores[state.difficulty]);
  storageHighScores();
};

const init = function () {
  const storage = localStorage.getItem('highscores');
  if (storage) state.highScores = JSON.parse(storage);
};
init();

const clearStorage = function () {
  localStorage.clear('highscores');
};

const sortHighScores = function (array) {
  return array.sort((a, b) => {
    if (a.moves > b.moves) return 1;
    if (a.moves < b.moves) return -1;
    if (a.time > b.time) return 1;
    if (a.time < b.time) return -1;
  });
};

// clearStorage();
