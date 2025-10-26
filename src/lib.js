import { WINNING_INDICES } from "./constants.js";

export const calculateWinner = (board) => {
  for (const letter of ["X", "O"]) {
    for (const winningIndices of WINNING_INDICES) {
      if (winningIndices.every((index) => board[index] === letter)) {
        return { winner: letter, line: winningIndices };
      }
    }
  }
  return { winner: null, line: [] };
};
