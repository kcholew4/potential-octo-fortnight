import { getLetterOccurrences } from "./letters";

export const checkRansomNote = (message: string, magazine: string) => {
  const messageLetterOccurrences = getLetterOccurrences(message);
  const magazineLetterOccurrences = getLetterOccurrences(magazine);

  // Iterate over every character in the message and the amount of times it has occured
  for (const [letter, count] of messageLetterOccurrences.entries()) {
    const magazineLetterCount = magazineLetterOccurrences.get(letter);

    // A character doesn't exist in the magazine
    if (!magazineLetterCount) {
      return false;
    }

    // A character occurs more times than in the magazine.
    if (count > magazineLetterCount) {
      return false;
    }
  }

  return true;
};
