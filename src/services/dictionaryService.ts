import { DICTIONARY_API_URL } from "../constants/apiUrls";

// External API to validate the word
export const validateWord = async (word: string) => {
  try {
    const response = await fetch(DICTIONARY_API_URL(word));
    if (response.ok) return true;
    return false;
  } catch {
    throw "Error while trying validate word throught api";
  }
};
