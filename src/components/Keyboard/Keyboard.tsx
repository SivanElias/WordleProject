import { memo } from "react";

type KeyboardProps = {
  onKeyPress: (char: string) => void;
  keyboardLetters: string[][];
};

export const Keyboard = memo(
  ({ keyboardLetters, onKeyPress }: KeyboardProps) => {
    return (
      <div className="">
        {keyboardLetters.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((char) => (
              <button key={char} className="" onClick={() => onKeyPress(char)}>
                {char}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }
);
