import { getLetterOccurrences } from "./letters";

export const checkRansomNote = (message: string, magazine: string) => {
  const messageLetterOccurrences = getLetterOccurrences(message);
  const magazineLetterOccurrences = getLetterOccurrences(magazine);

  for (const [letter, count] of messageLetterOccurrences.entries()) {
    const magazineLetterCount = magazineLetterOccurrences.get(letter);

    if (!magazineLetterCount) {
      return false;
    }

    if (count > magazineLetterCount) {
      return false;
    }
  }

  return true;
};
