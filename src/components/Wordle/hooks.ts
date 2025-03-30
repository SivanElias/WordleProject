import { useEffect, useState } from "react";
import { MAX_WORD_LENGTH, KeyEnum } from "./constants";
import { validateWord } from "../../services";
import { actionListener, ActionListenerKeys } from "../../utils";

export const useCharactersValidation = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [isValidWord, setIsValidWord] = useState<boolean | null>(null);

  useEffect(() => {
    // Handle key press
    const handleCharacterAction = async (char: string) => {
      if (char === KeyEnum.BACKSPACE) {
        setCharacters((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev)); // Remove last character
        setIsValidWord(null);
      } else if (char === KeyEnum.ENTER) {
        if (characters.length != MAX_WORD_LENGTH) {
          return setIsValidWord(false);
        } else {
          validateWord(characters.join(""))
            .then((isValid) => setIsValidWord(isValid))
            .catch((err) => console.error(err));
        }
      } else {
        setCharacters((prev) =>
          prev.length < MAX_WORD_LENGTH ? [...prev, char] : prev
        );
        setIsValidWord(null);
      }
    };

    // Register key press listener
    actionListener.registerListener(
      ActionListenerKeys.WORDLE_KEY_PRESS,
      handleCharacterAction
    );

    // Clean up listeners on unmount
    return () => {
      actionListener.removeListener(ActionListenerKeys.WORDLE_KEY_PRESS);
    };
  }, [characters]);

  return { characters, isValidWord };
};
