// key board constants
export const WORDLE_KEYBOARD_LETTERS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

export enum KeyEnum {
  ENTER = "ENTER",
  BACKSPACE = "BACKSPACE",
}

export const ENTER_KEY = KeyEnum.ENTER;
export const BACKSPACE_KEY = KeyEnum.BACKSPACE;

// validation
export const MAX_WORD_LENGTH = 5;
