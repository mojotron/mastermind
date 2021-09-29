import { GAME_MODE, TURNS } from './config.js';

const state = {
  difficulty: 'normal', //TODO empty string, user sets this with new game
  turn: 0,
  timeStart: null,
  secretCode: [],
  userCode: [],
  highScores: [],
};

//High score
//-format [username],[turns],[seconds]
//{username, turns, seconds}
//save to local storage
//from local storage to state

//COMPARE CODES

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
