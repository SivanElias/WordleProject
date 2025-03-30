import "./Wordle.css";
import { WORDLE_KEYBOARD_LETTERS, MAX_WORD_LENGTH } from "./constants";
import { useCharactersValidation } from "./hooks";
import { Keyboard, CharacterGrid } from "..";
import { actionListener, ActionListenerKeys } from "../../utils";

const getGridBorderStatusColor = (isValid: boolean | null) => {
  if (isValid === null) {
    return "";
  } else if (isValid === true) {
    return "success";
  } else {
    return "failed";
  }
};

function Wordle() {
  const { characters, isValidWord } = useCharactersValidation();

  return (
    <div className="wordle-container">
      <CharacterGrid
        characters={characters}
        borderStatusColor={getGridBorderStatusColor(isValidWord)}
        numSquares={MAX_WORD_LENGTH}
      />
      <Keyboard
        onKeyPress={(char: string) =>
          actionListener.emit(ActionListenerKeys.WORDLE_KEY_PRESS, char)
        }
        keyboardLetters={WORDLE_KEYBOARD_LETTERS}
      />
    </div>
  );
}

export default Wordle;
